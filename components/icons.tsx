// One authored icon set: 1.5px strokes on a 16px grid.
type P = { className?: string };

export function ArrowIcon({ className }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}

export function ExternalIcon({ className }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 3h8v8M13 3 3 13" strokeLinecap="square" />
    </svg>
  );
}

export function FlagIcon({ className }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M4 15V2M4 3h8l-2 3 2 3H4" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className, open }: P & { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      {open ? <path d="M4 4l12 12M16 4 4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
    </svg>
  );
}

export function CopyIcon({ className }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 5h8v8H5zM3 11V3h8" />
    </svg>
  );
}

export function CheckIcon({ className }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="m3 8.5 3 3 7-7" />
    </svg>
  );
}
