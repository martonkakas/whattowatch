'use client'

import axios from 'axios';

import { Movie } from '@/types/Movie';

import { ChangeEvent, useId, useRef, useState } from 'react';
import { Help } from '@/components/help';
import { Header } from '@/components/header';
import { IconButton } from '@/components/icon-button';

import { Status } from '@/components/status';
import { YearFilter } from '@/components/year-filter';
import { MovieList } from '@/components/movie-list';
import { GenreFilter } from '@/components/genre-filter';
import { FilterHeader } from '@/components/filter-header';
import { styles } from '@/components/styles';
import { Banner } from '@/components/banner';

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
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for filter visibility

  const customInputRef = useRef<HTMLInputElement>(null); // Ref for custom genre input

  const startYearId = useId();
  const endYearId = useId();
  const customGenreId = useId();
  const helpId = useId();

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

  const handleFilterHeaderClick = () => {
    setIsOpen(!isOpen);
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
    try {
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
      console.log('Fetching movies with:', { vibe, genres, startYear, endYear });
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };


  const handleSubmit = async () => {
    setIsLoading(true);
    setStatus('Starting to fetch movie recommendations...');

    try {
      setStatus('Fetching movies...');
      console.log('Fetching movies with:', { vibe, genres, startYear, endYear });
      await fetchMovies();
      console.log('Movies fetched successfully!');
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

  const handleClearStartYearClick = () => {
    setStartYear('');
  };

  const handleClearEndYearClick = () => {
    setEndYear('');
  };

  const handleResetMoviesAndFiltersClick = () => {
    setMovies([]);
    setGenres([]);
    setCustomGenre('');
    setStartYear('');
    setEndYear('');
    setDefaultGenres(availableGenres);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { target } = e;
    if (!(target instanceof HTMLImageElement)) return;
    target.srcset = '';
    target.src = '/placeholder.svg';
  };

  return (
    <main className="flex flex-col gap-2 items-center py-6 px-4">
      <Header
        handleToggleHelpClick={handleToggleHelpClick}
      />
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
                <span className="loader">
                  <span style={styles.visuallyHidden}>Please wait...</span>
                </span>
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
          <div>
            <FilterHeader
              isOpen={isOpen}
              onClick={handleFilterHeaderClick}
            />
            {isOpen && (
              <div className="flex flex-col gap-4 pt-4">
                <GenreFilter
                  defaultGenres={defaultGenres}
                  genres={genres}
                  handleGenresChange={handleGenresChange}
                  customGenre={customGenre}
                  customGenreId={customGenreId}
                  handleCustomGenreChange={handleCustomGenreChange}
                  handleCustomGenreClick={handleCustomGenreClick}
                  customInputRef={customInputRef}
                />
                <YearFilter
                  startYear={startYear}
                  startYearId={startYearId}
                  endYear={endYear}
                  endYearId={endYearId}
                  handleStartYearChange={handleStartYearChange}
                  handleEndYearChange={handleEndYearChange}
                  handleClearStartYearClick={handleClearStartYearClick}
                  handleClearEndYearClick={handleClearEndYearClick}
                />
              </div>
            )}
          </div>
        </form>
      )}
      {movies.length > 0 && (
        <MovieList
          movies={movies}
          handleResetMoviesAndFiltersClick={handleResetMoviesAndFiltersClick}
          handleResetMoviesClick={handleResetMoviesClick}
          handleImageError={handleImageError}
        />
      )}
      <Banner />
      <Help
        isOpen={isHelpOpen}
        handleToggleClick={handleToggleHelpClick}
        id={helpId}
      />
      <Status
        message={status}
      />
    </main>
  );
}
