import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { traditions } from '../data/traditions';
import { textiles } from '../data/textiles';
import MiniatureArt from '../components/art/MiniatureArt';
import { Eyebrow, DiamondDivider, Reveal } from '../components/ui/primitives';

export default function ReetiRivaz() {
  const { t } = useTranslation();

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>Traditions &amp; Customs</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            Reeti-Rivaz
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਰੀਤੀ-ਰਿਵਾਜ</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Phulkari was never only cloth. It was the customs themselves — the wedding canopy, the
            bride&apos;s blessing, the women&apos;s parliament, the brother&apos;s bond.
          </p>
        </header>

        <div className="relative mt-16">
          <div
            className="absolute bottom-0 left-[7px] top-0 hidden border-l-2 border-dotted border-maroon-40 md:block"
            aria-hidden="true"
          />
          {traditions.map((tradition) => (
            <Reveal key={tradition.id}>
              <section
                id={tradition.id}
                className="relative scroll-mt-28 border-b border-hairline py-14 md:pl-16"
                aria-labelledby={`rr-${tradition.id}`}
              >
                <span
                  className="absolute left-0 top-14 hidden h-4 w-4 rotate-45 bg-maroon md:block"
                  aria-hidden="true"
                />
                <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-serif text-5xl font-semibold text-maroon">{tradition.num}</p>
                    <h2
                      id={`rr-${tradition.id}`}
                      className="mt-3 font-serif text-3xl font-semibold uppercase tracking-wide"
                    >
                      {tradition.name}
                      <span className="mx-3 text-ink-soft/50">|</span>
                      <span className="text-xl">{tradition.meaning}</span>
                    </h2>
                    <p className="mt-2 font-gurmukhi-serif text-lg text-maroon">{tradition.namePa}</p>
                    <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-ink-soft">
                      {tradition.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {tradition.related.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                          {t('common.motifsOnTextile')}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {tradition.related.map((id) => (
                            <RelatedChip key={id} id={id} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mx-auto w-full max-w-xs lg:w-64">
                    <MiniatureArt variant={tradition.variant} className="w-full drop-shadow-lg" />
                  </div>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedChip({ id }) {
  const x = textiles.find((tx) => tx.id === id);
  if (!x) return null;
  return (
    <Link
      to={`/collection?textile=${x.id}`}
      className="rounded-xs border border-maroon-50 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-maroon transition-colors duration-200 ease-out-expo hover:bg-maroon hover:text-paper"
    >
      {x.title}
    </Link>
  );
}
