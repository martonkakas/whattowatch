import { styles } from './styles';
import Icon from './icon';

export const IconButton = ({
  label,
  icon,
  onClick,
  diameter = 16
}: {
  label: string,
  icon: string,
  onClick: () => void,
  diameter?: number
}) => (
  <button type="button" onClick={onClick}>
    <span style={styles.visuallyHidden}>{label}</span>
    <Icon
      name={icon}
      diameter={diameter}
    />
  </button>
);
