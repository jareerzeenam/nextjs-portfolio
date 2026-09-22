'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 80);
  });

  return (
    <motion.div className={cn('fixed inset-x-0 top-0 z-[100] w-full px-3 pt-3 sm:px-4', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
              visible,
            })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(12px)' : 'blur(8px)',
        width: visible ? 'min(960px, 100%)' : '100%',
        y: visible ? 8 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 40,
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full border border-white/10 bg-black-100/70 px-4 py-2 lg:flex',
        visible && 'bg-black-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-2 text-neutral-200"
          key={item.link}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-white/10"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: 'blur(12px)',
        width: visible ? '100%' : '100%',
        y: visible ? 4 : 0,
        borderRadius: visible ? 16 : 999,
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 40,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col border border-white/10 bg-black-100/80 px-3 py-2 lg:hidden',
        visible && 'bg-black-100/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between', className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-1 rounded-2xl border border-white/10 bg-black-100 px-4 py-4 shadow-2xl',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full text-white"
    >
      {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
    </button>
  );
};

export const NavbarButton = ({
  href = '#',
  children,
  className,
  variant = 'primary',
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
}) => {
  const baseStyles =
    'relative z-20 inline-block cursor-pointer rounded-full px-4 py-2 text-center text-sm font-semibold transition duration-200 hover:-translate-y-0.5';

  const variantStyles = {
    primary: 'bg-white text-black',
    secondary: 'bg-transparent text-white shadow-none',
    dark: 'bg-black text-white',
    gradient:
      'bg-gradient-to-b from-violet-400 to-violet-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  };

  return (
    <a href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </a>
  );
};
