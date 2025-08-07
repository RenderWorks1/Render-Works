"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemoOptionB() {
  const slideData = [
    {
      title: "Modern Interior Render",
      button: "View Details",
      src: "/render5.jpg",
    },
    {
      title: "Contemporary Exterior Render",
      button: "View Details",
      src: "/render6.jpg",
    },
    {
      title: "Architectural Detail Render",
      button: "View Details",
      src: "/render7.png",
    },
    {
      title: "Luxury Property Render",
      button: "View Details",
      src: "/render8.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
} 