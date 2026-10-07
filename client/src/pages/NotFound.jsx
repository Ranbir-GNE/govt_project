import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DiamondDivider } from '../components/ui/primitives';
import PhulkariPattern, { hashId } from '../components/art/PhulkariPattern';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="text-center">
        <PhulkariPattern
          bg="#8E2F26"
          threads={["#C9A227", "#294F68"]}
          seed={hashId('under-construction')}
          className="mx-auto h-36 w-36 md:h-48 md:w-48 rounded-full mb-6 opacity-60"
          label="Under construction pattern"
        />
        <p className="font-serif text-7xl font-semibold text-maroon mb-4">
          {t('underConstruction.title')}
        </p>
        <h1 className="font-serif text-2xl font-semibold uppercase tracking-wide text-ink mb-2">
          {t('underConstruction.subtitle')}
        </h1>
        <p className="font-gurmukhi-serif text-lg text-ink-soft mb-6 max-w-md mx-auto">
          {t('underConstruction.description')}
        </p>
        <DiamondDivider className="mt-5 justify-center" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="link-arrow">
            {t('common.backToHome')}
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/activities" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-maroon hover:text-ink transition-colors">
            {t('nav.activities')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}