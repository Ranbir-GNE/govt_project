import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { traditions } from '../../data/traditions';
import MiniatureArt from '../art/MiniatureArt';
import { Reveal } from '../ui/primitives';

function TraditionBand({ tradition, flip }) {
  const { t } = useTranslation();
  return (
    <section
      id={tradition.id}
      className="scroll-mt-24 py-16 md:py-24"
      style={{ backgroundColor: tradition.band }}
      aria-labelledby={`tradition-${tradition.id}`}
    >
      <div className="container-site">
        <Reveal>
          <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? '' : ''}`}>
            <div className={flip ? 'lg:order-2' : ''}>
              <p className="font-serif text-6xl font-semibold text-[rgba(244,239,229,0.35)] md:text-7xl">
                {tradition.num}
              </p>
              <h2
                id={`tradition-${tradition.id}`}
                className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide text-paper md:text-4xl"
              >
                {tradition.name}
                <span className="mx-3 text-[rgba(244,239,229,0.5)]">|</span>
                <span className="text-xl md:text-2xl">{tradition.meaning}</span>
              </h2>
              <p className="mt-2 font-gurmukhi-serif text-lg text-[rgba(244,239,229,0.85)]">
                {tradition.namePa}
              </p>
              <p className="mt-6 max-w-md leading-relaxed text-[rgba(244,239,229,0.85)]">
                {tradition.short}
              </p>
              <Link to={`/reeti-rivaz#${tradition.id}`} className="link-arrow-light mt-8">
                {t('common.exploreTradition')}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={`mx-auto w-full max-w-sm ${flip ? 'lg:order-1' : ''}`}>
              <MiniatureArt variant={tradition.variant} className="w-full drop-shadow-xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TraditionBands() {
  return (
    <div>
      {traditions.map((tradition, i) => (
        <TraditionBand key={tradition.id} tradition={tradition} flip={i % 2 === 1} />
      ))}
    </div>
  );
}
