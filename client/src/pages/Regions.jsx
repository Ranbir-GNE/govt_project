import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { regions } from '../data/regions';
import { textiles } from '../data/textiles';
import PhulkariPattern, { hashId } from '../components/art/PhulkariPattern';
import { Eyebrow, DiamondDivider, Reveal } from '../components/ui/primitives';

export default function Regions() {
  const { t } = useTranslation();

  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>The Geography</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            Regions
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਖੇਤਰ</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Phulkari spoke in dialects. Between Majha, Doaba and Malwa — and along the riverine
            southwest — each belt kept its own ground, palette and signature motifs.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((r, i) => {
            const objects = textiles.filter((x) => x.region === r.name);
            return (
              <Reveal key={r.id} delay={i * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-xs border border-hairline bg-paper transition-shadow duration-300 ease-out-expo hover:shadow-lg">
                  <PhulkariPattern
                    bg={objects[0]?.colors[0] || '#8E2F26'}
                    threads={(objects[0]?.colors || ['#C9A227']).slice(1)}
                    seed={hashId(r.id)}
                    className="aspect-[16/9] w-full"
                    label={`${r.name} regional pattern`}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between">
                      <h2 className="font-serif text-2xl font-semibold">{r.name}</h2>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                        {r.belt}
                      </p>
                    </div>
                    <p className="mt-1 font-gurmukhi text-sm text-ink-soft">{r.namePa}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{r.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {r.specialties.map((s) => (
                        <span
                          key={s}
                          className="border border-hairline px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {objects.length > 0 && (
                      <Link
                        to={`/collection?region=${r.name}`}
                        className="link-arrow mt-6 self-start"
                      >
                        {objects.length} {t('common.objects')}
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
