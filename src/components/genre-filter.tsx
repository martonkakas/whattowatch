import { ChangeEvent } from "react";
import { SubHeader } from "./sub-header";
import { Genre } from "./genre";
import { IconButton } from "./icon-button";

const genreFilterClassname = 'flex flex-col gap-3';
const listClassname = 'flex flex-wrap gap-2';
const addCustomWrapperClassname = 'flex flex-col gap-1';
const addCustomLabelClassname = 'text-lg font-medium';
const fieldWrapperClassname = 'flex items-center gap-2';
const addCustomFieldClassname = 'border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium';

const title = 'Genres';
const description = 'Pick genres for your movie';
const addCustomLabel = 'Missing something? Add yours';
const addCustomPlaceholder = 'e.g. Romantic comedy';
const buttonLabel = 'Add custom genre';
const buttonIcon = 'plus';

export const GenreFilter = ({
  genres,
  handleGenresChange,
  customGenre,
  customGenreId,
  handleCustomGenreChange,
  handleCustomGenreClick,
  customInputRef
}: {
  genres: string[];
  handleGenresChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customGenre: string;
  customGenreId: string;
  handleCustomGenreChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCustomGenreClick: () => void;
  customInputRef: React.RefObject<HTMLInputElement | null>;
}) => (
  <div className={genreFilterClassname}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassname}>
      {genres.map((genre) => (
        <li key={genre}>
          <Genre
            genre={genre}
            isActive={genres.includes(genre)}
            handleChange={handleGenresChange}
          />
        </li>
      ))}
    </ul>
    <div className={addCustomWrapperClassname}>
      <label htmlFor={customGenreId} className={addCustomLabelClassname}>{addCustomLabel}</label>
      <span className={fieldWrapperClassname}>
        <input
          type="text"
          id={customGenreId}
          className={addCustomFieldClassname}
          placeholder={addCustomPlaceholder}
          onChange={handleCustomGenreChange}
          value={customGenre}
          ref={customInputRef}
        />
        <IconButton
          label={buttonLabel}
          icon={buttonIcon}
          onClick={handleCustomGenreClick}
        />
      </span>
    </div>
  </div>
);
