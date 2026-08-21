import { Link } from 'react-router-dom';
import { DiamondDivider } from '../components/ui/primitives';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="text-center">
        <p className="font-serif text-7xl font-semibold text-maroon">404</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold uppercase tracking-wide">
          This thread leads nowhere
        </h1>
        <p className="mt-2 font-gurmukhi text-lg text-ink-soft">ਇਹ ਧਾਗਾ ਕਿਧਰੇ ਨਹੀਂ ਜਾਂਦਾ</p>
        <DiamondDivider className="mt-5 justify-center" />
        <Link to="/" className="link-arrow mt-8">
          Return home
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
