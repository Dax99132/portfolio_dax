import React, { useState, useRef } from "react";
import "./MagnifierImage.css";

export default function MagnifierImage({ src, alt, zoom = 2, size = 150, rotate = 0 }) {
  const [showLens, setShowLens] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    // mouse position relative to image
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x < 0 || y < 0 || x > width || y > height) {
      setShowLens(false);
      return;
    }

    setShowLens(true);
    setLensPosition({ x, y });
  };

  return (
    <div
      className="magnifier-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowLens(false)}
    >
      {/* Image with rotation */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="magnifier-image"
        style={{ transform: `rotate(${rotate}deg)` }}
      />

      {showLens && (
        <div
          className="magnifier-lens"
          style={{
            left: lensPosition.x - size / 2,
            top: lensPosition.y - size / 2,
            width: size,
            height: size,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imgRef.current.width * zoom}px ${
              imgRef.current.height * zoom
            }px`,
            backgroundPosition: `-${lensPosition.x * zoom - size / 2}px -${
              lensPosition.y * zoom - size / 2
            }px`,
          }}
        ></div>
      )}
    </div>
  );
}
