'use client';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const skillGroups = [
    {
        label: 'Programming Languages',
        icon: '{ }',
        color: '#00d4ff',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'JavaScript/TypeScript', level: 88 },
            { name: 'C++', level: 80 },
            { name: 'SQL', level: 85 },
        ],
    },
    {
        label: 'AI & Machine Learning',
        icon: '🧠',
        color: '#9d4edd',
        skills: [
            { name: 'PyTorch', level: 90 },
            { name: 'Computer Vision / OpenCV', level: 92 },
            { name: 'Scikit-Learn', level: 88 },
            { name: 'Agentic AI / LangChain', level: 82 },
        ],
    },
    {
        label: 'Web Development',
        icon: '🌐',
        color: '#00f5d4',
        skills: [
            { name: 'React / Next.js', level: 88 },
            { name: 'Node.js / Express', level: 85 },
            { name: 'FastAPI / Flask', level: 90 },
            { name: 'REST APIs / GraphQL', level: 84 },
        ],
    },
    {
        label: 'Databases & Tools',
        icon: '🗄️',
        color: '#f72585',
        skills: [
            { name: 'MongoDB / PostgreSQL', level: 85 },
            { name: 'Firebase / Supabase', level: 82 },
            { name: 'Docker / Git', level: 88 },
            { name: 'Tableau / Power BI', level: 78 },
        ],
    },
];

function SkillBar({ name, level, color, started }: { name: string; level: number; color: string; started: boolean }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (started) {
            const t = setTimeout(() => setWidth(level), 100);
            return () => clearTimeout(t);
        }
    }, [started, level]);

    return (
        <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.85)', fontWeight: 500 }}>{name}</span>
                <span style={{
                    fontSize: 12,
                    color: color,
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                }}>
                    {started ? width : 0}%
                </span>
            </div>
            <div className="skill-bar-container">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: `${width}%`,
                        background: `linear-gradient(90deg, ${color}99, ${color})`,
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const tools = [
        { name: 'Python', icon: '🐍' }, { name: 'PyTorch', icon: '🔥' },
        { name: 'OpenCV', icon: '👁️' }, { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' }, { name: 'FastAPI', icon: '⚡' },
        { name: 'Docker', icon: '🐳' }, { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' }, { name: 'LangChain', icon: '🦜' },
        { name: 'TensorFlow', icon: '📊' }, { name: 'Scikit-Learn', icon: '🔬' },
        { name: 'Node.js', icon: '🟢' }, { name: 'TypeScript', icon: '📘' },
        { name: 'Git', icon: '📁' }, { name: 'Power BI', icon: '📈' },
    ];

    return (
        <section id="skills" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#9d4edd', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Technical Skills
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Technology </span>
                    <span className="text-gradient-blue">Arsenal</span>
                </h2>
                <p className="section-subtitle">
                    Full-stack AI engineering expertise spanning research, implementation, and deployment.
                </p>

                {/* Skill groups */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
                    gap: 24,
                    marginBottom: 48,
                }}>
                    {skillGroups.map((group, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                padding: '32px',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                                transition: `all 0.7s ease ${i * 0.12}s`,
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                                <div style={{
                                    width: 44, height: 44,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: `${group.color}15`,
                                    border: `1px solid ${group.color}30`,
                                    borderRadius: 12,
                                    fontSize: 18,
                                    color: group.color,
                                    fontWeight: 800,
                                    fontFamily: 'monospace',
                                }}>
                                    {group.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: group.color,
                                    letterSpacing: '0.05em',
                                }}>
                                    {group.label}
                                </h3>
                            </div>
                            {group.skills.map((skill) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    color={group.color}
                                    started={inView}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Tech cloud */}
                <div className="glass-card" style={{
                    padding: '36px',
                    opacity: inView ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.6s',
                }}>
                    <h3 style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: 14, fontWeight: 700,
                        color: 'rgba(240,244,255,0.5)',
                        textAlign: 'center',
                        marginBottom: 24,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                        Technology Stack
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                        {tools.map((tool, i) => (
                            <div
                                key={tool.name}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 18px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 40,
                                    fontSize: 13,
                                    color: 'rgba(240,244,255,0.8)',
                                    fontWeight: 500,
                                    cursor: 'default',
                                    transition: 'all 0.25s ease',
                                    opacity: inView ? 1 : 0,
                                    animation: inView ? `counter-up 0.4s ease ${i * 0.04}s both` : 'none',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(0,212,255,0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                                    e.currentTarget.style.color = '#00d4ff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.color = 'rgba(240,244,255,0.8)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span>{tool.icon}</span>
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
