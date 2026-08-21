import Hero from '../components/home/Hero';
import ColorLanguage from '../components/home/ColorLanguage';
import TraditionBands from '../components/home/TraditionBands';
import ArchivePreview from '../components/home/ArchivePreview';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <ColorLanguage />
      <TraditionBands />
      <ArchivePreview />
      <Newsletter />
    </>
  );
}
