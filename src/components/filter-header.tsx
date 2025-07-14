import Icon from './icon';

const filterHeaderClassname = 'flex items-center w-full';
const labelClassname = 'flex-1 text-lg font-medium';

const label = 'Filters';

const iconOpened = 'minus';
const iconClosed = 'plus';

export const FilterHeader = ({
  isOpen,
  onClick
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className={filterHeaderClassname} onClick={onClick}>
    <span className={labelClassname}>{label}</span>
    <Icon
      name={isOpen ? iconOpened : iconClosed}
      diameter={16}
    />
  </div>
);
