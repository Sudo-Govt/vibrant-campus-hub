import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  aspect?: string;
  wrapperClassName?: string;
}

export const LazyImage = ({ aspect, wrapperClassName, className, alt = "", ...props }: Props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-muted", wrapperClassName)} style={aspect ? { aspectRatio: aspect } : undefined}>
      {!loaded && (
        <div className="absolute inset-0 grad-mesh opacity-60" />
      )}
      <img
        loading="lazy"
        decoding="async"
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn("img-fade w-full h-full object-cover", loaded && "loaded", className)}
        {...props}
      />
    </div>
  );
};
