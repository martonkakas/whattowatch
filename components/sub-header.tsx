const titleClassname = 'text-2xl font-bold';
const descriptionClassname = 'opacity-75 text-lg font-medium';

export const SubHeader = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h2 className={titleClassname}>{title}</h2>
    <p className={descriptionClassname}>{description}</p>
  </div>
);
