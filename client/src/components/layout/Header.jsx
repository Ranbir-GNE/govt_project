import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, Menu, X, Globe, ChevronDown } from 'lucide-react';
import FloralMark from '../art/FloralMark';
import SearchOverlay from './SearchOverlay';

const NAV = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/collection', key: 'nav.collection' },
  { to: '/motifs', key: 'nav.motifs' },
  { to: '/activities', key: 'nav.activities' },
  { to: '/reeti-rivaz', key: 'nav.reeti' },
  { to: '/artisans', key: 'nav.artisans' },
  { to: '/regions', key: 'nav.regions' },
  { to: '/stories', key: 'nav.stories' },
  { to: '/about', key: 'nav.about' },
];

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const lang = i18n.language === 'pa' ? 'pa' : 'en';

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const setLang = (l) => {
    i18n.changeLanguage(l);
    window.localStorage.setItem('phulkari-lang', l);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-maroon"
      >
        <Globe size={15} aria-hidden="true" />
        {lang === 'pa' ? 'ਪੰਜਾਬੀ' : 'EN'}
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-32 rounded-sm border border-hairline bg-paper py-1 shadow-lg"
        >
          <li>
            <button
              type="button"
              role="option"
              aria-selected={lang === 'en'}
              onClick={() => setLang('en')}
              className={`block w-full px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.14em] hover:bg-cream ${
                lang === 'en' ? 'text-maroon' : 'text-ink-soft'
              }`}
            >
              English
            </button>
          </li>
          <li>
            <button
              type="button"
              role="option"
              aria-selected={lang === 'pa'}
              onClick={() => setLang('pa')}
              className={`block w-full px-4 py-2 text-left text-xs font-semibold tracking-[0.14em] hover:bg-cream ${
                lang === 'pa' ? 'text-maroon' : 'text-ink-soft'
              }`}
            >
              ਪੰਜਾਬੀ
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-maroon focus:px-4 focus:py-2 focus:text-paper"
      >
        {t('common.skipToContent')}
      </a>
      <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
        <div className="container-site flex items-center justify-between gap-4 py-3.5">
          <Link to="/" className="flex items-center gap-3" aria-label="Phulkari Heritage Archive — home">
            <FloralMark className="h-9 w-9 shrink-0 text-maroon" />
            <span className="leading-none">
              <span className="block font-serif text-xl font-semibold tracking-[0.18em]">PHULKARI</span>
              <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-ink-soft">
                Heritage of Punjab
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    isActive ? 'text-maroon' : 'text-ink-soft hover:text-maroon'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={t('common.search')}
              className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-maroon"
            >
              <Search size={16} aria-hidden="true" />
              <span className="hidden md:inline">{t('common.search')}</span>
            </button>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-hairline text-ink transition-colors duration-200 ease-out-expo hover:bg-ink hover:text-paper xl:hidden"
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="border-t border-hairline bg-paper xl:hidden">
            <ul className="container-site flex flex-col py-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-hairline py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] ${
                        isActive ? 'text-maroon' : 'text-ink-soft'
                      }`
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
              <li className="py-4 md:hidden">
                <LanguageToggle />
              </li>
            </ul>
          </nav>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
