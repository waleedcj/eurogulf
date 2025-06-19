"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface UIImageProps extends Omit<ImageProps, "onLoad" | "className"> {
  className?: string;
  containerClassName?: string;
  skeletonClassName?: string;
  showSkeleton?: boolean;
}

export function AsyncImage({
  className,
  containerClassName,
  showSkeleton = true,
  skeletonClassName,
  alt,
  ...props
}: UIImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName, showSkeleton && isLoading && skeletonClassName )}>
      {showSkeleton && isLoading && (
        <div className={cn("absolute inset-0 z-10 animate-pulse bg-gray-200 flex items-center justify-center")} >
          <svg
            className="w-10 h-10 text-gray-300 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
      <Image
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}