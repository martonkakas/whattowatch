import { labels } from '@/data/labels';
import Icon from './icon';
import { styles } from './styles';
import { icons } from '@/data/icons';

const label = labels.clear;
const icon = icons.close;

export const ClearYear = ({ handleClick }: { handleClick: () => void }) => (
  <button type="button" onClick={handleClick}>
    <span style={styles.visuallyHidden}>{label}</span>
    <Icon name={icon} />
  </button>
);
