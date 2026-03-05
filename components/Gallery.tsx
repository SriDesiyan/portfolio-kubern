'use client';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const allImages = [
  // Original hero photos
  { src: '/hackp-img.jpg', caption: 'HacKP 2025 — Winner Award Ceremony', tag: 'Award' },
  { src: '/hackp.jpg', caption: 'HacKP 2025 — Kerala Police Cyberdome', tag: 'Hackathon' },
  { src: '/img10.jpg', caption: 'Conference Participation & Networking', tag: 'Conference' },
  { src: '/screenshot.png', caption: 'Project Demo & Presentation', tag: 'Demo' },
  { src: '/whatsapp-img.jpg', caption: 'Team Photo — Hackathon Squad', tag: 'Team' },
  // New gallery photos
  { src: '/gallery/photo-1.jpeg', caption: 'Hackathon Moments — Behind the Scenes', tag: 'Team' },
  { src: '/gallery/photo-2.jpeg', caption: 'Hackathon Team Collaboration', tag: 'Team' },
  { src: '/gallery/photo-3.jpeg', caption: 'At the Innovation Hub', tag: 'Conference' },
  { src: '/gallery/photo-4.jpeg', caption: 'Award Ceremony Highlight', tag: 'Award' },
  { src: '/gallery/photo-5.jpeg', caption: 'National Hackathon — Competition Day', tag: 'Hackathon' },
  { src: '/gallery/photo-6.jpeg', caption: 'Team Strategy Session', tag: 'Team' },
  { src: '/gallery/photo-7.jpeg', caption: 'Cybersecurity Conference', tag: 'Conference' },
  { src: '/gallery/photo-8.jpeg', caption: 'Project Presentation to Judges', tag: 'Demo' },
  { src: '/gallery/photo-9.jpeg', caption: 'Hackathon Finals — On Stage', tag: 'Award' },
  { src: '/gallery/photo-10.jpeg', caption: 'Innovation Challenge — Team Photo', tag: 'Team' },
  { src: '/gallery/photo-11.jpeg', caption: 'Networking at Tech Summit', tag: 'Conference' },
  { src: '/gallery/photo-12.jpeg', caption: 'Winning Moment — Prize Ceremony', tag: 'Award' },
  { src: '/gallery/photo-13.jpeg', caption: 'Demo Day — Showcasing AI Solutions', tag: 'Demo' },
  { src: '/gallery/photo-14.jpeg', caption: 'Hackathon Midnight Session', tag: 'Hackathon' },
  { src: '/gallery/photo-15.jpeg', caption: 'Team Celebration Photo', tag: 'Team' },
  { src: '/gallery/photo-16.jpeg', caption: 'Tech Conference — Panel Discussion', tag: 'Conference' },
  { src: '/gallery/photo-17.jpeg', caption: 'Grand Finale — Achievement Unlocked', tag: 'Award' },
  // Screenshots
  { src: '/gallery/screen-1.png', caption: 'Project Dashboard — Grapnel 2.0', tag: 'Demo' },
  { src: '/gallery/screen-2.png', caption: 'AI Analytics Platform Interface', tag: 'Demo' },
  { src: '/gallery/screen-3.png', caption: 'Cybersecurity Monitoring Dashboard', tag: 'Demo' },
  { src: '/gallery/screen-4.png', caption: 'Competition Certificate', tag: 'Award' },
  { src: '/gallery/screen-5.png', caption: 'LeetCode & Competitive Programming', tag: 'Demo' },
  { src: '/gallery/screen-6.png', caption: 'Tech Stack & Architecture', tag: 'Demo' },
  { src: '/gallery/screen-7.png', caption: 'Hackathon Submission Portal', tag: 'Hackathon' },
  { src: '/gallery/screen-8.png', caption: 'Research Publication & Insights', tag: 'Conference' },
  { src: '/gallery/screen-9.png', caption: 'Award Announcement & Recognition', tag: 'Award' },
  { src: '/gallery/screen-10.png', caption: 'AI Model Performance Metrics', tag: 'Demo' },
  { src: '/gallery/screen-11.png', caption: 'Conference Agenda & Schedule', tag: 'Conference' },
  { src: '/gallery/screen-12.png', caption: 'Event Registration & Participation', tag: 'Hackathon' },
  { src: '/gallery/screen-13.png', caption: 'Team Leaderboard Rankings', tag: 'Hackathon' },
  { src: '/gallery/screen-14.png', caption: 'Competition Standings & Results', tag: 'Award' },
  { src: '/gallery/screen-15.png', caption: 'Technical Architecture Overview', tag: 'Demo' },
  { src: '/gallery/screen-16.png', caption: 'Project Deployment & Infrastructure', tag: 'Demo' },
];

const categories = ['All', 'Award', 'Hackathon', 'Team', 'Conference', 'Demo'] as const;

const categoryColors: Record<string, string> = {
  All: '#00d4ff',
  Award: '#ffd700',
  Hackathon: '#9d4edd',
  Team: '#00f5d4',
  Conference: '#f72585',
  Demo: '#4cc9f0',
};

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.02, triggerOnce: true });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => activeFilter === 'All' ? allImages : allImages.filter(img => img.tag === activeFilter),
    [activeFilter]
  );

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  const open = (displayIdx: number) => {
    // find index in filtered array
    setLightbox(displayIdx);
  };
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox(i => {
      if (i === null) return null;
      return (i - 1 + filtered.length) % filtered.length;
    });
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox(i => {
      if (i === null) return null;
      return (i + 1) % filtered.length;
    });
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
      {/* Background accents */}
      <div style={{
        position: 'absolute', top: '20%', left: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(157,78,221,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
            color: '#00f5d4', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
          }}>
            Gallery
          </span>
        </div>
        <h2 className="section-title">
          <span style={{ color: '#f0f4ff' }}>Moments of </span>
          <span className="text-gradient-blue">Excellence</span>
        </h2>
        <p className="section-subtitle">
          Highlights from hackathons, conferences, award ceremonies, and project demos.
        </p>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          flexWrap: 'wrap',
          marginBottom: 48,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          {categories.map(cat => {
            const isActive = activeFilter === cat;
            const color = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                style={{
                  padding: '8px 20px',
                  borderRadius: 50,
                  border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.1)'}`,
                  background: isActive ? `${color}18` : 'rgba(255,255,255,0.03)',
                  color: isActive ? color : 'rgba(240,244,255,0.6)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                {cat}
                <span style={{
                  marginLeft: 6,
                  fontSize: 11,
                  opacity: 0.6,
                  fontFamily: 'Orbitron, sans-serif',
                }}>
                  {cat === 'All' ? allImages.length : allImages.filter(i => i.tag === cat).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div
          style={{
            columnCount: 4,
            columnGap: 14,
            maxWidth: 1200,
            margin: '0 auto',
          }}
          className="gallery-grid"
        >
          {displayed.map((img, i) => (
            <div
              key={`${activeFilter}-${img.src}`}
              onClick={() => open(i)}
              className="gallery-item"
              style={{
                breakInside: 'avoid',
                marginBottom: 14,
                borderRadius: 14,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.96)',
                transition: `opacity 0.5s ease ${(i % 12) * 0.05}s, transform 0.5s ease ${(i % 12) * 0.05}s`,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease, filter 0.5s ease',
                }}
              />

              {/* Hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.3) 45%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 16,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {/* Zoom icon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(0,212,255,0.2)',
                  border: '1px solid rgba(0,212,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                }}>
                  <ZoomIn size={18} color="#00d4ff" />
                </div>

                {/* Tag badge */}
                <span style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: `${categoryColors[img.tag] || '#00d4ff'}20`,
                  border: `1px solid ${categoryColors[img.tag] || '#00d4ff'}50`,
                  borderRadius: 20,
                  fontSize: 9,
                  fontWeight: 800,
                  color: categoryColors[img.tag] || '#00d4ff',
                  marginBottom: 6,
                  width: 'fit-content',
                  fontFamily: 'Orbitron, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {img.tag}
                </span>
                <p style={{ fontSize: 12, color: '#f0f4ff', fontWeight: 600, lineHeight: 1.3 }}>
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {filtered.length > 12 && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
              style={{
                padding: '12px 36px',
                fontSize: 14,
              }}
            >
              {showAll ? `Show Less` : `View All ${filtered.length} Photos`}
            </button>
          </div>
        )}

        {/* Image count summary */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          marginTop: 48,
          flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease 0.5s',
        }}>
          {[
            { label: 'Total Photos', value: allImages.length, icon: '📸' },
            { label: 'Awards', value: allImages.filter(i => i.tag === 'Award').length, icon: '🏆' },
            { label: 'Hackathons', value: allImages.filter(i => i.tag === 'Hackathon').length, icon: '💻' },
            { label: 'Conferences', value: allImages.filter(i => i.tag === 'Conference').length, icon: '🎤' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 22,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.45)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ——— Lightbox ——— */}
      {lightbox !== null && lightbox < filtered.length && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(3,7,18,0.96)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10, transition: 'all 0.2s ease',
            }}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            style={{
              position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10, transition: 'all 0.2s ease',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            style={{
              position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10, transition: 'all 0.2s ease',
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Image + caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '88vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              style={{
                maxWidth: '85vw',
                maxHeight: '78vh',
                borderRadius: 12,
                objectFit: 'contain',
                boxShadow: '0 0 80px rgba(0,212,255,0.15), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            />
            <div style={{ textAlign: 'center', marginTop: 16, maxWidth: 500 }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 12px',
                background: `${categoryColors[filtered[lightbox].tag] || '#00d4ff'}18`,
                border: `1px solid ${categoryColors[filtered[lightbox].tag] || '#00d4ff'}40`,
                borderRadius: 20,
                fontSize: 10,
                fontWeight: 700,
                color: categoryColors[filtered[lightbox].tag] || '#00d4ff',
                marginBottom: 8,
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {filtered[lightbox].tag}
              </span>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#f0f4ff', marginBottom: 4, lineHeight: 1.4 }}>
                {filtered[lightbox].caption}
              </p>
              <span style={{ fontSize: 12, color: 'rgba(240,244,255,0.35)', fontFamily: 'Orbitron, sans-serif' }}>
                {lightbox + 1} / {filtered.length}
              </span>
            </div>

            {/* Thumbnail strip */}
            <div style={{
              display: 'flex',
              gap: 6,
              marginTop: 16,
              overflowX: 'auto',
              maxWidth: '85vw',
              padding: '4px 0',
              justifyContent: 'center',
            }}>
              {filtered.slice(
                Math.max(0, lightbox - 4),
                Math.min(filtered.length, lightbox + 5)
              ).map((thumb, ti) => {
                const realIdx = Math.max(0, lightbox - 4) + ti;
                return (
                  <div
                    key={thumb.src}
                    onClick={(e) => { e.stopPropagation(); setLightbox(realIdx); }}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 6,
                      overflow: 'hidden',
                      border: realIdx === lightbox
                        ? '2px solid #00d4ff'
                        : '1px solid rgba(255,255,255,0.1)',
                      opacity: realIdx === lightbox ? 1 : 0.5,
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={thumb.src}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.06);
          filter: brightness(0.7);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 1024px) {
          .gallery-grid {
            column-count: 3 !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            column-count: 2 !important;
            column-gap: 10px !important;
          }
          .gallery-grid .gallery-item {
            margin-bottom: 10px !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
