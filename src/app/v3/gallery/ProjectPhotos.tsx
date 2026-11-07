'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CSSProperties, SyntheticEvent } from 'react';
import { useRef, useState } from 'react';
import type { RetouchedProjectPhoto } from './retouchedPhotos';

const croppedPhotoClass = 'object-cover data-[portrait=true]:[filter:url(#project-photo-cleanup)]';

function markPortrait({ currentTarget }: SyntheticEvent<HTMLImageElement>) {
  currentTarget.dataset.portrait = String(currentTarget.naturalHeight > currentTarget.naturalWidth);
}

export default function ProjectPhotos({ photos, title, naturalPhotos }: {
  photos: string[];
  title: string;
  naturalPhotos?: RetouchedProjectPhoto[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [cover, ...gallery] = photos;

  function openPhoto(index: number) {
    setActive(index);
    dialog.current?.showModal();
  }

  function movePhoto(direction: number) {
    setActive((index) => (index + direction + photos.length) % photos.length);
  }

  return (
    <>
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <filter id="project-photo-cleanup" colorInterpolationFilters="sRGB">
            {/* Reduce fine grain before restoring contrast around larger edges. */}
            <feGaussianBlur stdDeviation={1.18} edgeMode="duplicate" result="smooth" />
            <feComposite in="SourceGraphic" in2="smooth" operator="arithmetic" k2={0.19} k3={0.81} result="clean" />
            <feGaussianBlur in="clean" stdDeviation={2.8} edgeMode="duplicate" result="softEdges" />
            <feComposite in="clean" in2="softEdges" operator="arithmetic" k2={1.42} k3={-0.42} />
          </filter>
        </defs>
      </svg>
      {naturalPhotos ? (
        <section className="mt-8" aria-label={`${title} project photos`}>
          <h2 className="font-serif text-3xl text-[#1A292C]">Project photos</h2>
          <div className="mt-5 grid grid-cols-2 items-start gap-5 sm:flex sm:flex-wrap">
            {naturalPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-haspopup="dialog"
                aria-label={`Open photo ${index + 1}`}
                onClick={() => openPhoto(index)}
                style={{ '--photo-ratio': `${photo.width} / ${photo.height}` } as CSSProperties}
                className="relative block aspect-[3/4] w-full shrink-0 cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#01782a] sm:aspect-[var(--photo-ratio)] sm:h-80 sm:w-auto"
              >
                <Image
                  src={photo.src}
                  alt={`${title}, photo ${index + 1}`}
                  fill
                  sizes={`(max-width: 639px) 50vw, ${Math.round(320 * photo.width / photo.height)}px`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover sm:object-contain"
                />
              </button>
            ))}
          </div>
        </section>
      ) : (
        <>
          <button type="button" aria-haspopup="dialog" aria-label="Open cover photo" onClick={() => openPhoto(0)} className="relative mt-8 hidden aspect-[4/3] max-h-[70vh] w-full cursor-zoom-in overflow-hidden rounded-lg sm:block">
            <Image src={cover} alt={title} fill sizes="(min-width: 1152px) 1088px, 100vw" fetchPriority="high" onLoad={markPortrait} className={croppedPhotoClass} />
          </button>
            <section className={`mt-8 sm:mt-12 ${gallery.length === 0 ? 'sm:hidden' : ''}`}>
              <h2 className="font-serif text-3xl text-[#1A292C]">Project photos</h2>
              <div className="mt-5 grid grid-cols-2 gap-5">
                {photos.map((photo, index) => (
                  <button key={photo} type="button" aria-haspopup="dialog" aria-label={`Open photo ${index + 1}`} onClick={() => openPhoto(index)} className={`relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-lg sm:aspect-[4/3] ${index === 0 ? 'sm:hidden' : ''}`}>
                    <Image src={photo} alt={`${title}, photo ${index + 1}`} fill sizes="50vw" onLoad={markPortrait} className={croppedPhotoClass} />
                  </button>
                ))}
              </div>
            </section>
        </>
      )}
      <dialog
        ref={dialog}
        aria-label={`${title} photo gallery`}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            movePhoto(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
        className="fixed inset-0 m-auto w-[min(94vw,64rem)] max-w-none rounded-lg bg-stone-950 p-3 text-white backdrop:bg-black/80"
      >
        <div className="mb-2 flex items-center justify-between">
          <span aria-live="polite" className="px-2 text-sm">{active + 1} / {photos.length}</span>
          <button type="button" aria-label="Close photo" onClick={() => dialog.current?.close()} className="cursor-pointer rounded-md p-2 hover:bg-white/20">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="relative h-[68dvh] max-h-[42rem]">
          <Image src={photos[active]} alt={`${title}, photo ${active + 1}`} fill sizes="(min-width: 1100px) 64rem, 94vw" className="object-contain" />
          {photos.length > 1 && (
            <>
              <button type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)} className="absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2 hover:bg-black">
                <ChevronLeft aria-hidden="true" />
              </button>
              <button type="button" aria-label="Next photo" onClick={() => movePhoto(1)} className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2 hover:bg-black">
                <ChevronRight aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
