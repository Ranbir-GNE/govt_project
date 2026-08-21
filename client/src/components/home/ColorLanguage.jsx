import { useTranslation } from 'react-i18next';
import { colorLanguage } from '../../data/colors';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { SectionHeader, Reveal } from '../ui/primitives';

function ColorCard({ color, index }) {
  const patternThreads = color.shades.filter((s) => s !== color.hex);
  return (
    <Reveal delay={index * 0.05}>
      <article className="group h-full overflow-hidden rounded-xs border border-hairline bg-paper transition-shadow duration-300 ease-out-expo hover:shadow-lg">
        <PhulkariPattern
          bg={color.hex}
          threads={patternThreads.length ? patternThreads : ['#F4EFE5']}
          seed={hashId(color.id)}
          className="aspect-[4/3] w-full"
          label={`${color.name} — ${color.meaning} pattern`}
        />
        <div className="p-5" style={{ backgroundColor: `${color.hex}14` }}>
          <h3 className="font-serif text-xl font-semibold uppercase tracking-wide">{color.name}</h3>
          <p className="font-gurmukhi text-sm text-ink-soft">{color.namePa}</p>
          <p className="mt-1 text-sm italic text-ink-soft">{color.meaning}</p>
          <div className="mt-4 flex gap-2" aria-hidden="true">
            {color.shades.map((s) => (
              <span key={s} className="h-5 w-5 rounded-xs border border-hairline transition-transform duration-200 ease-out-expo hover:scale-125" style={{ backgroundColor: s }} />
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ColorLanguage() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28" aria-labelledby="colors-title">
      <div className="container-site">
        <SectionHeader
          eyebrow={t('home.colorEyebrow')}
          title={t('home.colorTitle')}
          intro={t('home.colorIntro')}
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {colorLanguage.map((c, i) => (
            <ColorCard key={c.id} color={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
