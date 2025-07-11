'use client'

import axios from 'axios';

import { Movie } from './types/Movie';

import { ChangeEvent, useRef, useState } from 'react';
import { Help } from './components/help';
import { Icon } from './components/icon';
import { MovieCard } from './components/movie-card';
import { styles } from './components/styles';

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
      e.preventDefault(); // Prevent default form submission
      if (document.activeElement === customInputRef.current && customGenre.trim()) {
        // Add custom genre if focused and not empty
        handleCustomGenreClick();
      } else {
        // Submit form if not focused on custom genre input
        handleSubmit();
      }
    }
  };

  const fetchMovies = async () => {
    const response = await axios.request({
      method: 'POST',
      url: 'http://localhost:3001/api/recommend',
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
    await fetchMovies();
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
      <header className="flex items-center justify-center gap-2 w-full max-w-2xl">
        <h1 className="flex gap-[2px] text-2xl">
          <span className="font-black">what</span>
          <span className="font-light">to</span>
          <span className="font-black">watch</span>
        </h1>
        <button type="button" aria-controls="help" onClick={handleToggleHelpClick}>
          <span style={styles.visuallyHidden}>Help</span>
          <Icon name="help" diameter={16} />
        </button>
      </header>
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
                <button type="submit" onClick={handleSubmit}>
                  <span style={styles.visuallyHidden}>Search</span>
                  <Icon name="search" diameter={24} />
                </button>
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
                <div>
                  <h2 className="text-2xl font-bold">Genres</h2>
                  <p className="opacity-75 text-lg font-medium">Pick genres for your movie</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {defaultGenres.map((genre) => (
                    <li key={genre}>
                      <label
                        htmlFor={`genre-${genre}`}
                        className={genres.includes(genre) ?
                          'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-gray-600 bg-gray-700' :
                          'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-transparent bg-gray-800'}
                      >
                        <input
                          type="checkbox"
                          id={`genre-${genre}`}
                          className="flex-1 outline-0 text-lg font-medium"
                          value={genre}
                          checked={genres.includes(genre)}
                          onChange={handleGenresChange}
                          style={styles.visuallyHidden}
                        />
                        <span className="leading-none text-lg font-medium">{genre}</span>
                      </label>
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
                    <button type="button" onClick={handleCustomGenreClick}>
                      <span style={styles.visuallyHidden}>Add custom genre</span>
                      <Icon name="plus" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-2xl font-bold">Years</h2>
                  <p className="opacity-75 text-lg font-medium">Pick first and last years for your movie</p>
                </div>
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
          <header className="w-full">
            <h2 className="text-2xl font-bold">Recommendations</h2>
            <p className="opacity-75 text-lg font-medium">Here are some movies based on your filters</p>
          </header>
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
            <button
              type="button"
              className="border-1 border-gray-600 rounded-lg bg-gray-800 px-4 py-2 text-lg font-medium"
              onClick={handleResetMoviesAndFiltersClick}
            >
              New movies, new filters
            </button>
            <button
              type="button"
              className="border-1 border-gray-600 rounded-lg bg-gray-800 px-4 py-2 text-lg font-medium"
              onClick={handleResetMoviesClick}
            >
              New movies, same filters
            </button>
          </footer>
        </div>
      )}
      <Help
        isOpen={isHelpOpen}
        handleToggleClick={handleToggleHelpClick}
      />
    </main>
  );
}
