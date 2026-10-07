import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { DiamondDivider, MetadataList } from '../ui/primitives';

export default function ActivityModal({ activity, onClose }) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!activity) return null;

  const pictureList = activity.images || activity.pictures || [];
  const hasImages = pictureList.length > 0;

  const goToPrevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev === 0 ? pictureList.length - 1 : prev - 1));
    }
  };

  const goToNextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev === pictureList.length - 1 ? 0 : prev + 1));
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const modeLabel = {
    online: t('common.modeOnline'),
    offline: t('common.modeOffline'),
    hybrid: t('common.modeHybrid'),
  }[activity.mode] || activity.mode;

  return (
    <Modal open onClose={onClose} labelledBy="activity-modal-title" wide>
      <div className="relative">
        
          <>
            <PhulkariPattern
              bg="#8E2F26"
              threads={["#C9A227", "#294F68"]}
              seed={hashId(activity.id)}
              className="h-56 w-full md:h-72"
              label={`${activity.name} activity pattern`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(30,28,25,0.35)]">
              <div className="bg-paper-95 px-8 py-6 text-center">
                <p className="font-gurmukhi-serif text-3xl text-maroon md:text-4xl">{activity.namePa}</p>
                <h2
                  id="activity-modal-title"
                  className="mt-1 font-serif text-4xl font-semibold uppercase tracking-wide md:text-5xl"
                >
                  {activity.name}
                </h2>
                <p className="mt-1 font-serif text-lg italic text-ink-soft md:text-xl">{activity.subtitle}</p>
              </div>
            </div>
          </>
      </div>

      <div className="p-6 sm:p-10">
        <p className="max-w-3xl leading-relaxed text-ink-soft">{activity.description}</p>
        <DiamondDivider className="mt-6" />

        <div className="mt-8">
          <MetadataList
            items={[
              [t('common.category'), activity.category],
              [t('common.topic'), activity.topic],
              [t('common.date'), formatDate(activity.date)],
              [t('common.mode'), modeLabel],
              [t('common.attendance'), `${activity.attendance} ${t('common.attendees')}`],
            ]}
          />
        </div>

        <div className="mt-10">
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
            {t('common.significance')}
          </h3>
          <div className="mt-3 border-l-2 border-maroon pl-5">
            <p className="font-serif text-lg italic leading-relaxed">{activity.significance}</p>
          </div>
        </div>

        {hasImages && (
          <div className="relative mt-8">
            <div className="flex h-full w-full items-center justify-center">
            <img
              src={pictureList[currentImageIndex]}
              alt={`${activity.name} - image ${currentImageIndex + 1}`}
              className="h-56 w-full rounded-xs object-cover md:h-72"
            />
</div>
            {pictureList.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-paper-95/90 p-2 text-ink transition-colors hover:bg-paper"
                  aria-label="Previous image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  type="button"
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-paper-95/90 p-2 text-ink transition-colors hover:bg-paper"
                  aria-label="Next image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-paper-95/70 px-3 py-2" aria-label="Image indicators">
                  {pictureList.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImageIndex(i)}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === currentImageIndex ? 'bg-maroon' : 'bg-ink-soft/50 hover:bg-ink-soft'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                      aria-current={i === currentImageIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activity.variations && activity.variations.length > 0 && (
          <div className="mt-10">
            <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
              {t('common.sessions')}
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {activity.variations.map((v, i) => (
                <div
                  key={v.name}
                  className="flex items-center gap-3 rounded-xs border border-hairline bg-cream/40 px-4 py-3"
                >
                  <PhulkariPattern
                    bg="#8E2F26"
                    threads={["#C9A227", "#294F68"]}
                    seed={hashId(activity.id) + i * 17}
                    className="h-10 w-10 shrink-0 rounded-full"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-serif text-sm font-semibold">{v.name}</p>
                    <p className="truncate text-xs leading-relaxed text-ink-soft">{v.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}