const className = 'border-1 border-gray-600 rounded-lg bg-gray-800 px-4 py-2 text-lg font-medium';

export const NewButton = ({ label, handleClick }: { label: string; handleClick: () => void }) => (
  <button
    type="button"
    className={className}
    onClick={handleClick}
  >{label}</button>
);
