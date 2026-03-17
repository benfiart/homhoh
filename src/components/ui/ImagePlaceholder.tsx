import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label = "Image placeholder",
  aspectRatio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} rounded-2xl bg-cream-100 border border-cream-200 flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <Camera className="w-8 h-8 text-brown-600/30" />
      <span className="text-xs text-text-muted tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
