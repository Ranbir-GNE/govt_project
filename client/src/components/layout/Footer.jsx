import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import FloralMark from '../art/FloralMark';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const explore = [
    { to: '/collection', label: t('nav.collection') },
    { to: '/motifs', label: t('nav.motifs') },
    { to: '/reeti-rivaz', label: t('nav.reeti') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/artisans', label: t('nav.artisans') },
    { to: '/regions', label: t('nav.regions') },
  ];

  const resources = [
    { to: '/about', label: t('footer.docs') },
    { to: '/about', label: t('footer.conservation') },
    { to: '/about', label: t('footer.research') },
    { to: '/about', label: t('footer.education') },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="container-site grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        <nav aria-label={t('footer.explore')}>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-zari-gold">
            {t('footer.explore')}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {explore.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-[rgba(244,239,229,0.8)] transition-colors hover:text-zari-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t('footer.resources')}>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-zari-gold">
            {t('footer.resources')}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {resources.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-[rgba(244,239,229,0.8)] transition-colors hover:text-zari-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-zari-gold">
            {t('footer.aboutCol')}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[rgba(244,239,229,0.8)]">{t('footer.tagline')}</p>
          <a
            href="mailto:info@phulkari.in"
            className="mt-4 inline-flex items-center gap-2 text-sm text-zari-gold transition-colors hover:text-paper"
          >
            <Mail size={14} aria-hidden="true" />
            info@phulkari.in
          </a>
        </div>

        <div>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-zari-gold">
            {t('footer.follow')}
          </h2>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={['Facebook', 'Instagram', 'YouTube'][i]}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(244,239,229,0.3)] text-paper transition-colors duration-200 ease-out-expo hover:border-zari-gold hover:text-zari-gold"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
          <FloralMark className="mt-8 h-10 w-10 text-[rgba(244,239,229,0.4)]" />
        </div>
      </div>

      <div className="border-t border-[rgba(244,239,229,0.15)]">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(244,239,229,0.6)] sm:flex-row">
          <p>
            © {year} {t('footer.rights')} — ਫੁਲਕਾਰੀ ਵਿਰਾਸਤ ਭੰਡਾਰ
          </p>
          <p className="flex gap-5">
            <a href="#" className="transition-colors hover:text-zari-gold">{t('footer.privacy')}</a>
            <a href="#" className="transition-colors hover:text-zari-gold">{t('footer.terms')}</a>
            <a href="#" className="transition-colors hover:text-zari-gold">{t('footer.accessibility')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
