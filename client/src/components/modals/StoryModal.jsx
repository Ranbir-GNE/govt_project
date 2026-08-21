import Modal from '../ui/Modal';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { Eyebrow, DiamondDivider } from '../ui/primitives';

function Timeline({ timeline }) {
  if (!timeline) return null;
  return (
    <div className="mt-10">
      <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
        Through the ages
      </h3>
      <div className="no-scrollbar mt-6 overflow-x-auto">
        <ol className="relative flex min-w-max gap-10 border-t-2 border-dotted border-maroon-50 pt-6">
          {timeline.map((item) => (
            <li key={item.era} className="relative w-44 shrink-0">
              <span
                className="absolute -top-[25px] left-0 h-3 w-3 rounded-full bg-maroon"
                aria-hidden="true"
              />
              <p className="font-serif text-lg font-semibold text-maroon">{item.era}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function StoryModal({ story, onClose }) {
  if (!story) return null;
  return (
    <Modal open onClose={onClose} labelledBy="story-modal-title" wide>
      <div className="relative">
        <PhulkariPattern
          bg={story.colors[0]}
          threads={story.colors.slice(1)}
          seed={hashId(story.id)}
          className="h-52 w-full md:h-64"
          label={`${story.title} cover pattern`}
        />
      </div>

      <div className="p-6 sm:p-10">
        <Eyebrow>
          {story.category} · {story.readTime} min read
        </Eyebrow>
        <h2 id="story-modal-title" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
          {story.title}
        </h2>
        <p className="mt-1 font-gurmukhi-serif text-xl text-maroon">{story.titlePa}</p>
        <DiamondDivider className="mt-4" />

        <div className="mt-8 max-w-2xl space-y-10">
          {story.sections.map((section, i) => (
            <section key={section.heading}>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl font-semibold text-maroon">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl font-semibold">{section.heading}</h3>
              </div>
              <div className="mt-3 space-y-4 border-l border-dotted border-maroon-40 pl-8 text-sm leading-relaxed text-ink-soft">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {story.quote && (
          <blockquote className="mt-10 border-l-2 border-maroon pl-5 font-serif text-xl italic leading-relaxed text-maroon">
            “{story.quote}”
          </blockquote>
        )}

        <Timeline timeline={story.timeline} />
      </div>
    </Modal>
  );
}
