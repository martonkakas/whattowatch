const subHeaderClassName = 'w-full';
const titleClassName = 'text-2xl font-bold';
const descriptionClassName = 'opacity-75 text-lg font-medium';

export const SubHeader = ({
  title,
  description
}: {
  title: string;
  description: string
}) => (
  <div className={subHeaderClassName}>
    <h2 className={titleClassName}>{title}</h2>
    <p className={descriptionClassName}>{description}</p>
  </div>
);
