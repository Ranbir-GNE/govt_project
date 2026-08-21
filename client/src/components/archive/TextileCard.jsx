import { Link } from 'react-router-dom';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';

export default function TextileCard({ textile, index = 0 }) {
  return (
    <Link
      to={`/collection?textile=${textile.id}`}
      className="group flex flex-col overflow-hidden rounded-xs border border-hairline bg-paper transition-shadow duration-300 ease-out-expo hover:shadow-lg"
      aria-label={`${textile.title} — view object record`}
    >
      <PhulkariPattern
        bg={textile.colors[0]}
        threads={textile.colors.slice(1)}
        seed={hashId(textile.id)}
        className="aspect-[4/5] w-full overflow-hidden transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        label={`${textile.title} embroidery pattern`}
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">{textile.title}</h3>
        <p className="font-gurmukhi text-sm text-ink-soft">{textile.titlePa}</p>
        <p className="mt-3 border-t border-hairline pt-3 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          {textile.type} · {textile.region}
        </p>
        <p className="mt-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          {textile.period}
        </p>
      </div>
    </Link>
  );
}
