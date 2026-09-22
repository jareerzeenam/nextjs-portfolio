'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useEffect } from 'react';

const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"system";var d=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(d);if(d==="light"||d==="dark")r.style.colorScheme=d;}catch(e){}})();`;

function applyTheme(theme: string) {
  const resolved =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  if (resolved === 'light' || resolved === 'dark') {
    root.style.colorScheme = resolved;
  }
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  ));

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      applyTheme(localStorage.getItem('theme') || 'system');
    };

    sync();
    media.addEventListener('change', sync);
    window.addEventListener('storage', sync);
    return () => {
      media.removeEventListener('change', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return children;
}
