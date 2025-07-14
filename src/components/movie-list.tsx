import { Movie } from '@/types/Movie';
import { MovieCard } from './movie-card';
import { NewButton } from './new-button';
import { SubHeader } from './sub-header';

const moviesListClassName = 'flex flex-col gap-4 items-center max-w-xl w-full';
const listClassname = 'flex flex-col w-full gap-4';
const listItemClassname = 'mb-4';
const footerClassname = 'flex gap-3 items-center';

const title = 'Recommendations';
const description = 'Here are some movies based on your filters';
const resetMoviesAndFiltersLabel = 'New movies, new filters';
const resetMoviesLabel = 'New movies, same filters';

export const MovieList = ({
  movies,
  handleResetMoviesAndFiltersClick,
  handleResetMoviesClick
}: {
  movies: Movie[];
  handleResetMoviesAndFiltersClick: () => void;
  handleResetMoviesClick: () => void;
}) => (
  <div className={moviesListClassName}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassname}>
      {movies.map((movie, index) => (
        <li key={index} className={listItemClassname}>
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
    <footer className={footerClassname}>
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
