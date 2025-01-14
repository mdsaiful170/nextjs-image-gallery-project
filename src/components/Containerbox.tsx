import { cn } from '@utils/utilits';
import React, { FC, ReactNode } from 'react';

const Containerbox: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <>
      <div className={cn(' max-w-screen-xl p-16 md:p-20  w-full', className)}>
        {children}
      </div>
    </>
  );
};

export default Containerbox;
