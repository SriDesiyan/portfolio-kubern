'use client';
import { useState, useEffect, useCallback } from 'react';

const images = [
  '/hackp-img.jpg',
  '/hackp.jpg',
  '/img10.jpg',
  '/whatsapp-img.jpg',
  '/gallery/photo-1.jpeg',
  '/gallery/photo-4.jpeg',
  '/gallery/photo-5.jpeg',
  '/gallery/photo-9.jpeg',
  '/gallery/photo-12.jpeg',
  '/gallery/photo-15.jpeg',
  '/gallery/photo-17.jpeg',
];

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    const nextIdx = (current + 1) % images.length;
    setNext(nextIdx);
    setTransitioning(true);

    const timer = setTimeout(() => {
      setCurrent(nextIdx);
      setTransitioning(false);
    }, 2000); // matches CSS transition

    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(advance, 6000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* Current image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(0.3)',
          transform: 'scale(1.15)',
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 2s ease-in-out',
        }}
      />

      {/* Next image (cross-fades in) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images[next]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(0.3)',
          transform: 'scale(1.15)',
          opacity: transitioning ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(3,7,18,0.85) 0%, rgba(3,7,18,0.7) 40%, rgba(3,7,18,0.8) 70%, rgba(3,7,18,0.95) 100%)',
        }}
      />

      {/* Neon tint overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(157,78,221,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.6) 100%)',
        }}
      />
    </div>
  );
}
