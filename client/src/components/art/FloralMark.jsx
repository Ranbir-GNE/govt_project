export default function FloralMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="24" cy="13" rx="4.6" ry="9" />
        <ellipse cx="24" cy="35" rx="4.6" ry="9" />
        <ellipse cx="13" cy="24" rx="9" ry="4.6" />
        <ellipse cx="35" cy="24" rx="9" ry="4.6" />
        <ellipse cx="16.2" cy="16.2" rx="8" ry="3.8" transform="rotate(-45 16.2 16.2)" />
        <ellipse cx="31.8" cy="16.2" rx="8" ry="3.8" transform="rotate(45 31.8 16.2)" />
        <ellipse cx="16.2" cy="31.8" rx="8" ry="3.8" transform="rotate(45 16.2 31.8)" />
        <ellipse cx="31.8" cy="31.8" rx="8" ry="3.8" transform="rotate(-45 31.8 31.8)" />
      </g>
      <circle cx="24" cy="24" r="5.5" fill="#C9A227" />
    </svg>
  );
}
