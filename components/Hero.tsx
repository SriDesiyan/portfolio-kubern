'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Github, Mail, ChevronDown } from 'lucide-react';

const NeuralNetwork = dynamic(() => import('./NeuralNetwork'), { ssr: false });

const stats = [
    { icon: '🏆', value: 'HacKP 2025 Winner', label: '₹5,00,000 Prize', sub: 'Kerala Police Cyberdome' },
    { icon: '🧠', value: 'AI & CV Engineer', label: 'Computer Vision + NLP', sub: 'Deep Learning Specialist' },
    { icon: '💻', value: '520+ Problems', label: 'LeetCode Top 5.36%', sub: 'Competitive Programmer' },
    { icon: '🚀', value: '10+ Hackathons', label: 'National Finalist', sub: 'International Competitor' },
];

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 1,
        }}>
            {/* Background glows */}
            <div style={{
                position: 'absolute', top: '15%', left: '10%',
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', right: '5%',
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(157,78,221,0.1) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="section-container hero-main-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 40,
                alignItems: 'center',
                paddingTop: 100,
                paddingBottom: 60,
                zIndex: 1,
                position: 'relative',
            }}>
                {/* Left Content */}
                <div>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 20px',
                        background: 'rgba(0,212,255,0.08)',
                        border: '1px solid rgba(0,212,255,0.2)',
                        borderRadius: 50,
                        marginBottom: 28,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease',
                    }}>
                        <span style={{ fontSize: 10, width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block', boxShadow: '0 0 8px #00d4ff', animation: 'pulse-glow 2s infinite' }} />
                        <span style={{ color: '#00d4ff', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'Orbitron, sans-serif' }}>
                            AVAILABLE FOR OPPORTUNITIES
                        </span>
                    </div>

                    {/* Name */}
                    <h1 style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: 'clamp(32px, 4.5vw, 60px)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: 12,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease 0.1s',
                    }}>
                        <span style={{ color: '#f0f4ff' }}>Sri </span>
                        <span style={{
                            background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Desiyan V</span>
                    </h1>

                    {/* Roles */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 8,
                        marginBottom: 24,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease 0.2s',
                    }}>
                        {['AI Engineer', 'Cybersecurity Researcher', 'Hackathon Champion'].map((role, i) => (
                            <span key={i} style={{
                                padding: '6px 14px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 6,
                                fontSize: 13,
                                color: 'rgba(240,244,255,0.8)',
                                fontWeight: 500,
                            }}>
                                {role}
                            </span>
                        ))}
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontSize: 17,
                        color: 'rgba(240,244,255,0.65)',
                        lineHeight: 1.7,
                        marginBottom: 32,
                        maxWidth: 440,
                        fontStyle: 'italic',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease 0.3s',
                    }}>
                        &ldquo;Building AI systems for cybersecurity, public safety and real-world impact.&rdquo;
                    </p>

                    {/* Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: 12,
                        flexWrap: 'wrap',
                        marginBottom: 0,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease 0.4s',
                    }}>
                        <a href="#projects" className="btn-primary">
                            <span>View Projects</span>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            <Mail size={16} />
                            Contact
                        </a>
                        <a
                            href="https://github.com/sridesiyan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Center – Personal Photo with Glowing Frame */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 1s ease 0.2s',
                }}
                    className="hero-photo-col"
                >
                    {/* Outer rotating glow ring */}
                    <div style={{
                        position: 'relative',
                        width: 280,
                        height: 280,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {/* Rotating gradient ring */}
                        <div style={{
                            position: 'absolute',
                            inset: -4,
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, #00d4ff, #9d4edd, #00f5d4, #f72585, #00d4ff)',
                            animation: 'spin-slow 8s linear infinite',
                            opacity: 0.7,
                        }} />
                        {/* Inner mask */}
                        <div style={{
                            position: 'absolute',
                            inset: 3,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0d0a2e, #030712)',
                        }} />
                        {/* Photo */}
                        <img
                            src="/hackp-img.jpg"
                            alt="Sri Desiyan V"
                            style={{
                                width: 256,
                                height: 256,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                position: 'relative',
                                zIndex: 1,
                                border: '3px solid rgba(0,212,255,0.3)',
                                boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(157,78,221,0.15)',
                            }}
                        />
                        {/* Pulse ring */}
                        <div style={{
                            position: 'absolute',
                            inset: -16,
                            borderRadius: '50%',
                            border: '1px solid rgba(0,212,255,0.15)',
                            animation: 'pulse-glow 3s ease-in-out infinite',
                        }} />
                        <div style={{
                            position: 'absolute',
                            inset: -32,
                            borderRadius: '50%',
                            border: '1px solid rgba(157,78,221,0.08)',
                            animation: 'pulse-glow 3s ease-in-out infinite 1s',
                        }} />
                    </div>
                </div>

                {/* Right - Stats + Neural Network */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(40px)',
                    transition: 'all 0.8s ease 0.4s',
                }}
                    className="hero-right-col"
                >
                    {/* Stats */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 12,
                    }}>
                        {stats.map((s, i) => (
                            <div key={i} className="glass-card" style={{
                                padding: '14px 18px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                            }}>
                                <div style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        fontSize: 13,
                                        fontWeight: 800,
                                        background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        marginBottom: 2,
                                    }}>
                                        {s.value}
                                    </div>
                                    <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.7)', fontWeight: 600 }}>{s.label}</div>
                                    <div style={{ fontSize: 10, color: 'rgba(240,244,255,0.35)', marginTop: 1 }}>{s.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mini neural network */}
                    <div style={{
                        borderRadius: 16,
                        overflow: 'hidden',
                        maxHeight: 200,
                        opacity: 0.7,
                    }}
                        className="hero-neural-mini"
                    >
                        <NeuralNetwork />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                animation: 'float 2s ease-in-out infinite',
                zIndex: 1,
                opacity: 0.5,
            }}>
                <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
                <ChevronDown size={18} color="rgba(0,212,255,0.6)" />
            </div>

            <style>{`
        @media (max-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            padding-top: 120px !important;
            text-align: center;
          }
          .hero-main-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-main-grid > div:first-child p {
            text-align: center;
          }
          .hero-photo-col {
            order: -1;
          }
          .hero-photo-col > div {
            width: 200px !important;
            height: 200px !important;
          }
          .hero-photo-col img {
            width: 180px !important;
            height: 180px !important;
          }
          .hero-right-col {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .hero-neural-mini {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .hero-right-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
