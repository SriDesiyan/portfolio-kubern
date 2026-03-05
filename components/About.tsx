'use client';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const specializations = [
        { icon: '👁️', title: 'Computer Vision', desc: 'Object detection, image segmentation, real-time video analysis' },
        { icon: '🤖', title: 'Agentic AI', desc: 'Autonomous AI agents for complex multi-step problem solving' },
        { icon: '🔍', title: 'OSINT Intelligence', desc: 'Dark web monitoring, threat intelligence, digital investigation' },
        { icon: '🛡️', title: 'AI for Public Safety', desc: 'Crime prediction, surveillance AI, law enforcement tools' },
    ];

    return (
        <section id="about" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
            {/* background accent */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800, height: 800,
                background: 'radial-gradient(circle, rgba(157,78,221,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container" ref={ref}>
                <div style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'all 0.8s ease',
                }}>
                    {/* Section label */}
                    <div style={{ textAlign: 'center', marginBottom: 16 }}>
                        <span style={{
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            color: '#00d4ff',
                            textTransform: 'uppercase',
                            fontFamily: 'Orbitron, sans-serif',
                        }}>
                            About Me
                        </span>
                    </div>

                    <h2 className="section-title">
                        <span className="text-gradient-blue">The Engineer</span>
                        <span style={{ color: '#f0f4ff' }}> Behind the AI</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 60,
                        alignItems: 'center',
                        marginTop: 64,
                    }}>
                        {/* Story */}
                        <div style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(-40px)',
                            transition: 'all 0.8s ease 0.2s',
                        }}>
                            <div className="glass-card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
                                {/* accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                                    background: 'linear-gradient(90deg, #00d4ff, #9d4edd)',
                                    borderRadius: '20px 20px 0 0',
                                }} />

                                <div style={{ marginBottom: 24 }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
                                    }}>
                                        <div style={{
                                            width: 48, height: 48, borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: 20, fontWeight: 800, color: 'white', fontFamily: 'Orbitron, sans-serif',
                                        }}>
                                            SD
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 16, fontWeight: 700, color: '#f0f4ff' }}>Sri Desiyan V</div>
                                            <div style={{ fontSize: 12, color: '#00d4ff' }}>Chennai Institute of Technology</div>
                                        </div>
                                    </div>

                                    <p style={{ color: 'rgba(240,244,255,0.75)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                                        I am an AI engineer and cybersecurity researcher with a singular mission — to build
                                        <strong style={{ color: '#00d4ff' }}> ethical AI systems</strong> that solve problems that matter.
                                        From dark web threat detection to agricultural intelligence, my work spans the intersection
                                        of machine learning, computer vision, and real-world impact.
                                    </p>
                                    <p style={{ color: 'rgba(240,244,255,0.75)', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                                        My most impactful work has been with <strong style={{ color: '#9d4edd' }}>Kerala Police Cyberdome</strong> —
                                        where I built <strong style={{ color: '#9d4edd' }}>Grapnel 2.0</strong>, an AI-powered dark web monitoring
                                        platform that helps law enforcement detect narcotics trafficking, arms trading, and online
                                        child exploitation. This project won the prestigious <strong style={{ color: '#00d4ff' }}>HacKP 2025</strong> hackathon.
                                    </p>
                                    <p style={{ color: 'rgba(240,244,255,0.75)', lineHeight: 1.8, fontSize: 15 }}>
                                        With <strong style={{ color: '#00f5d4' }}>10+ national hackathon finalists</strong> and victories at
                                        international competitions including the Israel-India Global Innovators Hackathon,
                                        I represent the next generation of AI engineers building technology for public good.
                                    </p>
                                </div>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['AI Engineer', 'Cybersecurity', 'OSINT', 'Computer Vision', 'Agentic AI', 'Public Safety AI'].map(tag => (
                                        <span key={tag} className="tech-badge">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Specializations */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 16,
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(40px)',
                            transition: 'all 0.8s ease 0.4s',
                        }}>
                            {specializations.map((spec, i) => (
                                <div key={i} className="glass-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                                    <div style={{ fontSize: 36, marginBottom: 12 }}>{spec.icon}</div>
                                    <div style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: '#00d4ff',
                                        marginBottom: 10,
                                    }}>
                                        {spec.title}
                                    </div>
                                    <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.55)', lineHeight: 1.6 }}>
                                        {spec.desc}
                                    </p>
                                </div>
                            ))}

                            {/* Kerala Police badge */}
                            <div className="glass-card" style={{
                                gridColumn: '1 / -1',
                                padding: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                borderColor: 'rgba(157,78,221,0.3)',
                                background: 'rgba(157,78,221,0.05)',
                            }}>
                                <div style={{
                                    fontSize: 40, width: 60, height: 60,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'rgba(157,78,221,0.15)',
                                    borderRadius: 16, flexShrink: 0,
                                }}>
                                    🔒
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 13, fontWeight: 700, color: '#9d4edd', marginBottom: 6 }}>
                                        Kerala Police Cyberdome
                                    </div>
                                    <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.6)', lineHeight: 1.6 }}>
                                        Worked on <strong style={{ color: '#f0f4ff' }}>Grapnel 2.0</strong> — a production dark web
                                        monitoring platform used by law enforcement to combat cybercrime and trafficking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
