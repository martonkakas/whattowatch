import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { sanitize } from '@/utils/helpers';

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1'
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { genres, vibe, startYear, endYear } = body;

    console.log('Received request with body:', body);

    const sanitizedVibe = vibe ? sanitize(vibe) : '';
    const sanitizedGenres = genres ? genres.sort().map((genre: string) => sanitize(genre)) : [];

    const data = {
      genres: sanitizedGenres.join(', '),
      vibe: sanitizedVibe,
      startYear: startYear ? parseInt(startYear, 10) : undefined,
      endYear: endYear ? parseInt(endYear, 10) : undefined,
    };

    // Check data in the database before calling the AI
    // TODO: Implement database lookup for cached recommendations

    // If no data is found, proceed to call the AI
    console.log('Calling AI with data:', data);

    const completion = await client.chat.completions.create({
      model: 'grok-3-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a film recommending AI. Recommend a movie based on the user\'s preferences (e.g., genre, mood, start year - end year).',
        },
        {
          role: 'user',
          content: `Please recommend 3 movies which are eligible for the following criteria:
            - Genre: ${genres.length > 0 ? genres.join(', ') : 'any'},
            - Vibe: ${vibe || 'any'},
            - Start Year: ${startYear || 'any'},
            - End Year: ${endYear || 'any'}.
            Your response must be a JSON object with the following structure:
            {
              "recommendations": [
                {
                  "title": "Movie Title",
                  "plot": "Brief description of the movie plot.",
                  "year": 2023,
                  "poster": "URL to the movie poster image",
                  "imdbId": "tt1234567",
                  "imdbUrl": "https://www.imdb.com/title/tt1234567/",
                  "genres": ["genre1", "genre2"],
                  "duration": "120 min",
                },
                ...
              ]
            }
            The response must only contain the JSON object without any additional text or explanation. If no movies match the criteria, return an empty array in the recommendations field.`
        },
      ],
    });

    const response = completion.choices[0].message.content;

    if (!response) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 400 }
      );
    }

    // Create the unmatched database entry for future caching
    // const newData = {
    //   ...data,
    //   ...{ movies: [...JSON.parse(response).recommendations] }
    // };

    // TODO: Upload newData to the database
    // TODO: Download the poster images and update the URLs in the response
    // TODO: Save the posters to object storage

    // Parse the AI response and return it as proper JSON
    const parsedResponse = JSON.parse(response);

    return NextResponse.json(parsedResponse, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}
