import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  const [playing, setPlaying] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-lg border border-border"
        onClick={() => setLightbox(true)}
      >
        {!playing ? (
          <div className="relative aspect-video w-full bg-muted">
            <img
              src={thumbnailUrl}
              alt={title || "Video thumbnail"}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/30 transition-all group-hover:bg-background/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/90 text-background transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full w-full"
              title={title}
            />
          </div>
        )}
        {title && (
          <div className="p-3">
            <p className="text-sm font-medium text-foreground">{title}</p>
          </div>
        )}
      </div>

      <Dialog open={lightbox} onOpenChange={setLightbox}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full w-full rounded-lg"
              title={title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTubeEmbed;
