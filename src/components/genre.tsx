import { ChangeEvent } from 'react';
import { styles } from './styles';

const activeClassName = 'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-gray-600 bg-gray-700';
const inactiveClassName = 'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-transparent bg-gray-800';
const inputClassName = 'flex-1 outline-0 text-lg font-medium';
const spanClassName = 'leading-none text-lg font-medium';

export const Genre = ({
  genre,
  isActive,
  handleChange
}: {
  genre: string;
  isActive: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => (
  <label
    htmlFor={`genre-${genre}`}
    className={isActive ? activeClassName : inactiveClassName}
  >
    <input
      type="checkbox"
      id={`genre-${genre}`}
      className={inputClassName}
      value={genre}
      checked={isActive}
      onChange={handleChange}
      style={styles.visuallyHidden}
    />
    <span className={spanClassName}>{genre}</span>
  </label>
);
