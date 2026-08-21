const ARCH = 'M30,390 L30,150 C30,80 80,40 160,40 C240,40 290,80 290,150 L290,390 Z';
const ARCH_OUTER = 'M14,390 L14,142 C14,60 76,18 160,18 C244,18 306,60 306,142 L306,390 Z';

function Person({ x, y, s = 1, body, skin = '#C9A26B' }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <circle cx="0" cy="-26" r="7" fill={skin} />
      <path d="M-11,-18 Q0,-25 11,-18 L8,6 L-8,6 Z" fill={body} />
    </g>
  );
}

function scenes(variant) {
  switch (variant) {
    case 'viah':
      return (
        <g>
          <rect x="30" y="40" width="260" height="260" fill="#EFE0C8" />
          <circle cx="160" cy="92" r="20" fill="#C9A227" opacity="0.8" />
          <path d="M120,80 q8,-7 16,0 M180,72 q8,-7 16,0" stroke="#1E1C19" strokeWidth="1.5" fill="none" />
          <rect x="30" y="300" width="260" height="90" fill="#8A9464" />
          <rect x="30" y="300" width="260" height="10" fill="#6E7A4E" />
          <g>
            <Person x="70" y="330" body="#7D2922" />
            <Person x="105" y="334" body="#C9A227" />
            <Person x="215" y="334" body="#C9A227" />
            <Person x="250" y="330" body="#7D2922" />
          </g>
          <g>
            <rect x="138" y="300" width="44" height="38" fill="#8E2F26" />
            <path d="M138,300 q22,-26 44,0 Z" fill="#8E2F26" />
            <rect x="148" y="316" width="24" height="22" fill="#C9A227" />
          </g>
        </g>
      );
    case 'suhaag':
      return (
        <g>
          <rect x="30" y="40" width="260" height="260" fill="#F0E4CE" />
          <rect x="30" y="310" width="260" height="80" fill="#B98F5E" opacity="0.5" />
          <g>
            <Person x="75" y="330" s="0.9" body="#596B42" />
            <Person x="245" y="330" s="0.9" body="#596B42" />
            <Person x="160" y="326" s="1.25" body="#D9A0A4" />
            <path d="M132,300 Q160,248 188,300" fill="#D9A0A4" opacity="0.85" />
            <circle cx="160" cy="292" r="9" fill="#C9A26B" />
          </g>
          <g fill="#C9A227">
            <circle cx="70" cy="120" r="5" /><circle cx="250" cy="105" r="5" />
            <circle cx="215" cy="160" r="5" /><circle cx="100" cy="185" r="5" />
          </g>
        </g>
      );
    case 'trinjan':
      return (
        <g>
          <rect x="30" y="40" width="260" height="260" fill="#EFE6D2" />
          <circle cx="160" cy="86" r="16" fill="#C9A227" opacity="0.85" />
          <rect x="30" y="305" width="260" height="85" fill="#7A8B5A" />
          <g>
            <Person x="95" y="322" body="#294F68" />
            <Person x="160" y="312" body="#7D2922" />
            <Person x="225" y="322" body="#294F68" />
          </g>
          <g stroke="#1E1C19" strokeWidth="2" fill="none">
            <circle cx="160" cy="350" r="17" />
            <path d="M160,333 V367 M143,350 H177 M148,338 L172,362 M172,338 L148,362" />
          </g>
          <g fill="#596B42">
            <circle cx="55" cy="240" r="12" /><rect x="53" y="250" width="4" height="16" fill="#1E1C19" />
            <circle cx="265" cy="240" r="12" /><rect x="263" y="250" width="4" height="16" fill="#1E1C19" />
          </g>
        </g>
      );
    case 'bhaiya':
      return (
        <g>
          <rect x="30" y="40" width="260" height="260" fill="#F1E8D6" />
          <circle cx="252" cy="84" r="13" fill="#C9A227" />
          <path d="M240,80 a9,9 0 1,0 9,-12" fill="none" stroke="#C9A227" strokeWidth="3" />
          <path d="M60,250 q10,-10 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="#294F68" strokeWidth="2" opacity="0.6" transform="translate(-30,60)" />
          <path d="M60,250 q10,-10 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="#294F68" strokeWidth="2" opacity="0.6" transform="translate(-30,78)" />
          <path d="M60,250 q10,-10 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="#294F68" strokeWidth="2" opacity="0.6" transform="translate(-30,96)" />
          <rect x="30" y="346" width="260" height="44" fill="#8A9464" />
          <g>
            <rect x="210" y="300" width="44" height="46" fill="#EDE3D2" stroke="#7D2922" strokeWidth="2" />
            <path d="M204,300 L232,272 L260,300 Z" fill="#7D2922" />
            <line x1="232" y1="272" x2="232" y2="258" stroke="#7D2922" strokeWidth="2" />
            <path d="M232,258 l14,4 l-14,4 Z" fill="#C9A227" />
          </g>
          <g>
            <rect x="66" y="292" width="8" height="54" fill="#6E4A2A" />
            <circle cx="70" cy="272" r="22" fill="#596B42" />
            <circle cx="52" cy="284" r="14" fill="#596B42" />
            <circle cx="88" cy="284" r="14" fill="#596B42" />
          </g>
        </g>
      );
    default:
      return null;
  }
}

export default function MiniatureArt({ variant = 'viah', className = '' }) {
  return (
    <svg viewBox="0 0 320 400" className={className} role="img" aria-label={`${variant} miniature scene`}>
      <path d={ARCH_OUTER} fill="#F4EFE5" stroke="#1E1C19" strokeWidth="1.5" />
      <clipPath id={`arch-${variant}`}>
        <path d={ARCH} />
      </clipPath>
      <g clipPath={`url(#arch-${variant})`}>{scenes(variant)}</g>
      <path d={ARCH} fill="none" stroke="#7D2922" strokeWidth="2.5" />
      <path d={ARCH_OUTER} fill="none" stroke="#7D2922" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
