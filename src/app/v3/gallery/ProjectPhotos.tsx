'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useRef, useState } from 'react';
import { justifiedRows, type GalleryPhoto } from './justifiedRows';

export default function ProjectPhotos({ photos, title }: { photos: GalleryPhoto[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const rows = justifiedRows(photos);

  function openPhoto(index: number) {
    setActive(index);
    dialog.current?.showModal();
  }

  function movePhoto(direction: number) {
    setActive((index) => (index + direction + photos.length) % photos.length);
  }

  return (
    <>
      <section className="mt-8" aria-label={`${title} project photos`}>
        <h2 className="font-serif text-3xl text-[#1A292C]">Project photos</h2>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:flex sm:flex-col">
          {rows.map((row) => (
            <div key={row[0]?.src} className="contents sm:flex sm:items-start sm:gap-5">
              {row.map((photo) => {
                const index = photos.indexOf(photo);
                return (
                  <button
                    key={photo.src}
                    type="button"
                    aria-haspopup="dialog"
                    aria-label={`Open photo ${index + 1}`}
                    onClick={() => openPhoto(index)}
                    style={{
                      '--photo-ratio': `${photo.width} / ${photo.height}`,
                      '--photo-weight': photo.width / photo.height,
                    } as CSSProperties}
                    className="relative block aspect-[3/4] w-full min-w-0 cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#01782a] sm:aspect-[var(--photo-ratio)] sm:w-auto sm:basis-0 sm:grow-[var(--photo-weight)]"
                  >
                    <Image
                      src={photo.src}
                      alt={`${title}, photo ${index + 1}`}
                      fill
                      sizes="(max-width: 639px) 50vw, (max-width: 1152px) 60vw, 680px"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="object-cover sm:object-contain"
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>
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
          <Image src={photos[active].src} alt={`${title}, photo ${active + 1}`} fill sizes="(min-width: 1100px) 64rem, 94vw" className="object-contain" />
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
