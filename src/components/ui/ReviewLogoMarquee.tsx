'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ReviewPlatform {
  name: string;
  rating: string;
  stars: number;
  starColor: string;
  tag: string;
  icon: React.ReactNode;
}

export const reviewPlatforms: ReviewPlatform[] = [
  {
    name: 'Google Reviews',
    rating: '5.0',
    stars: 5,
    starColor: '#FBBC04',
    tag: '120+ Homeowner Reviews',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
    ),
  },
  {
    name: 'Yelp',
    rating: '5.0',
    stars: 5,
    starColor: '#FF1A1A',
    tag: 'Top Rated Hardscaping Pro',
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158z" />
      </svg>
    ),
  },
  {
    name: 'BuildZoom',
    rating: 'Top 1%',
    stars: 5,
    starColor: '#00C2D1',
    tag: 'Score: 108 • CSLB Licensed',
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#00C2D1]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 11V21H9V14H15V21H22V11L12 3Z" />
      </svg>
    ),
  },
  {
    name: 'Houzz',
    rating: 'Best of Houzz',
    stars: 5,
    starColor: '#4DBC15',
    tag: 'Design & Customer Service',
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#4DBC15]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z" />
      </svg>
    ),
  },
];

interface ReviewLogoMarqueeProps {
  className?: string;
  speed?: 'normal' | 'slow';
}

export default function ReviewLogoMarquee({ className }: ReviewLogoMarqueeProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="mx-auto w-full">
        <div
          className="group relative flex gap-8 overflow-hidden p-1"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          {Array(4)
            .fill(null)
            .map((_, groupIdx) => (
              <div
                key={groupIdx}
                className="flex shrink-0 animate-x-slider flex-row items-center gap-8"
              >
                {reviewPlatforms.map((item, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-3 px-3 py-1.5 transition-opacity shrink-0 cursor-default opacity-95 hover:opacity-100"
                  >
                    <div className="flex items-center justify-center shrink-0">{item.icon}</div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs sm:text-sm tracking-wide drop-shadow">
                          {item.name}
                        </span>
                        <div className="flex items-center">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 drop-shadow-xs"
                              style={{ fill: item.starColor, color: item.starColor }}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-stone-300 text-[10px] sm:text-[11px] font-medium drop-shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
