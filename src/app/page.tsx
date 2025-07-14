'use client'

import axios from 'axios';

import { Movie } from '../types/Movie';

import { ChangeEvent, useRef, useState } from 'react';
import { Help } from '../components/help';
import { MovieCard } from '../components/movie-card';
import { styles } from '../components/styles';
import { Header } from '../components/header';
import { Genre } from '../components/genre';
import { SubHeader } from '../components/sub-header';
import { NewButton } from '../components/new-button';
import { IconButton } from '../components/icon-button';

import Icon from '../components/icon';
import { Status } from '@/components/status';

export default function Home() {
  const availableGenres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Romance'];

  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [defaultGenres, setDefaultGenres] = useState<string[]>(availableGenres);
  const [vibe, setVibe] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [customGenre, setCustomGenre] = useState<string>('');
  const [startYear, setStartYear] = useState<string>('');
  const [endYear, setEndYear] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(''); // Status for loading or error messages

  const customInputRef = useRef<HTMLInputElement>(null); // Ref for custom genre input

  const handleToggleHelpClick = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  const handleGenresChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (genres.includes(value)) {
      setGenres([...genres].filter((g) => g !== value));
    } else {
      setGenres([...genres, value]);
    }
  };

  const handleCustomGenreChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setCustomGenre(value);
  };

  const handleCustomGenreClick = () => {
    if (customGenre) {
      setDefaultGenres([...defaultGenres, customGenre]);
      setGenres([...genres, customGenre]);
      setCustomGenre('');
    }
  };

  const handleVibeChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setVibe(value);
  };

  const handleStartYearChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setStartYear(value);
  };

  const handleEndYearChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEndYear(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (document.activeElement === customInputRef.current && customGenre.trim()) {
        handleCustomGenreClick();
      } else {
        handleSubmit();
      }
    }
  };

  const fetchMovies = async () => {
    const response = await axios.request({
      method: 'POST',
      url: `${process.env.API_ENDPOINT}/api/recommend`,
      data: {
        vibe,
        genres,
        startYear,
        endYear
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = JSON.parse(response.data);
    console.log('Response from API:', json.recommendations);
    setMovies(json.recommendations);
  };


  const handleSubmit = async () => {
    setIsLoading(true);
    setStatus('Starting to fetch movie recommendations...');

    try {
      setStatus('Fetching movies...');
      await fetchMovies();
      setStatus('');
    } catch (error) {
      setStatus('Error fetching movies. Please try again later.');
      console.error('Error fetching movies:', error);
      setMovies([]);
    }

    setIsLoading(false);
  };

  const handleResetMoviesClick = () => {
    setMovies([]);
    handleSubmit();
  };

  const handleResetMoviesAndFiltersClick = () => {
    setMovies([]);
    setGenres([]);
    setCustomGenre('');
    setStartYear('');
    setEndYear('');
    setDefaultGenres(availableGenres);
  };

  return (
    <main className="flex flex-col gap-2 items-center p-6">
      <Header handleToggleHelpClick={handleToggleHelpClick} />
      {movies.length === 0 && (
        <form
          onKeyDown={handleKeyPress}
          className="flex flex-col border-1 border-gray-800 rounded-2xl bg-gray-900 p-4 w-full max-w-2xl gap-4"
        >
          <div>
            <div className="flex items-center gap-2">
              <input
                id="query"
                className="flex-1 outline-0 text-lg font-medium"
                type="text"
                name="query"
                placeholder="What vibe are you in?"
                value={vibe}
                onChange={handleVibeChange}
              />
              {isLoading ? (
                <span className="text-lg font-medium">Please wait...</span>
              ) : (
                <IconButton
                  label="Search"
                  icon="search"
                  diameter={24}
                  onClick={handleSubmit}
                />
              )}
            </div>
          </div>
          <details>
            <summary>
              <div className="flex items-center w-full">
                <span className="flex-1 text-lg font-medium">Filters</span>
                <span className="icn--closed">
                  <Icon name="plus" diameter={16} />
                </span>
                <span className="icn--opened">
                  <Icon name="minus" diameter={16} />
                </span>
              </div>
            </summary>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-3">
                <SubHeader
                  title="Genres"
                  description="Pick genres for your movie"
                />
                <ul className="flex flex-wrap gap-2">
                  {defaultGenres.map((genre) => (
                    <li key={genre}>
                      <Genre
                        genre={genre}
                        isActive={genres.includes(genre)}
                        handleChange={handleGenresChange}
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-1">
                  <label htmlFor="genre-add-custom" className="text-lg font-medium">Missing something? Add yours</label>
                  <span className="flex items-center gap-2">
                    <input
                      type="text"
                      id="genre-add-custom"
                      className="border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 flex-1 text-lg font-medium"
                      placeholder="e.g. Romantic comedy"
                      onChange={handleCustomGenreChange}
                      value={customGenre}
                      ref={customInputRef}
                    />
                    <IconButton
                      label="Add custom genre"
                      icon="plus"
                      onClick={handleCustomGenreClick}
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <SubHeader
                  title="Years"
                  description="Pick first and last years for your movie"
                />
                <ul className="flex gap-4">
                  <li className="flex flex-col flex-1 gap-1">
                    <label htmlFor="year-start" className="text-lg font-medium">Start</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        id="year-start"
                        className="border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium"
                        min={1900}
                        max={new Date().getFullYear()}
                        step={1}
                        value={startYear}
                        placeholder="e.g. 1990"
                        onChange={handleStartYearChange}
                      />
                      {startYear && (
                        <button type="button" onClick={() => setStartYear('')}>
                          <span style={styles.visuallyHidden}>Clear</span>
                          <Icon name="close" />
                        </button>
                      )}
                    </div>
                  </li>
                  <li className="flex flex-col flex-1 gap-1">
                    <label htmlFor="year-end" className="text-lg font-medium">End</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        id="year-end"
                        className="border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium"
                        min={1900}
                        max={new Date().getFullYear()}
                        step={1}
                        value={endYear}
                        placeholder="e.g. 2020"
                        onChange={handleEndYearChange}
                      />
                      {endYear && (
                        <button type="button" onClick={() => setEndYear('')}>
                          <span style={styles.visuallyHidden}>Clear</span>
                          <Icon name="close" />
                        </button>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </form>
      )}
      {movies.length > 0 && (
        <div className="flex flex-col gap-4 items-center max-w-xl w-full">
          <SubHeader
            title="Recommendations"
            description="Here are some movies based on your filters"
          />
          <ul className="flex flex-col w-full gap-4">
            {movies.map((movie, index) => (
              <li key={index} className="mb-4">
                <MovieCard
                  title={movie.title}
                  year={movie.year}
                  poster={movie.poster}
                  plot={movie.plot}
                  genres={movie.genres}
                  duration={movie.duration}
                  url={movie.imdbUrl}
                />
              </li>
            ))}
          </ul>
          <footer className="flex gap-3 items-center">
            <NewButton
              label="New movies, new filters"
              handleClick={handleResetMoviesAndFiltersClick}
            />
            <NewButton
              label="New movies, same filters"
              handleClick={handleResetMoviesClick}
            />
          </footer>
        </div>
      )}
      <Help
        isOpen={isHelpOpen}
        handleToggleClick={handleToggleHelpClick}
      />
      <Status
        message={status}
      />
    </main>
  );
}
