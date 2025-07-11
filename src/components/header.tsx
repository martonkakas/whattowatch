import { IconButton } from './icon-button';

const headerClassName = 'flex items-center justify-center gap-2 w-full max-w-2xl';

export const Header = ({ handleToggleHelpClick }: { handleToggleHelpClick: () => void }) => (
  <header className={headerClassName}>
    <h1 className="flex gap-[2px] text-2xl">
      <span className="font-black">what</span>
      <span className="font-light">to</span>
      <span className="font-black">watch</span>
    </h1>
    <IconButton
      label="Help"
      icon="help"
      diameter={16}
      onClick={handleToggleHelpClick}
    />
  </header>
);
