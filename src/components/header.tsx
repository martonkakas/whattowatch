import { IconButton } from './icon-button';

const headerClassName = 'flex items-center justify-center gap-2 w-full max-w-2xl';
const titleClassName = 'flex gap-[2px] text-2xl font-black';
const toClassName = 'font-light';

const helpLabel = 'Help';
const helpIcon = 'help';

export const Header = ({ handleToggleHelpClick }: { handleToggleHelpClick: () => void }) => (
  <header className={headerClassName}>
    <h1 className={titleClassName}>
      <span>what</span>
      <span className={toClassName}>to</span>
      <span>watch</span>
    </h1>
    <IconButton
      label={helpLabel}
      icon={helpIcon}
      diameter={16}
      onClick={handleToggleHelpClick}
    />
  </header>
);
