import { Link } from 'react-router-dom';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { useTranslation } from 'react-i18next';

export default function ActivityCard({ activity, index = 0 }) {
  const { t } = useTranslation();
  const pictureList = activity.images || activity.pictures || [];
  const hasImage = pictureList.length > 0;
  const firstImage = hasImage ? pictureList[0] : null;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const modeLabel = {
    online: t('common.modeOnline'),
    offline: t('common.modeOffline'),
    hybrid: t('common.modeHybrid'),
  }[activity.mode] || activity.mode;

  return (
    <Link
      to={`/activities?activity=${activity.id}`}
      className="group flex flex-col items-center rounded-xs border border-hairline bg-paper p-6 text-center transition-shadow duration-300 ease-out-expo hover:shadow-lg"
      aria-label={`${activity.name} — ${activity.subtitle}`}
    >
      <div className="relative h-36 w-36 rounded-full overflow-hidden transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]">
        {hasImage && firstImage ? (
          <img
            src={firstImage}
            alt={`${activity.name} activity`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <PhulkariPattern
            bg="#8E2F26"
            threads={["#C9A227", "#294F68"]}
            seed={hashId(activity.id)}
            className="h-full w-full"
            label={`${activity.name} activity pattern`}
          />
        )}
      </div>
      <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {String(index + 1).padStart(2, '0')} · {activity.category}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold">{activity.name}</h3>
      <p className="font-gurmukhi-serif text-lg text-maroon">{activity.namePa}</p>
      <p className="mt-1 text-sm italic text-ink-soft">{activity.subtitle}</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-soft">
        <span className="flex items-center gap-1">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          {formatDate(activity.date)}
        </span>
        <span className="flex items-center gap-1">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {activity.attendance} {t('common.attendees')}
        </span>
      </div>
    </Link>
  );
}