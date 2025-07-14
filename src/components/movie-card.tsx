import Image from 'next/image';

const movieCardClassname = 'flex gap-4 items-center';
const posterClassname = 'basis-40 shrink-0 grow-0';
const imageClassname = 'rounded-lg shadow-lg';
const posterStyle = {
  width: 160,
  height: 300,
  objectFit: 'cover'
};
const dataClassname = 'flex flex-col gap-2 flex-1';
const titleClassname = 'text-2xl font-bold';
const yearDurationClassname = 'flex gap-2 opacity-75 text-lg font-medium';
const genresClassname = 'opacity-75 text-lg font-medium';
const plotClassname = 'text-lg font-medium';

export const MovieCard = ({
  title,
  year,
  poster,
  plot,
  genres,
  duration,
  url
}: {
  title: string;
  year: string;
  poster: string;
  plot: string;
  genres: string[];
  duration: string;
  url: string
}) => (
  <a className={movieCardClassname} href={url}>
    <span className={posterClassname}>
      <Image
        src={poster}
        alt={`${title} Poster`}
        width={posterStyle.width}
        height={posterStyle.height}
        className={imageClassname}
      />
    </span>
    <span className={dataClassname}>
      <span className={titleClassname}>{title}</span>
      <span className={yearDurationClassname}>
        <span>{year}</span>
        <span>&bull;</span>
        <span>{duration}</span>
      </span>
      <span className={genresClassname}>{genres.join(', ')}</span>
      <span className={plotClassname}>{plot}</span>
    </span>
  </a>
);
