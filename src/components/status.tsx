const hasMessageClassName = 'absolute translate-x-[-50%] bottom-2 left-1/2 text-center border-1 border-gray-800 rounded-2xl bg-gray-900 px-4 py-2 w-auto';
const noMessageClassName = 'absolute translate-x-[-50%] translate-y-[100%] bottom-2 left-1/2 text-center border-1 border-gray-800 rounded-2xl bg-gray-900 px-4 py-2 w-auto hidden';

export const Status = ({ message }: { message: string }) => (
  <div className={message ? hasMessageClassName : noMessageClassName}>
    <p className="text-lg font-medium">{message}</p>
  </div>
);
