"use client";

import Image from "next/image";
import { useState } from "react";

import getBaseUrl from "@/component/getBaseUrl";

// If you are looking for mobile support, please refer to the
// following implementation by @daviddecorso
// https://github.com/unhingedmagikarp/comparison-slider/tree/mobile-support

export const Slider = ({
  photos = [
    {
      url: "https://artisans.latelier22.fr/uploads/photo_fuite2_89ee15dd02.png",
      width: 290,
      height: 384,
    },
    {
      url: "https://artisans.latelier22.fr/uploads/photo_fuite1_7b90b988f8.png",
      width: 800,
      height: 455,
    },
  ],
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const baseUrl = getBaseUrl(photos[0].url);

  return (
    <div className="w-full relative" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-w-[700px] aspect-[1/1] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image alt="" fill draggable={false} priority src={`${baseUrl}${photos[1].url}`} />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[1/1] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt=""
            src={`${baseUrl}${photos[0].url}`}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};
