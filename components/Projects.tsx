'use client';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Grapnel 2.0',
        subtitle: 'Dark Web Monitoring Platform',
        emoji: '🕵️',
        description: 'AI-powered OSINT intelligence system built for Kerala Police Cyberdome. Uses NLP, computer vision, and graph analysis to detect narcotics trafficking, arms trading, and child exploitation on darknet markets.',
        features: ['Tor network crawler', 'NLP threat classification', 'Graph network analysis', 'Real-time alerting'],
        tech: ['Python', 'PyTorch', 'NLP', 'OpenCV', 'Graph DB', 'Tor', 'FastAPI'],
        color1: '#9d4edd',
        color2: '#00d4ff',
        award: '🏆 HacKP 2025 Winner — ₹5,00,000',
        impact: 'Used by Law Enforcement',
        category: 'Cybersecurity',
    },
    {
        title: 'M-Pulse',
        subtitle: 'Agentic AI Health Intelligence System',
        emoji: '🧬',
        description: 'Autonomous AI agent that predicts disease outbreaks including dengue, malaria, and viral epidemics. Integrates satellite data, climate models, and health records to generate early warnings with 87% accuracy.',
        features: ['Disease outbreak prediction', 'Satellite data integration', 'Agentic workflow', 'Government API integration'],
        tech: ['Python', 'Scikit-Learn', 'FastAPI', 'LangChain', 'PostgreSQL', 'React'],
        color1: '#00f5d4',
        color2: '#00d4ff',
        award: '🚀 National Hackathon Finalist',
        impact: '87% Prediction Accuracy',
        category: 'HealthTech AI',
    },
    {
        title: 'AgriAssist',
        subtitle: 'AI Smart Farming Platform',
        emoji: '🌾',
        description: 'Comprehensive AI platform for Indian farmers featuring crop recommendation, disease detection from plant images, weather insights, and soil health analysis. Supports 15+ regional languages.',
        features: ['Crop disease detection', 'Weather forecasting AI', 'Market price prediction', '15+ language support'],
        tech: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js', 'MongoDB', 'Firebase'],
        color1: '#4cc9f0',
        color2: '#00f5d4',
        award: '🏅 AgriHack Finalist',
        impact: '500+ Farmers Impacted',
        category: 'AgriTech',
    },
    {
        title: 'SecurePolice',
        subtitle: 'Encrypted Police Messaging App',
        emoji: '🔐',
        description: 'End-to-end encrypted communication platform built specifically for police teams. Implements Signal Protocol with biometric authentication, offline mesh networking, and secure file sharing.',
        features: ['Signal protocol E2E encryption', 'Biometric authentication', 'Offline mesh network', 'Secure media sharing'],
        tech: ['React Native', 'Node.js', 'Signal Protocol', 'MongoDB', 'WebRTC', 'TypeScript'],
        color1: '#f72585',
        color2: '#9d4edd',
        award: '🏅 Police Tech Challenge',
        impact: 'Field-Tested by Officers',
        category: 'Security',
    },
];

export default function Projects() {
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="projects" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', top: '50%', right: '-10%',
                width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#00f5d4', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Featured Projects
                    </span>
                </div>
                <h2 className="section-title">
                    <span className="text-gradient-blue">AI Systems</span>
                    <span style={{ color: '#f0f4ff' }}> Built for Impact</span>
                </h2>
                <p className="section-subtitle">
                    Real-world AI solutions deployed for law enforcement, public health, agriculture, and security.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 520px), 1fr))', gap: 28 }}>
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            onMouseEnter={() => setHoverIdx(i)}
                            onMouseLeave={() => setHoverIdx(null)}
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                position: 'relative',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                                transition: `all 0.7s ease ${i * 0.15}s`,
                                borderColor: hoverIdx === i ? `${proj.color1}40` : 'rgba(255,255,255,0.08)',
                                cursor: 'default',
                            }}
                        >
                            {/* Top accent */}
                            <div style={{
                                height: 3,
                                background: `linear-gradient(90deg, ${proj.color1}, ${proj.color2})`,
                            }} />

                            {/* Header */}
                            <div style={{
                                padding: '28px 28px 0',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 18,
                                marginBottom: 20,
                            }}>
                                <div style={{
                                    fontSize: 36, width: 64, height: 64,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: `linear-gradient(135deg, ${proj.color1}20, ${proj.color2}20)`,
                                    border: `1px solid ${proj.color1}30`,
                                    borderRadius: 18,
                                    flexShrink: 0,
                                    transition: 'transform 0.3s ease',
                                    transform: hoverIdx === i ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                                }}>
                                    {proj.emoji}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                                        <span style={{
                                            padding: '2px 10px',
                                            background: `${proj.color1}15`,
                                            border: `1px solid ${proj.color1}30`,
                                            borderRadius: 20,
                                            fontSize: 10,
                                            fontWeight: 700,
                                            color: proj.color1,
                                            letterSpacing: '0.08em',
                                        }}>
                                            {proj.category}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        fontSize: 18,
                                        fontWeight: 800,
                                        color: '#f0f4ff',
                                        marginBottom: 4,
                                    }}>
                                        {proj.title}
                                    </h3>
                                    <div style={{ fontSize: 12, color: proj.color1, fontWeight: 600 }}>
                                        {proj.subtitle}
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '0 28px 28px' }}>
                                <p style={{
                                    fontSize: 13,
                                    color: 'rgba(240,244,255,0.65)',
                                    lineHeight: 1.7,
                                    marginBottom: 20,
                                }}>
                                    {proj.description}
                                </p>

                                {/* Features */}
                                <div style={{ marginBottom: 20 }}>
                                    <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)', marginBottom: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        Key Features
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                                        {proj.features.map((f, j) => (
                                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: proj.color1, flexShrink: 0 }} />
                                                <span style={{ fontSize: 12, color: 'rgba(240,244,255,0.65)' }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech badges */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                                    {proj.tech.map(t => (
                                        <span key={t} style={{
                                            padding: '3px 10px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 6,
                                            fontSize: 11,
                                            color: 'rgba(240,244,255,0.6)',
                                            fontWeight: 500,
                                        }}>{t}</span>
                                    ))}
                                </div>

                                {/* Award + Links */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                                    <div style={{
                                        fontSize: 11,
                                        color: proj.color1,
                                        fontWeight: 700,
                                        padding: '6px 14px',
                                        background: `${proj.color1}10`,
                                        borderRadius: 20,
                                        border: `1px solid ${proj.color1}30`,
                                    }}>
                                        {proj.award}
                                    </div>
                                    <div style={{ display: 'flex', gap: 10 }}>
                                        <button style={{
                                            display: 'flex', alignItems: 'center', gap: 6,
                                            padding: '7px 16px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 8,
                                            color: 'rgba(240,244,255,0.7)',
                                            fontSize: 12,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                        }}>
                                            <Github size={13} />
                                            Code
                                        </button>
                                        <button style={{
                                            display: 'flex', alignItems: 'center', gap: 6,
                                            padding: '7px 16px',
                                            background: `linear-gradient(135deg, ${proj.color1}20, ${proj.color2}20)`,
                                            border: `1px solid ${proj.color1}40`,
                                            borderRadius: 8,
                                            color: proj.color1,
                                            fontSize: 12,
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            transition: 'all 0.2s ease',
                                        }}>
                                            <ExternalLink size={13} />
                                            Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 600px) {
          #projects .section-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
