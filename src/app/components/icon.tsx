import { icons } from './icons';

export const Icon = ({ name, diameter = 16 }: { name: string; diameter?: number }) => (
  icons[name](diameter)
);
