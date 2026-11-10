"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type VideoModalButtonProps = {
  /** YouTube video ID, e.g. "_BNz0LMvnMk". */
  videoId: string;
  title: string;
  className?: string;
  children: ReactNode;
};

/** A button that plays a YouTube video in a modal instead of leaving the site. */
export function VideoModalButton({
  videoId,
  title,
  className,
  children,
}: VideoModalButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("cursor-pointer", className)}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => setOpen(false)}
        // Clicking the backdrop (the dialog element itself) closes it.
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="m-auto w-[min(1100px,calc(100vw-32px))] max-w-none overflow-hidden rounded-2xl bg-white p-0 text-ink-900 shadow-[0_40px_100px_rgb(0_0_0/0.55)] backdrop:bg-navy-950/75 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-cream-500 px-5 py-4 sm:px-6">
          <h2 className="font-display text-lg font-semibold sm:text-xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
          >
            <X size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-navy-900">
            {/* Only mounted while open, so closing the modal stops playback. */}
            {open && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full border-0"
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
