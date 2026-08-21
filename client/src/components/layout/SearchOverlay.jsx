import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, X, ArrowRight } from 'lucide-react';
import { textiles } from '../../data/textiles';
import { motifs } from '../../data/motifs';
import { stories } from '../../data/stories';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';

export default function SearchOverlay({ open, onClose }) {
  const { t } = useTranslation();
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    const Q = q.trim().toLowerCase();
    if (Q.length < 2) return null;
    const hay = (...vals) => vals.join(' ').toLowerCase();
    return {
      textiles: textiles
        .filter((x) => hay(x.title, x.titlePa, x.region, x.type, x.period))
        .slice(0, 5),
      motifs: motifs.filter((m) => hay(m.name, m.namePa, m.subtitle, m.category)).slice(0, 5),
      stories: stories.filter((s) => hay(s.title, s.titlePa, s.category)).slice(0, 4),
    };
  }, [q]);

  if (!open) return null;

  const go = (path) => {
    onClose();
    setQ('');
    navigate(path);
  };

  const Row = ({ swatch, title, sub, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 border-b border-hairline px-5 py-4 text-left transition-colors duration-200 ease-out-expo hover:bg-cream"
    >
      <PhulkariPattern bg={swatch[0]} threads={swatch.slice(1)} seed={hashId(title)} className="h-11 w-11 shrink-0" />
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-lg leading-snug">{title}</span>
        <span className="block text-xs uppercase tracking-[0.16em] text-ink-soft">{sub}</span>
      </span>
      <ArrowRight size={16} className="shrink-0 text-maroon" aria-hidden="true" />
    </button>
  );

  const hasResults =
    results && (results.textiles.length || results.motifs.length || results.stories.length);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-paper">
      <div className="border-b border-hairline">
        <div className="container-site flex items-center gap-4 py-5">
          <Search size={20} className="shrink-0 text-maroon" aria-hidden="true" />
          <input
            autoFocus
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('common.searchPlaceholder')}
            aria-label={t('common.search')}
            className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-ink-soft"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.close')}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-hairline transition-colors duration-200 ease-out-expo hover:bg-ink hover:text-paper"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="container-site py-10">
          {results === null && (
            <p className="text-sm uppercase tracking-[0.2em] text-ink-soft">
              {t('common.searchPlaceholder')}
            </p>
          )}
          {results && !hasResults && (
            <p className="text-sm uppercase tracking-[0.2em] text-ink-soft">{t('common.noResults')}</p>
          )}
          {hasResults && (
            <div className="mx-auto max-w-2xl overflow-hidden rounded-sm border border-hairline">
              {results.textiles.length > 0 && (
                <section aria-label="Textiles">
                  <h2 className="border-b border-hairline bg-cream px-5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                    Textiles
                  </h2>
                  {results.textiles.map((x) => (
                    <Row
                      key={x.id}
                      swatch={x.colors}
                      title={x.title}
                      sub={`${x.type} · ${x.region}`}
                      onClick={() => go(`/collection?textile=${x.id}`)}
                    />
                  ))}
                </section>
              )}
              {results.motifs.length > 0 && (
                <section aria-label="Motifs">
                  <h2 className="border-b border-hairline bg-cream px-5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                    Motifs
                  </h2>
                  {results.motifs.map((m) => (
                    <Row
                      key={m.id}
                      swatch={m.colors}
                      title={`${m.name} — ${m.subtitle}`}
                      sub={m.category}
                      onClick={() => go(`/motifs?motif=${m.id}`)}
                    />
                  ))}
                </section>
              )}
              {results.stories.length > 0 && (
                <section aria-label="Stories">
                  <h2 className="border-b border-hairline bg-cream px-5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                    Stories
                  </h2>
                  {results.stories.map((s) => (
                    <Row
                      key={s.id}
                      swatch={s.colors}
                      title={s.title}
                      sub={s.category}
                      onClick={() => go(`/stories?story=${s.id}`)}
                    />
                  ))}
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
