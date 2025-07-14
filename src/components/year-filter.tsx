import { ChangeEvent } from 'react';
import { ClearYear } from './clear-year';
import { SubHeader } from './sub-header';

const yearFilterClassname = 'flex flex-col gap-3';
const listClassname = 'flex gap-4';
const listItemClassname = 'flex flex-col flex-1 gap-1';
const fieldWrapperClassname = 'flex items-center gap-2';
const labelClassname = 'text-lg font-medium';
const fieldClassname = 'border-1 border-gray-600 rounded-lg bg-gray-800 px-2 py-1 outline-0 w-full text-lg font-medium';

const title = 'Years';
const description = 'Pick first and last years for your movie';

const startYearLabel = 'Start Year';
const startYearPlaceholder = 'e.g. 1990';
const endYearLabel = 'End Year';
const endYearPlaceholder = 'e.g. 2020';

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
  <div className={yearFilterClassname}>
    <SubHeader
      title={title}
      description={description}
    />
    <ul className={listClassname}>
      <li className={listItemClassname}>
        <label htmlFor={startYearId} className={labelClassname}>{startYearLabel}</label>
        <div className={fieldWrapperClassname}>
          <input
            type="number"
            id={startYearId}
            className={fieldClassname}
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
      <li className={listItemClassname}>
        <label htmlFor={endYearId} className={labelClassname}>{endYearLabel}</label>
        <div className={fieldWrapperClassname}>
          <input
            type="number"
            id={endYearId}
            className={fieldClassname}
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
