import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const styles = {
  solid:
    'bg-maroon text-paper hover:bg-terracotta border border-maroon hover:border-terracotta',
  outline: 'border border-maroon text-maroon hover:bg-maroon hover:text-paper',
};

export default function Button({ to, onClick, type = 'button', variant = 'solid', children, className = '' }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xs px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ease-out-expo ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
