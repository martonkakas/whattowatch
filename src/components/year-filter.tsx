import { ChangeEvent } from 'react';
import { ClearYear } from './clear-year';
import { SubHeader } from './sub-header';
import { labels } from '@/data/labels';

const yearFilterClassName = 'flex flex-col gap-3';
const listClassName = 'flex gap-4';
const listItemClassName = 'flex flex-col flex-1 gap-1';
const fieldWrapperClassName = 'flex items-center gap-2';
const labelClassName = 'text-lg font-medium';
const fieldClassName = 'border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium';

const title = labels.years.title;
const description = labels.years.description;

const startYearLabel = labels.years.startYear.label;
const startYearPlaceholder = labels.years.startYear.placeholder;
const endYearLabel = labels.years.endYear.label;
const endYearPlaceholder = labels.years.endYear.placeholder;

export const YearFilter = ({
  startYear,
  startYearId,
  endYear,
  endYearId,
  handleStartYearChange,
  handleEndYearChange,
  handleClearStartYearClick,
  handleClearEndYearClick
}: {
  startYear: string;
  startYearId: string;
  endYear: string;
  endYearId: string;
  handleStartYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEndYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearStartYearClick: () => void;
  handleClearEndYearClick: () => void;
}) => (
  <div className={yearFilterClassName}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassName}>
      <li className={listItemClassName}>
        <label htmlFor={startYearId} className={labelClassName}>{startYearLabel}</label>
        <div className={fieldWrapperClassName}>
          <input
            type="number"
            id={startYearId}
            className={fieldClassName}
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            value={startYear}
            placeholder={startYearPlaceholder}
            onChange={handleStartYearChange}
          />
          {startYear && (
            <ClearYear handleClick={handleClearStartYearClick} />
          )}
        </div>
      </li>
      <li className={listItemClassName}>
        <label htmlFor={endYearId} className={labelClassName}>{endYearLabel}</label>
        <div className={fieldWrapperClassName}>
          <input
            type="number"
            id={endYearId}
            className={fieldClassName}
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            value={endYear}
            placeholder={endYearPlaceholder}
            onChange={handleEndYearChange}
          />
          {endYear && (
            <ClearYear handleClick={handleClearEndYearClick} />
          )}
        </div>
      </li>
    </ul>
  </div>
);
