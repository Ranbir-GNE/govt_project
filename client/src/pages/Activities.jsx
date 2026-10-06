import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { activities } from '../data/activities';
import ActivityCard from '../components/activities/ActivityCard';
import ActivityModal from '../components/modals/ActivityModal';
import { Eyebrow, DiamondDivider } from '../components/ui/primitives';

export default function Activities() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState('all');

  const categories = useMemo(() => [...new Set(activities.map((a) => a.category))].sort(), []);
  const filtered = useMemo(
    () => (category === 'all' ? activities : activities.filter((a) => a.category === category)),
    [category]
  );

  const openId = params.get('activity');
  const openActivity = activities.find((a) => a.id === openId);

  const closeModal = () => {
    const next = new URLSearchParams(params);
    next.delete('activity');
    setParams(next, { replace: true });
  };

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>{t('activities.eyebrow')}</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            {t('activities.title')}
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">{t('activities.titlePa')}</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">{t('activities.intro')}</p>
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
          {filtered.map((a, i) => (
            <ActivityCard key={a.id} activity={a} index={i} />
          ))}
        </div>
      </div>

      {openActivity && <ActivityModal activity={openActivity} onClose={closeModal} />}
    </div>
  );
}