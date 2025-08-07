"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Luxury Interior Render",
      button: "View Details",
      src: "/render1.jpg",
    },
    {
      title: "Modern Exterior Render",
      button: "View Details",
      src: "/render2.jpg",
    },
    {
      title: "Contemporary Design Render",
      button: "View Details",
      src: "/render3.jpg",
    },
    {
      title: "Architectural Render",
      button: "View Details",
      src: "/render4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
} 