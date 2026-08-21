import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motifs } from '../data/motifs';
import MotifCard from '../components/motifs/MotifCard';
import MotifModal from '../components/modals/MotifModal';
import { Eyebrow, DiamondDivider } from '../components/ui/primitives';

export default function Motifs() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState('all');

  const categories = useMemo(() => [...new Set(motifs.map((m) => m.category))].sort(), []);
  const filtered = useMemo(
    () => (category === 'all' ? motifs : motifs.filter((m) => m.category === category)),
    [category]
  );

  const openId = params.get('motif');
  const openMotif = motifs.find((m) => m.id === openId);

  const closeModal = () => {
    const next = new URLSearchParams(params);
    next.delete('motif');
    setParams(next, { replace: true });
  };

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>The Vocabulary</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            Motifs
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਨਮੂਨੇ</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            The motif is phulkari&apos;s word. Each figure — peacock, bud, moon — carried a name, a
            meaning and a set of variations, passed hand to hand in the trinjan circle.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap gap-2 border-y border-hairline py-5" role="group" aria-label={t('common.category')}>
          <button
            type="button"
            onClick={() => setCategory('all')}
              className={`rounded-xs border px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ease-out-expo ${
              category === 'all'
                ? 'border-maroon bg-maroon text-paper'
                : 'border-hairline text-ink-soft hover:border-maroon hover:text-maroon'
            }`}
          >
            {t('common.filterAll')}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
            className={`rounded-xs border px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ease-out-expo ${
                category === c
                  ? 'border-maroon bg-maroon text-paper'
                  : 'border-hairline text-ink-soft hover:border-maroon hover:text-maroon'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((m, i) => (
            <MotifCard key={m.id} motif={m} index={i} />
          ))}
        </div>
      </div>

      {openMotif && <MotifModal motif={openMotif} onClose={closeModal} />}
    </div>
  );
}
