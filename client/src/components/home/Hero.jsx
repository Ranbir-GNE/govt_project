import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import PhulkariPattern from '../art/PhulkariPattern';
import { DiamondDivider } from '../ui/primitives';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-y-0 right-0 h-full w-full md:w-[64%]">
        <PhulkariPattern
          bg="#8E2F26"
          threads={['#C9A227', '#D9A0A4', '#F4EFE5']}
          seed={11}
          className="h-full w-full"
        />
      </div>
      <svg
        className="absolute inset-y-0 left-0 hidden h-full w-[58%] md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 H60 C82,18 90,55 72,100 H0 Z" fill="var(--color-paper)" />
      </svg>

      <div className="container-site relative z-10">
        <div className="max-w-xl py-16 md:py-28">
          <div className="bg-paper-95 p-6 md:bg-transparent md:p-0">
            <p className="eyebrow text-kasoori">{t('home.heroEyebrow')}</p>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-4xl font-bold uppercase leading-[1.05] tracking-wide text-maroon md:text-6xl"
            >
              Threads that tell our stories
            </h1>
            <p className="mt-4 font-gurmukhi-serif text-xl text-ink-soft">{t('home.heroSub')}</p>
            <DiamondDivider className="mt-6" />
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">{t('home.heroBody')}</p>
            <Button to="/collection" className="mt-8">
              {t('common.exploreCollection')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
