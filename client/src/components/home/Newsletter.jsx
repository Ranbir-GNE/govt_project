import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FloralMark from '../art/FloralMark';

export default function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.includes('@')) setDone(true);
  };

  return (
    <section className="border-t border-hairline py-20 md:py-24" aria-labelledby="newsletter-title">
      <div className="container-site">
        <div className="mx-auto max-w-xl text-center">
          <FloralMark className="mx-auto h-10 w-10 text-maroon" />
          <p className="eyebrow-maroon mt-5">{t('home.newsletterEyebrow')}</p>
          <h2
            id="newsletter-title"
            className="mt-3 font-serif text-3xl font-semibold text-maroon md:text-4xl"
          >
            Preserve. Share. Inspire.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">{t('home.newsletterBody')}</p>
          {done ? (
            <p className="mt-8 font-serif text-xl italic text-maroon" role="status">
              {t('common.thankYou')}
            </p>
          ) : (
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                {t('common.emailPlaceholder')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('common.emailPlaceholder')}
                className="flex-1 rounded-xs border border-hairline bg-paper px-4 py-3.5 outline-none transition-colors duration-200 ease-out-expo focus:border-maroon"
              />
              <button
                type="submit"
                className="rounded-xs bg-maroon px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-200 ease-out-expo hover:bg-terracotta"
              >
                {t('common.subscribe')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
