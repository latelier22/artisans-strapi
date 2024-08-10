"use client";

import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import getBaseUrl from "@/component/getBaseUrl";

export const Slider = ({ sliders = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  if (sliders.length === 0 || !sliders[currentIndex]) {
    return <div>No images available</div>;
  }

  const handleMove = (xPosition, width) => {
    const x = Math.max(0, Math.min(xPosition, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX - rect.left, rect.width);
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.touches[0].clientX - rect.left, rect.width);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    setSliderPosition(50); // Reset slider position for the new image pair
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
    setSliderPosition(50); // Reset slider position for the new image pair
  };

  const baseUrl = getBaseUrl(sliders[currentIndex].photos[0].url);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative flex-1">
        <Swipe
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
          className="relative"
        >
          <div
            className="w-full relative"
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative w-full max-w-[700px] aspect-[1/1] m-auto overflow-hidden select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
            >
              <Image alt="" fill draggable={false} priority src={`${baseUrl}${sliders[currentIndex].photos[1].url}`} />

              <div
                className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[1/1] m-auto overflow-hidden select-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  fill
                  priority
                  draggable={false}
                  alt=""
                  src={`${baseUrl}${sliders[currentIndex].photos[0].url}`}
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
        </Swipe>

        {/* Boutons de navigation */}
        <button
          onClick={handleSwipeRight}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={handleSwipeLeft}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* Miniatures */}
      <div className="flex md:flex-col md:ml-4 mt-4 md:mt-0 overflow-x-auto">
        {sliders.map((slide, index) => (
          <div
            key={index}
            className={`cursor-pointer p-1 border ${currentIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={`${getBaseUrl(slide.photos[0].url)}${slide.photos[0].url}`}
              alt={`Miniature ${index + 1}`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
