import Image from 'next/image';

export const MovieCard = ({ title, year, poster, plot, genres, duration, url }: { title: string; year: string; poster: string; plot: string; genres: string[]; duration: string; url: string}) => (
  <a className="flex gap-4 items-center" href={url}>
    <span className="basis-40 shrink-0 grow-0">
      <Image
        src={poster}
        alt={`${title} Poster`}
        width={160}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </span>
    <span className="flex flex-col gap-2">
      <span className="text-2xl font-bold">{title}</span>
      <span className="flex gap-2">
        <span className="opacity-75 text-lg font-medium">{year}</span>
        <span className="opacity-75 text-lg font-medium">&bull;</span>
        <span className="opacity-75 text-lg font-medium">{duration}</span>
      </span>
      <span className="opacity-75 text-lg font-medium">{genres.join(', ')}</span>
      <span className="text-lg font-medium">{plot}</span>
    </span>
  </a>
);
