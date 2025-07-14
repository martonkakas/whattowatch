import { labels } from '@/data/labels';
import { IconButton } from './icon-button';
import { icons } from '@/data/icons';
import { Title } from './title';

const helpClassName = 'fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md';
const dialogClassName = 'flex flex-col gap-3 relative z-20 flex flex-col max-w-md w-full';
const closeClassName = 'absolute z-30 top-6 right-6';
const titleClassName = 'text-2xl font-bold';
const descriptionClassName = 'text-lg font-medium';
const overlayClassName = 'absolute inset-0 z-10 bg-black opacity-50';

const closeIcon = icons.close;

const closeLabel = labels.close;
const title = labels.help.title;
const helpLabel = labels.help.label;
const description = labels.help.description.map(t => t === '{{title}}' ? <Title key="title" /> : t);
const description2 = [
  `Made with ❤️ by `,
  <a key="url" href="https://skape.io">skape.io</a>
];

export const Help = ({ isOpen, handleToggleClick, id }: { isOpen: boolean; handleToggleClick: () => void; id: string; }) => (
  <div
    id={id}
    className={helpClassName}
    hidden={!isOpen}
    aria-modal="true"
    aria-label={helpLabel}
  >
    <IconButton
      className={closeClassName}
      label={closeLabel}
      icon={closeIcon}
      onClick={handleToggleClick}
      diameter={24}
    />
    <div className={dialogClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
      <p className={descriptionClassName}>{description2}</p>
    </div>
    <span
      className={overlayClassName}
      onClick={handleToggleClick}
    />
  </div>
);
