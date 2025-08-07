"use client";
import React, { createContext } from "react";
import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <CarouselContext.Provider
      value={{ onCardClose: () => {}, currentIndex: 0 }}
    >
      <div className="relative w-full">
        <div className="flex flex-row justify-center gap-12 px-4 py-10 md:py-20">
          {items.map((item) => (
            <div
              key={"card" + Math.random()}
              className="rounded-3xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <div className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-gray-800 via-transparent to-transparent h-1/3"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-8">
        <p className="text-left font-sans text-sm font-medium text-white md:text-base">
          {card.category}
        </p>
        <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
          {card.title}
        </p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 object-cover scale-105"
      />
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  return (
    <img
      className={cn(
        "h-full w-full object-cover",
        className,
      )}
      src={src as string}
      width={width || 400}
      height={height || 600}
      loading="eager"
      alt={alt ? alt : "Background of a beautiful view"}
      style={{ imageRendering: 'auto' }}
      {...rest}
    />
  );
};