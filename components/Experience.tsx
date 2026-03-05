'use client';
import { useInView } from 'react-intersection-observer';

const experiences = [
    {
        role: 'Cybersecurity Intern',
        company: 'Kerala Police Cyberdome',
        period: '2024 – 2025',
        location: 'Kerala, India',
        icon: '🔒',
        color: '#9d4edd',
        achievements: [
            'Built Grapnel 2.0 — AI-powered dark web monitoring platform for law enforcement',
            'Developed NLP-based threat classifier for narcotics and trafficking detection',
            'Presented solution at HacKP 2025, winning ₹5,00,000 prize',
            'Collaborated with experienced cybercrime investigators and data analysts',
        ],
        skills: ['OSINT', 'Tor Networks', 'NLP', 'Python', 'Graph Analysis'],
    },
    {
        role: 'AI Research Assistant',
        company: 'MMRD Research & Development',
        period: '2024',
        location: 'Remote',
        icon: '🧠',
        color: '#00d4ff',
        achievements: [
            'Developed intelligent AI tools for research automation and data analysis',
            'Built multi-modal AI pipeline combining vision and language models',
            'Implemented Agentic AI workflows for complex research tasks',
            'Improved research throughput by 40% through AI-assisted literature review',
        ],
        skills: ['LangChain', 'PyTorch', 'RAG', 'Vision Models', 'Agentic AI'],
    },
    {
        role: 'Fullstack Developer Intern',
        company: 'Internzo',
        period: '2023',
        location: 'Remote',
        icon: '💻',
        color: '#00f5d4',
        achievements: [
            'Built scalable full-stack web applications using React and Node.js',
            'Implemented RESTful APIs and integrated third-party services',
            'Worked in Agile team with weekly sprints and code reviews',
            'Delivered 3 production features within internship period',
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'TypeScript'],
    },
];

export default function Experience() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="experience" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', top: 0, left: '-5%',
                width: 400, height: 800,
                background: 'radial-gradient(circle, rgba(157,78,221,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#00d4ff', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Work Experience
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Professional </span>
                    <span className="text-gradient-blue">Journey</span>
                </h2>
                <p className="section-subtitle">
                    Real-world experience building AI systems for law enforcement, research labs, and technology companies.
                </p>

                <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: 28,
                        top: 40,
                        bottom: 40,
                        width: 1,
                        background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), rgba(157,78,221,0.6), rgba(0,245,212,0.3))',
                    }} />

                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                gap: 32,
                                marginBottom: 40,
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                                transition: `all 0.7s ease ${i * 0.18}s`,
                            }}
                        >
                            {/* Icon bubble */}
                            <div style={{
                                width: 56, height: 56, flexShrink: 0,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: `${exp.color}15`,
                                border: `2px solid ${exp.color}50`,
                                borderRadius: '50%',
                                fontSize: 22,
                                zIndex: 1,
                                boxShadow: `0 0 20px ${exp.color}30`,
                            }}>
                                {exp.icon}
                            </div>

                            {/* Card */}
                            <div className="glass-card" style={{
                                flex: 1,
                                padding: '28px 32px',
                                borderColor: `${exp.color}20`,
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                {/* Left accent bar */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, bottom: 0,
                                    width: 3,
                                    background: `linear-gradient(to bottom, ${exp.color}, transparent)`,
                                    borderRadius: 3,
                                }} />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                                    <div>
                                        <h3 style={{
                                            fontFamily: 'Orbitron, sans-serif',
                                            fontSize: 16, fontWeight: 800,
                                            color: '#f0f4ff', marginBottom: 4,
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <div style={{ fontSize: 14, color: exp.color, fontWeight: 700, marginBottom: 4 }}>
                                            {exp.company}
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(240,244,255,0.4)' }}>
                                            📍 {exp.location}
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '6px 16px',
                                        background: `${exp.color}10`,
                                        border: `1px solid ${exp.color}30`,
                                        borderRadius: 20,
                                        fontSize: 12,
                                        color: exp.color,
                                        fontFamily: 'Orbitron, sans-serif',
                                        fontWeight: 700,
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {exp.period}
                                    </div>
                                </div>

                                <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                                    {exp.achievements.map((ach, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                                            <div style={{
                                                width: 6, height: 6, borderRadius: '50%',
                                                background: exp.color, flexShrink: 0, marginTop: 7,
                                                boxShadow: `0 0 6px ${exp.color}`,
                                            }} />
                                            <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.7)', lineHeight: 1.6 }}>{ach}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {exp.skills.map(skill => (
                                        <span key={skill} style={{
                                            padding: '3px 12px',
                                            background: `${exp.color}10`,
                                            border: `1px solid ${exp.color}25`,
                                            borderRadius: 20,
                                            fontSize: 11,
                                            color: exp.color,
                                            fontWeight: 600,
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
