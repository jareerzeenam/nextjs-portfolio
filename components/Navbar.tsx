'use client';

import { navItems } from '@/data';
import { useState } from 'react';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
} from './ui/resizable-navbar';

const Logo = () => {
  return (
    <a href="#top" className="relative z-20 flex items-center gap-2 px-1 py-1">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
        JZ
      </span>
      <span className="text-sm font-semibold text-white">Jareer Zeenam</span>
    </a>
  );
};

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <Logo />
        <NavItems items={navItems} />
        <NavbarButton href="/resume" variant="primary" className="relative z-20">
          Resume
        </NavbarButton>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg px-2 py-3 text-base text-white"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="/resume" variant="primary" className="mt-2 w-full">
            Resume
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default SiteNavbar;
