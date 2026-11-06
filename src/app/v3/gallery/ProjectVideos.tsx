'use client';

import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { useRef, useState } from 'react';

export default function ProjectVideos({ videos, title }: { videos: string[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl text-[#1A292C]">Project videos</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {videos.map((video, index) => (
          <button
            key={video}
            type="button"
            aria-label={`Play ${title}, video ${index + 1}`}
            aria-haspopup="dialog"
            onClick={() => {
              setActiveVideo(video);
              dialog.current?.showModal();
            }}
            className="group relative grid aspect-video w-full cursor-pointer place-items-center overflow-hidden rounded-lg bg-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <Image
              src={video.replace(/\.mp4$/, '.webp')}
              alt=""
              fill
              sizes="(min-width: 1152px) 534px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="relative grid size-14 place-items-center rounded-full bg-black/70 text-white group-hover:bg-[#01782a]">
              <Play aria-hidden="true" className="size-6 fill-current" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-label={`${title} project video`}
        onClose={() => setActiveVideo(null)}
        className="fixed inset-0 m-auto w-[min(94vw,64rem)] max-w-none rounded-lg bg-stone-950 p-3 text-white backdrop:bg-black/80"
      >
        <div className="mb-2 flex justify-end">
          <button type="button" aria-label="Close video" className="cursor-pointer rounded-md p-2 hover:bg-white/20" onClick={() => dialog.current?.close()}>
            <X aria-hidden="true" className="size-6" />
          </button>
        </div>
        {activeVideo && (
          <video src={activeVideo} controls autoPlay playsInline aria-label={title} className="mx-auto max-h-[76vh] w-full" />
        )}
      </dialog>
    </section>
  );
}
