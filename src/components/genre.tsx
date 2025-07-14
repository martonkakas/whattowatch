import { ChangeEvent } from 'react';
import { styles } from './styles';

const activeClassname = 'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-gray-600 bg-gray-700';
const inactiveClassname = 'px-2 py-1 rounded-md flex items-center cursor-pointer hover:bg-gray-800 border-1 border-transparent bg-gray-800';
const inputClassname = 'flex-1 outline-0 text-lg font-medium';
const spanClassname = 'leading-none text-lg font-medium';

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
    className={isActive ? activeClassname : inactiveClassname}
  >
    <input
      type="checkbox"
      id={`genre-${genre}`}
      className={inputClassname}
      value={genre}
      checked={isActive}
      onChange={handleChange}
      style={styles.visuallyHidden}
    />
    <span className={spanClassname}>{genre}</span>
  </label>
);
