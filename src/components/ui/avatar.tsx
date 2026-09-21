'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-stone-200/80',
          className
        )}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, alt = '', ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
      return null;
    }

    return (
      <img
        ref={ref}
        alt={alt}
        onError={() => setHasError(true)}
        className={cn('aspect-square h-full w-full object-cover', className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = 'AvatarImage';

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex h-full w-full items-center justify-center rounded-full bg-[#019934]/10 font-bold text-[#019934] text-sm',
          className
        )}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
