const rand = (seed, i) => {
  const x = Math.sin(seed * 1013 + i * 137.5) * 10000;
  return x - Math.floor(x);
};

export function hashId(str) {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) % 997;
  return h;
}

export default function PhulkariPattern({
  bg = '#8E2F26',
  threads = ['#C9A227'],
  seed = 3,
  className = '',
  label,
}) {
  const cols = 10;
  const rows = 10;
  const cell = 40;
  const cells = [];

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const i = r * cols + c;
      const x = c * cell + (r % 2 === 0 ? cell / 2 : 0) + cell / 2;
      const y = r * cell + cell / 2;
      const color = threads[Math.floor(rand(seed, i) * threads.length)];
      cells.push(
        <g key={i} stroke={color} fill="none" strokeWidth="2" opacity={0.55 + rand(seed, i + 500) * 0.45}>
          <path d={`M${x},${y - 13} L${x + 11},${y} L${x},${y + 13} L${x - 11},${y} Z`} />
          <path d={`M${x},${y - 5} L${x},${y + 5} M${x - 6},${y} L${x + 6},${y}`} />
        </g>
      );
    }
  }

  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect width="400" height="400" fill={bg} />
      {cells}
      <g stroke={threads[0]} strokeWidth="3" fill="none" opacity="0.9">
        <path d="M0,14 H400 M0,22 H400" />
        <path d="M0,378 H400 M0,386 H400" />
      </g>
      <g fill={threads[threads.length - 1]} opacity="0.85">
        {Array.from({ length: 20 }).map((_, k) => (
          <path key={k} d={`M${k * 20 + 10},28 l5,7 l-5,7 l-5,-7 Z`} />
        ))}
        {Array.from({ length: 20 }).map((_, k) => (
          <path key={`b${k}`} d={`M${k * 20 + 10},372 l5,7 l-5,7 l-5,-7 Z`} />
        ))}
      </g>
    </svg>
  );
}
