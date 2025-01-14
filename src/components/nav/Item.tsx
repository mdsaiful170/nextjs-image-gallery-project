import { cn } from '@utils/utilits';
import Link from 'next/link';
import React, { FC } from 'react';

type TProps = {
  label: string;
  url: string;
  className?: string;
};

export const ItemLinkbox: FC<TProps> = (props) => {
  const { label, url, className } = props || {};
  return (
    <Link
      href={url}
      className={cn(
        "group tracking-wider px-8 py-2 border-b border-white/10 font-bold text-gray-300 text-base capitalize relative z-20 after:content-[''] after:w-full after:bg-white/10 after:scale-y-0 after:hover:scale-y-100 after:origin-bottom after:absolute after:left-0 after:bottom-0 transition-all duration-200 hover:text-white after:duration-200 after:transition-all after:h-full after:-z-20",
        className
      )}
    >
      {label}
    </Link>
  );
};
