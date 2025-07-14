import { styles } from './styles';
import Icon from './icon';

export const IconButton = ({
  label,
  icon,
  onClick,
  diameter = 16,
  className = ''
}: {
  label: string,
  icon: string,
  onClick: () => void,
  diameter?: number,
  className?: string
}) => (
  <button type="button" onClick={onClick} className={className}>
    <span style={styles.visuallyHidden}>{label}</span>
    <Icon
      name={icon}
      diameter={diameter}
    />
  </button>
);
