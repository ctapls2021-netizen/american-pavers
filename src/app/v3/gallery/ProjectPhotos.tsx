'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useRef, useState } from 'react';

export default function ProjectPhotos({ photos, title }: { photos: string[]; title: string }) {
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
      <button type="button" aria-haspopup="dialog" aria-label="Open cover photo" onClick={() => openPhoto(0)} className="relative mt-8 block aspect-[4/3] max-h-[70vh] w-full cursor-zoom-in overflow-hidden rounded-lg">
        <Image src={cover} alt={title} fill sizes="(min-width: 1152px) 1088px, 100vw" fetchPriority="high" className="object-cover" />
      </button>
      {gallery.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-3xl text-[#1A292C]">Project photos</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {gallery.map((photo, index) => (
              <button key={photo} type="button" aria-haspopup="dialog" aria-label={`Open photo ${index + 2}`} onClick={() => openPhoto(index + 1)} className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg">
                <Image src={photo} alt={`${title}, photo ${index + 2}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </button>
            ))}
          </div>
        </section>
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
