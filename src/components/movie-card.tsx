import Image from 'next/image';

const movieCardClassName = 'flex gap-4 items-center';
const posterClassName = 'basis-40 shrink-0 grow-0';
const imageClassName = 'rounded-lg shadow-lg';
const posterStyle = {
  width: 160,
  height: 300,
  objectFit: 'cover'
};
const dataClassName = 'flex flex-col gap-2 flex-1';
const titleClassName = 'text-2xl font-bold';
const yearDurationClassName = 'flex gap-2 opacity-75 text-lg font-medium';
const genresClassName = 'opacity-75 text-lg font-medium';
const plotClassName = 'text-lg font-medium';

export const MovieCard = ({
  title,
  year,
  poster,
  plot,
  genres,
  duration,
  url,
  handleImageError
}: {
  title: string;
  year: string;
  poster: string;
  plot: string;
  genres: string[];
  duration: string;
  url: string;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}) => (
  <a className={movieCardClassName} href={url}>
    <span className={posterClassName}>
      <Image
        src={poster}
        alt={`${title} Poster`}
        width={posterStyle.width}
        height={posterStyle.height}
        onError={handleImageError}
        className={imageClassName}
      />
    </span>
    <span className={dataClassName}>
      <span className={titleClassName}>{title}</span>
      <span className={yearDurationClassName}>
        <span>{year}</span>
        <span>&bull;</span>
        <span>{duration}</span>
      </span>
      <span className={genresClassName}>{genres.join(', ')}</span>
      <span className={plotClassName}>{plot}</span>
    </span>
  </a>
);
