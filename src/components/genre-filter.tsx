import { ChangeEvent } from "react";
import { SubHeader } from "./sub-header";
import { Genre } from "./genre";
import { IconButton } from "./icon-button";
import { labels } from "@/data/labels";
import { icons } from "@/data/icons";

const genreFilterClassName = 'flex flex-col gap-3';
const listClassName = 'flex flex-wrap gap-2';
const addCustomWrapperClassName = 'flex flex-col gap-1';
const addCustomLabelClassName = 'text-lg font-medium';
const fieldWrapperClassName = 'flex items-center gap-2';
const addCustomFieldClassName = 'border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium';

const title = labels.genres.title;
const description = labels.genres.description;
const addCustomLabel = labels.addCustom.label;
const addCustomPlaceholder = labels.addCustom.placeholder;
const buttonLabel = labels.addCustom.title;

const buttonIcon = icons.plus;

export const GenreFilter = ({
  defaultGenres,
  genres,
  handleGenresChange,
  customGenre,
  customGenreId,
  handleCustomGenreChange,
  handleCustomGenreClick,
  customInputRef
}: {
  defaultGenres: string[];
  genres: string[];
  handleGenresChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customGenre: string;
  customGenreId: string;
  handleCustomGenreChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCustomGenreClick: () => void;
  customInputRef: React.RefObject<HTMLInputElement | null>;
}) => (
  <div className={genreFilterClassName}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassName}>
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
    <div className={addCustomWrapperClassName}>
      <label htmlFor={customGenreId} className={addCustomLabelClassName}>{addCustomLabel}</label>
      <span className={fieldWrapperClassName}>
        <input
          type="text"
          id={customGenreId}
          className={addCustomFieldClassName}
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
