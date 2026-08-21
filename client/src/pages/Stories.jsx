import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { stories } from '../data/stories';
import StoryModal from '../components/modals/StoryModal';
import PhulkariPattern, { hashId } from '../components/art/PhulkariPattern';
import { Eyebrow, DiamondDivider, Reveal } from '../components/ui/primitives';

export default function Stories() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();

  const sorted = useMemo(
    () => [...stories].sort((a, b) => a.title.localeCompare(b.title)),
    []
  );

  const openId = params.get('story');
  const openStory = stories.find((s) => s.id === openId);

  const closeModal = () => {
    const next = new URLSearchParams(params);
    next.delete('story');
    setParams(next, { replace: true });
  };

  return (
    <div className="pb-14 md:pb-20">
      <section className="relative overflow-hidden" aria-labelledby="stories-title">
        <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>Stories &amp; Customs</Eyebrow>
            <h1
              id="stories-title"
              className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-maroon md:text-5xl"
            >
              Stories of Phulkari
            </h1>
            <p className="mt-2 font-gurmukhi-serif text-xl text-ink-soft">ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਹਾਣੀਆਂ</p>
            <DiamondDivider className="mt-4" />
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Every story is a stitch in time. Histories, memories and field notes from the craft —
              told in both scripts, as the archive intends.
            </p>
          </div>
          <div className="hidden lg:block">
            <PhulkariPattern
              bg="#294F68"
              threads={['#C9A227', '#F4EFE5', '#D9A0A4']}
              seed={42}
              className="aspect-[4/3] w-full drop-shadow-xl"
              label="Indigo phulkari pattern"
            />
          </div>
        </div>
      </section>

      <div className="container-site">
        <div className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-0 hidden border-l-2 border-dotted border-maroon-40 md:block"
            aria-hidden="true"
          />
          {sorted.map((story, i) => (
            <Reveal key={story.id}>
              <article className="relative border-b border-hairline py-12 md:pl-16">
                <span
                  className="absolute left-0 top-12 hidden h-4 w-4 rotate-45 bg-maroon md:block"
                  aria-hidden="true"
                />
                <div
                  className={`grid items-center gap-8 lg:grid-cols-[auto_1fr] ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setParams({ story: story.id })}
                    className="group block w-full max-w-sm lg:w-64"
                    aria-label={`${t('common.readStory')}: ${story.title}`}
                  >
                    <PhulkariPattern
                      bg={story.colors[0]}
                      threads={story.colors.slice(1)}
                      seed={hashId(story.id)}
                      className="aspect-[4/3] w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                      label={`${story.title} illustration`}
                    />
                  </button>
                  <div>
                    <p className="font-serif text-4xl font-semibold text-maroon">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">
                      {story.title}
                    </h2>
                    <p className="mt-1 font-gurmukhi-serif text-lg text-maroon">{story.titlePa}</p>
                    <p className="mt-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                      {story.category} · {story.readTime} {t('common.minRead')}
                    </p>
                    <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">{story.excerpt}</p>
                    <button
                      type="button"
                      onClick={() => setParams({ story: story.id })}
                      className="link-arrow mt-5"
                    >
                      {t('common.readStory')}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {openStory && <StoryModal story={openStory} onClose={closeModal} />}
    </div>
  );
}
