import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, RotateCcw } from 'lucide-react';
import { textiles } from '../data/textiles';
import TextileCard from '../components/archive/TextileCard';
import TextileModal from '../components/modals/TextileModal';
import { Eyebrow, DiamondDivider } from '../components/ui/primitives';

export default function Collection() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState('');
  const [region, setRegion] = useState('all');
  const [type, setType] = useState('all');

  useEffect(() => {
    const r = params.get('region');
    if (r) {
      setRegion(r);
      const next = new URLSearchParams(params);
      next.delete('region');
      setParams(next, { replace: true });
    }
  }, [params, setParams]);

  const regions = useMemo(() => [...new Set(textiles.map((x) => x.region))].sort(), []);
  const types = useMemo(() => [...new Set(textiles.map((x) => x.type))].sort(), []);

  const filtered = useMemo(() => {
    const Q = q.trim().toLowerCase();
    return textiles.filter((x) => {
      const matchesQ =
        !Q ||
        [x.title, x.titlePa, x.type, x.region, x.period, x.technique].join(' ').toLowerCase().includes(Q);
      const matchesRegion = region === 'all' || x.region === region;
      const matchesType = type === 'all' || x.type === type;
      return matchesQ && matchesRegion && matchesType;
    });
  }, [q, region, type]);

  const openId = params.get('textile');
  const openTextile = textiles.find((x) => x.id === openId);

  const closeModal = () => {
    const next = new URLSearchParams(params);
    next.delete('textile');
    setParams(next, { replace: true });
  };

  const reset = () => {
    setQ('');
    setRegion('all');
    setType('all');
  };

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>The Archive</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            The Collection
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਸੰਗ੍ਰਹਿ</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Every object in the archive is documented as a museum record — provenance, technique,
            ground and thread — so the cloth can keep telling its own story.
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-3 border-y border-hairline py-5 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-xs border border-hairline bg-paper px-4 transition-colors duration-200 ease-out-expo focus-within:border-maroon">
            <Search size={16} className="shrink-0 text-ink-soft" aria-hidden="true" />
            <label htmlFor="collection-search" className="sr-only">
              {t('common.search')}
            </label>
            <input
              id="collection-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('common.searchPlaceholder')}
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <label className="sr-only" htmlFor="filter-region">
              {t('common.region')}
            </label>
            <select
              id="filter-region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-xs border border-hairline bg-paper px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] outline-none transition-colors duration-200 ease-out-expo hover:border-maroon"
            >
              <option value="all">{t('common.region')} — {t('common.filterAll')}</option>
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="filter-type">
              {t('common.type')}
            </label>
            <select
              id="filter-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xs border border-hairline bg-paper px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] outline-none transition-colors duration-200 ease-out-expo hover:border-maroon"
            >
              <option value="all">{t('common.type')} — {t('common.filterAll')}</option>
              {types.map((ty) => (
                <option key={ty} value={ty}>{ty}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-2 rounded-xs border border-hairline px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors duration-200 ease-out-expo hover:bg-ink hover:text-paper"
            >
              <RotateCcw size={13} aria-hidden="true" />
              {t('common.reset')}
            </button>
          </div>
        </div>

        <p className="mt-5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-soft" role="status">
          {filtered.length} {t('common.objects')}
        </p>

        {filtered.length === 0 ? (
          <p className="py-20 text-center font-serif text-2xl italic text-ink-soft">
            {t('common.noResults')}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((x, i) => (
              <TextileCard key={x.id} textile={x} index={i} />
            ))}
          </div>
        )}
      </div>

      {openTextile && <TextileModal textile={openTextile} onClose={closeModal} />}
    </div>
  );
}
