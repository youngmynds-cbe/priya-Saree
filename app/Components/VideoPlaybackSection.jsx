"use client";

import { useState } from "react";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

export default function VideoPlaybackSection({
  videoId,
  thumbnail,
  playIcon,
  className = "",
  rounded = "rounded-2xl",
  maxWidth = "max-w-sm",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
   <div className={`w-full flex justify-center ${className}`}>
      <div className={`relative w-full ${maxWidth} aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl`}>
        
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail */}
          <Image
           width={600}
           height={600}
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

          {/* Custom Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            {playIcon ? (
              playIcon
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#6B46C1"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
    </div>
  );
}