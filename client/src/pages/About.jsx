import { artisans } from '../data/artisans';
import { motifs } from '../data/motifs';
import { regions } from '../data/regions';
import { stories } from '../data/stories';
import { textiles } from '../data/textiles';
import { traditions } from '../data/traditions';
import PhulkariPattern from '../components/art/PhulkariPattern';
import { Eyebrow, DiamondDivider, Reveal } from '../components/ui/primitives';

const ACKNOWLEDGMENTS = [
  'State Museum of Punjab',
  'Punjabi Cultural Institute',
  'Heritage artisans and communities',
  'Research partners and contributors',
];

export default function About() {
  const stats = [
    [textiles.length, 'Textile records'],
    [motifs.length, 'Documented motifs'],
    [artisans.length, 'Master artisans'],
    [regions.length, 'Regions surveyed'],
  ];

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>The Institution</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            About the Archive
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਸਾਡੇ ਬਾਰੇ</p>
          <DiamondDivider className="mt-4" />
        </header>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-5 leading-relaxed text-ink-soft">
              <p className="font-serif text-2xl leading-snug text-ink">
                A museum-style archive of Punjabi Phulkari — documenting the cloth, the motif, the
                maker and the custom in one place, in both scripts.
              </p>
              <p>
                The Phulkari Heritage Archive is a cultural initiative to preserve and present the
                embroidered heritage of Punjab. Every object is recorded with its provenance,
                technique and regional dialect; every motif with its name, meaning and variations.
              </p>
              <p>
                We work with living masters to document the craft before its libraries of knowledge
                retire with them, and we publish in English and Gurmukhi because a heritage that
                survives in only one language has only half survived.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PhulkariPattern
              bg="#8E2F26"
              threads={['#C9A227', '#D9A0A4', '#F4EFE5']}
              seed={77}
              className="aspect-[4/5] w-full drop-shadow-xl"
              label="Heritage phulkari pattern"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 overflow-hidden rounded-xs border border-hairline md:grid-cols-4">
          {stats.map(([n, label]) => (
            <div key={label} className="border border-hairline p-8 text-center transition-colors duration-300 ease-out-expo hover:bg-cream">
              <p className="font-serif text-4xl font-semibold text-maroon">{n}</p>
              <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold uppercase tracking-wide text-maroon">
            Acknowledgments
          </h2>
          <DiamondDivider className="mt-3" />
          <ul className="mt-6 space-y-3">
            {ACKNOWLEDGMENTS.map((a) => (
              <li key={a} className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="h-2 w-2 rotate-45 bg-maroon" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            {traditions.length} documented customs · {stories.length} editorial stories · an open
            invitation to researchers, translators and conservators.
          </p>
          <p className="mt-6">
            <a
              href="mailto:info@phulkari.in"
              className="link-arrow"
            >
              info@phulkari.in
              <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
