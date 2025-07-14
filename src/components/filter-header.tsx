import Icon from './icon';
import { labels } from '@/data/labels';
import { icons } from '@/data/icons';

const filterHeaderClassName = 'flex items-center w-full';
const labelClassName = 'flex-1 text-lg font-medium';

const label = labels.filters.title;

const iconOpened = icons.minus;
const iconClosed = icons.plus;

export const FilterHeader = ({
  isOpen,
  onClick
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className={filterHeaderClassName} onClick={onClick}>
    <span className={labelClassName}>{label}</span>
    <Icon
      name={isOpen ? iconOpened : iconClosed}
      diameter={16}
    />
  </div>
);
