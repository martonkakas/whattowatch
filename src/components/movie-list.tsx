import { Movie } from '@/types/Movie';
import { MovieCard } from './movie-card';
import { NewButton } from './new-button';
import { SubHeader } from './sub-header';
import { labels } from '@/data/labels';

const moviesListClassName = 'flex flex-col gap-4 items-center max-w-xl w-full';
const listClassName = 'flex flex-col w-full gap-4';
const listItemClassName = 'mb-4';
const footerClassName = 'flex gap-3 items-center';

const title = labels.list.title;
const description = labels.list.description;
const resetMoviesAndFiltersLabel = labels.list.reset.moviesAndFilters;
const resetMoviesLabel = labels.list.reset.movies;

export const MovieList = ({
  movies,
  handleResetMoviesAndFiltersClick,
  handleResetMoviesClick,
  handleImageError
}: {
  movies: Movie[];
  handleResetMoviesAndFiltersClick: () => void;
  handleResetMoviesClick: () => void;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}) => (
  <div className={moviesListClassName}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassName}>
      {movies.map((movie, index) => (
        <li key={index} className={listItemClassName}>
          <MovieCard
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            plot={movie.plot}
            genres={movie.genres}
            duration={movie.duration}
            url={movie.imdbUrl}
            handleImageError={handleImageError}
          />
        </li>
      ))}
    </ul>
    <footer className={footerClassName}>
      <NewButton
        label={resetMoviesAndFiltersLabel}
        handleClick={handleResetMoviesAndFiltersClick}
      />
      <NewButton
        label={resetMoviesLabel}
        handleClick={handleResetMoviesClick}
      />
    </footer>
  </div>
);
