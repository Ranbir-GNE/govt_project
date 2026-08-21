import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import PhulkariPattern, { hashId } from '../art/PhulkariPattern';
import { Eyebrow, DiamondDivider, MetadataList } from '../ui/primitives';
import { motifs } from '../../data/motifs';

export default function TextileModal({ textile, onClose }) {
  const { t } = useTranslation();
  if (!textile) return null;
  const relatedMotifs = motifs.filter((m) => textile.motifs.includes(m.id));

  return (
    <Modal open onClose={onClose} labelledBy="textile-modal-title" wide>
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <PhulkariPattern
            bg={textile.colors[0]}
            threads={textile.colors.slice(1)}
            seed={hashId(textile.id)}
            className="h-64 w-full md:h-full md:min-h-[32rem]"
            label={`${textile.title} embroidery pattern`}
          />
          <p className="absolute bottom-3 left-3 rounded-xs bg-paper-90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            {textile.accession}
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <Eyebrow>Object Record</Eyebrow>
          <h2 id="textile-modal-title" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
            {textile.title}
          </h2>
          <p className="mt-1 font-gurmukhi-serif text-xl text-maroon">{textile.titlePa}</p>
          <DiamondDivider className="mt-4" />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
            {textile.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <MetadataList
              items={[
                [t('common.accesion'), textile.accession],
                [t('common.region'), textile.region],
                [t('common.period'), textile.period],
                [t('common.type'), textile.type],
                [t('common.technique'), textile.technique],
                [t('common.ground'), textile.ground],
                [t('common.threads'), textile.threads],
                [t('common.dimensions'), textile.dimensions],
              ]}
            />
          </div>

          <div className="mt-8 border border-hairline bg-cream p-5">
            <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
              {t('common.provenance')}
            </h3>
            <p className="mt-2 text-sm italic leading-relaxed">{textile.provenance}</p>
          </div>

          {relatedMotifs.length > 0 && (
            <div className="mt-8">
              <h3 className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                {t('common.motifsOnTextile')}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedMotifs.map((m) => (
                  <Link
                    key={m.id}
                    to={`/motifs?motif=${m.id}`}
                    onClick={onClose}
                    className="rounded-xs border border-maroon-50 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-maroon transition-colors duration-200 ease-out-expo hover:bg-maroon hover:text-paper"
                  >
                    {m.name} — {m.subtitle}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
