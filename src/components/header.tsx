import { labels } from '@/data/labels';
import { IconButton } from './icon-button';
import { icons } from '@/data/icons';
import { Title } from './title';

const headerClassName = 'flex items-center justify-center gap-2 w-full max-w-2xl';
const h1ClassName = 'text-2xl';

const helpLabel = labels.help.label;

const helpIcon = icons.help;

export const Header = ({ handleToggleHelpClick }: { handleToggleHelpClick: () => void }) => (
  <header className={headerClassName}>
    <h1 className={h1ClassName}>
      <Title />
    </h1>
    <IconButton
      label={helpLabel}
      icon={helpIcon}
      diameter={16}
      onClick={handleToggleHelpClick}
    />
  </header>
);
