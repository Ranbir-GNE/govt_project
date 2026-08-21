import { artisans } from '../data/artisans';
import PhulkariPattern, { hashId } from '../components/art/PhulkariPattern';
import { Eyebrow, DiamondDivider, Reveal } from '../components/ui/primitives';

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
}

export default function Artisans() {
  return (
    <div className="py-14 md:py-20">
      <div className="container-site">
        <header className="max-w-2xl">
          <Eyebrow>The Hands</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl">
            Artisans
          </h1>
          <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਕਾਰੀਗਰ</p>
          <DiamondDivider className="mt-4" />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Phulkari has no famous names — its makers signed nothing. The archive records the
            masters keeping the stitch alive today, and honors the generations unnamed before them.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artisans.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xs border border-hairline bg-paper p-8 text-center transition-shadow duration-300 ease-out-expo hover:shadow-lg">
                <div className="relative mx-auto h-28 w-28">
                  <PhulkariPattern
                    bg="#8E2F26"
                    threads={['#C9A227', '#D9A0A4']}
                    seed={hashId(a.id)}
                    className="h-28 w-28 rounded-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-semibold text-paper">
                    {initials(a.name)}
                  </span>
                </div>
                <h2 className="mt-6 font-serif text-xl font-semibold">{a.name}</h2>
                <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {a.village}, {a.district}
                </p>
                <p className="mt-4 border-t border-hairline pt-4 text-sm font-medium text-maroon">
                  {a.specialty}
                </p>
                <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {a.years} years at the frame
                </p>
                <blockquote className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-ink-soft">
                  “{a.quote}”
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
