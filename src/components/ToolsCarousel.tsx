import React, { useRef, useEffect } from "react";

interface ToolsCarouselProps {
  images: string[];
  speed?: number;
  height?: string;
}

const ToolsCarousel: React.FC<ToolsCarouselProps> = ({
  images,
  speed = 75,
  height = "h-24",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let lastTimestamp = performance.now();

    const step = (timestamp: number) => {
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      scrollPosition += speed * deltaTime;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      requestAnimationFrame(step);
    };

    const animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  const duplicatedImages = [...images, ...images];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${height} flex gap-12`}
      style={{ scrollBehavior: "auto" }}
    >
      {duplicatedImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`carousel-${idx}`}
          className={`${height} flex-shrink-0 object-cover`}
        />
      ))}
    </div>
  );
};

export default ToolsCarousel;
