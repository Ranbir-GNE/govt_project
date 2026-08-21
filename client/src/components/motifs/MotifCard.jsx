import { Link } from 'react-router-dom';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';

export default function MotifCard({ motif, index = 0 }) {
  return (
    <Link
      to={`/motifs?motif=${motif.id}`}
      className="group flex flex-col items-center rounded-xs border border-hairline bg-paper p-6 text-center transition-shadow duration-300 ease-out-expo hover:shadow-lg"
      aria-label={`${motif.name} — ${motif.subtitle}`}
    >
      <PhulkariPattern
        bg={motif.colors[0]}
        threads={motif.colors.slice(1)}
        seed={hashId(motif.id)}
        className="h-36 w-36 rounded-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
        label={`${motif.name} motif pattern`}
      />
      <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {String(index + 1).padStart(2, '0')} · {motif.category}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold">{motif.name}</h3>
      <p className="font-gurmukhi-serif text-lg text-maroon">{motif.namePa}</p>
      <p className="mt-1 text-sm italic text-ink-soft">{motif.subtitle}</p>
    </Link>
  );
}
