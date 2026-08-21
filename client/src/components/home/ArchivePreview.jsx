import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { textiles } from '../../data/textiles';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { CarouselArrow, Reveal } from '../ui/primitives';

export default function ArchivePreview() {
  const { t } = useTranslation();
  const scroller = useRef(null);
  const featured = textiles.slice(0, 6);

  const scroll = (dir) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="archive-title">
      <div className="container-site">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow-maroon">The Archive</p>
              <h2
                id="archive-title"
                className="mt-3 font-serif text-3xl font-semibold uppercase tracking-wide text-maroon md:text-4xl"
              >
                {t('home.archiveTitle')}
              </h2>
            </div>
            <Link to="/collection" className="link-arrow hidden sm:inline-flex">
              {t('home.viewAllObjects')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div
            ref={scroller}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
          >
            {featured.map((x) => (
              <Link
                key={x.id}
                to={`/collection?textile=${x.id}`}
                className="group w-64 shrink-0 snap-start overflow-hidden rounded-xs border border-hairline bg-paper transition-shadow duration-300 ease-out-expo hover:shadow-lg sm:w-72"
              >
                <PhulkariPattern
                  bg={x.colors[0]}
                  threads={x.colors.slice(1)}
                  seed={hashId(x.id)}
                  className="aspect-[4/5] w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                  label={`${x.title} pattern`}
                />
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold leading-snug">{x.title}</h3>
                  <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    {x.region} · {x.period}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {textiles.length} {t('common.objects')} — {t('common.viewAll').toLowerCase()} ↓
            </p>
            <div className="flex gap-2">
              <CarouselArrow direction="left" label="Scroll left" onClick={() => scroll(-1)} />
              <CarouselArrow direction="right" label="Scroll right" onClick={() => scroll(1)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
