'use client';
import { useInView } from 'react-intersection-observer';

const achievements = [
    {
        icon: '🏆',
        title: 'HacKP 2025 Winner',
        org: 'Kerala Police Cyberdome',
        desc: 'Won ₹5,00,000 prize for Grapnel 2.0 — an AI-powered dark web monitoring platform used by law enforcement.',
        color: '#00d4ff',
        year: '2025',
        badge: 'WINNER',
    },
    {
        icon: '🥇',
        title: 'COCOON Cybersecurity Conference',
        org: 'Cybersecurity Conference',
        desc: 'First place winner at the prestigious COCOON cybersecurity conference showcasing AI-driven security solutions.',
        color: '#ffd700',
        year: '2024',
        badge: 'WINNER',
    },
    {
        icon: '🌍',
        title: 'Israel-India Global Innovators',
        org: 'International Hackathon',
        desc: 'Selected as finalist in the prestigious global Israel-India technology innovation hackathon.',
        color: '#9d4edd',
        year: '2024',
        badge: 'FINALIST',
    },
    {
        icon: '🏅',
        title: 'MumbaiHacks',
        org: 'Mumbai Hackathon',
        desc: 'National finalist at one of India\'s most competitive hackathons with an AI-powered solution.',
        color: '#00f5d4',
        year: '2024',
        badge: 'FINALIST',
    },
    {
        icon: '🏅',
        title: 'Innoyudh',
        org: 'Defense Innovation Challenge',
        desc: 'Finalist in the annual defense technology and innovation challenge with cutting-edge AI solution.',
        color: '#ff7f00',
        year: '2024',
        badge: 'FINALIST',
    },
    {
        icon: '🚔',
        title: 'TN Police Cyberwing Hackathon',
        org: 'Tamil Nadu Police Department',
        desc: 'Finalist in the state cyberwing hackathon for AI-based cybercrime detection technologies.',
        color: '#f72585',
        year: '2024',
        badge: 'FINALIST',
    },
    {
        icon: '🚀',
        title: 'Bharatiya Antariksh Hackathon',
        org: 'ISRO Space Innovation',
        desc: 'Selected in Top 100 nationally at the prestigious ISRO space innovation hackathon.',
        color: '#4cc9f0',
        year: '2024',
        badge: 'TOP 100',
    },
    {
        icon: '🔒',
        title: 'Dome CTF',
        org: 'Capture The Flag Competition',
        desc: 'Finalist in cybersecurity capture-the-flag competition demonstrating elite hacking and defense skills.',
        color: '#00d4ff',
        year: '2024',
        badge: 'FINALIST',
    },
];

export default function Achievements() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="achievements" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '100%',
                background: 'linear-gradient(180deg, transparent 0%, rgba(13,10,46,0.3) 50%, transparent 100%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#9d4edd', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Achievements
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Hall of </span>
                    <span className="text-gradient-blue">Excellence</span>
                </h2>
                <p className="section-subtitle">
                    A track record of winning at the highest levels of national and international AI & cybersecurity competitions.
                </p>

                {/* Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                    gap: 24,
                }}>
                    {achievements.map((ach, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                padding: '28px',
                                position: 'relative',
                                overflow: 'hidden',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                                transition: `all 0.6s ease ${i * 0.08}s`,
                                borderColor: `${ach.color}20`,
                            }}
                        >
                            {/* Top gradient line */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                                background: `linear-gradient(90deg, ${ach.color}, transparent)`,
                            }} />

                            {/* Glow bg */}
                            <div style={{
                                position: 'absolute', top: -20, right: -20, width: 100, height: 100,
                                background: `radial-gradient(circle, ${ach.color}15 0%, transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                <div style={{
                                    fontSize: 32, width: 56, height: 56,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: `${ach.color}15`,
                                    borderRadius: 16, flexShrink: 0,
                                    border: `1px solid ${ach.color}30`,
                                }}>
                                    {ach.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                                        <span style={{
                                            padding: '2px 10px',
                                            background: `${ach.color}20`,
                                            border: `1px solid ${ach.color}40`,
                                            borderRadius: 20,
                                            fontSize: 10,
                                            fontWeight: 800,
                                            color: ach.color,
                                            letterSpacing: '0.1em',
                                            fontFamily: 'Orbitron, sans-serif',
                                        }}>
                                            {ach.badge}
                                        </span>
                                        <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)', fontFamily: 'Orbitron, sans-serif' }}>
                                            {ach.year}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: '#f0f4ff',
                                        marginBottom: 4,
                                        lineHeight: 1.3,
                                    }}>
                                        {ach.title}
                                    </h3>
                                    <div style={{ fontSize: 11, color: ach.color, marginBottom: 10, fontWeight: 600 }}>
                                        {ach.org}
                                    </div>
                                    <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.55)', lineHeight: 1.6 }}>
                                        {ach.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary bar */}
                <div className="glass-card" style={{
                    marginTop: 48,
                    padding: '32px 40px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: 24,
                    borderColor: 'rgba(0,212,255,0.15)',
                    opacity: inView ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.8s',
                }}>
                    {[
                        { value: '2', label: 'Competition Wins', icon: '🏆' },
                        { value: '6+', label: 'National Finalists', icon: '🏅' },
                        { value: '₹5L', label: 'Prize Money Won', icon: '💰' },
                        { value: 'ISRO', label: 'National Selector', icon: '🚀' },
                    ].map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                            <div style={{
                                fontFamily: 'Orbitron, sans-serif',
                                fontSize: 28,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                {s.value}
                            </div>
                            <div style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
