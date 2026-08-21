import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { DiamondDivider, MetadataList } from '../ui/primitives';
import { textiles } from '../../data/textiles';

export default function MotifModal({ motif, onClose }) {
  const { t } = useTranslation();
  if (!motif) return null;
  const foundIn = textiles.filter((x) => motif.foundIn.includes(x.id));

  return (
    <Modal open onClose={onClose} labelledBy="motif-modal-title" wide>
      <div className="relative">
        <PhulkariPattern
          bg={motif.colors[0]}
          threads={motif.colors.slice(1)}
          seed={hashId(motif.id)}
          className="h-56 w-full md:h-72"
          label={`${motif.name} motif pattern`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(30,28,25,0.35)]">
          <div className="bg-paper-95 px-8 py-6 text-center">
            <p className="font-gurmukhi-serif text-3xl text-maroon md:text-4xl">{motif.namePa}</p>
            <h2
              id="motif-modal-title"
              className="mt-1 font-serif text-4xl font-semibold uppercase tracking-wide md:text-5xl"
            >
              {motif.name}
            </h2>
            <p className="mt-1 font-serif text-lg italic text-ink-soft md:text-xl">{motif.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <p className="max-w-3xl leading-relaxed text-ink-soft">{motif.description}</p>
        <DiamondDivider className="mt-6" />

        <div className="mt-8">
          <MetadataList
            items={[
              [t('common.category'), motif.category],
              [t('common.region'), motif.region],
              [t('common.technique'), motif.technique],
              [t('common.threads'), motif.thread],
              [t('common.ground'), motif.background],
            ]}
          />
        </div>

        <div className="mt-10">
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
            {t('common.aboutThisMotif')}
          </h3>
          <div className="mt-3 border-l-2 border-maroon pl-5">
            <p className="font-serif text-lg italic leading-relaxed">{motif.symbolism}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
            {t('common.variations')}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {motif.variations.map((v, i) => (
              <div key={v.name} className="text-center">
                <PhulkariPattern
                  bg={motif.colors[0]}
                  threads={motif.colors.slice(1)}
                  seed={hashId(motif.id) + i * 17}
                  className="mx-auto h-24 w-24 rounded-full"
                />
                <p className="mt-3 font-serif font-semibold">{v.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{v.note}</p>
              </div>
            ))}
          </div>
        </div>

        {foundIn.length > 0 && (
          <div className="mt-10">
            <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-maroon">
              {t('common.foundIn')}
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {foundIn.map((x) => (
                <Link
                  key={x.id}
                  to={`/collection?textile=${x.id}`}
                  onClick={onClose}
                  className="group overflow-hidden rounded-xs border border-hairline transition-shadow duration-300 ease-out-expo hover:shadow-md"
                >
                  <PhulkariPattern
                    bg={x.colors[0]}
                    threads={x.colors.slice(1)}
                    seed={hashId(x.id)}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="p-3">
                    <p className="font-serif text-sm font-semibold leading-snug">{x.title}</p>
                    <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {x.region} · {x.period}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
