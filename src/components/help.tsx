import Icon from './icon';
import { styles } from './styles';

export const Help = ({ isOpen, handleToggleClick }: { isOpen: boolean; handleToggleClick: () => void; }) => (
  <div
    id="help-wrapper"
    className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md"
    hidden={!isOpen}
  >
    <button
      type="button"
      className="absolute z-30 top-6 right-6"
      aria-controls="help"
      onClick={handleToggleClick}
    >
      <span style={styles.visuallyHidden}>Close</span>
      <Icon name="close" diameter={24} />
    </button>
    <div
      id="help"
      className="flex flex-col gap-3 relative z-20 flex flex-col max-w-md w-full"
      aria-modal="true"
      aria-label="help"
    >
      <h2 className="text-2xl font-bold">What is this?</h2>
      <p className="text-lg font-medium">Hey there! Welcome to What to Watch, my fun little side-project born
        from those moments when finding the perfect movie feels impossible,
        but you’re craving something. Whether you’re just vibing with a
        certain mood or want to pick films from a specific year range, this
        app’s got you covered. It’s not too serious—just a chill way to
        discover your next watch. I might toss in some new features down the
        line, so if you’ve got ideas or something’s missing, hit me up
        at <a href="mailto:marton@skape.io">marton@skape.io</a>.</p>
      <p className="text-lg font-medium">Made with ❤️ by <a href="https://skape.io">skape.io</a></p>
    </div>
    <span
      className="absolute inset-0 z-10 bg-black opacity-50"
      onClick={handleToggleClick}
    />
  </div>
);
