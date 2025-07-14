import Icon from './icon';
import { styles } from './styles';

const label = 'Clear';
const icon = 'close';

export const ClearYear = ({ handleClick }: { handleClick: () => void }) => (
  <button type="button" onClick={handleClick}>
    <span style={styles.visuallyHidden}>{label}</span>
    <Icon name={icon} />
  </button>
);
