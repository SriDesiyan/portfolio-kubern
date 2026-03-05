'use client';
import { useInView } from 'react-intersection-observer';

const platforms = [
    {
        name: 'LeetCode',
        icon: '⚡',
        rating: 'Top 5.36%',
        detail: '520+ Problems Solved',
        sub: 'Algorithms & Data Structures',
        color: '#f5a623',
        color2: '#ff6b35',
        stat1: { label: 'Problems', value: '520+' },
        stat2: { label: 'Rank', value: 'Top 5.36%' },
        stat3: { label: 'Streak', value: '60+ days' },
        link: 'https://leetcode.com/sridesiyan',
    },
    {
        name: 'CodeChef',
        icon: '👨‍🍳',
        rating: '3⭐ Rating',
        detail: 'Division 2 Competitive Programmer',
        sub: 'Monthly Long Challenges',
        color: '#5b4638',
        color2: '#a0765a',
        stat1: { label: 'Stars', value: '⭐⭐⭐' },
        stat2: { label: 'Division', value: 'Div. 2' },
        stat3: { label: 'Contests', value: '40+' },
        link: 'https://codechef.com/users/sridesiyan',
    },
    {
        name: 'Codeforces',
        icon: '🔷',
        rating: 'Pupil',
        detail: 'Competitive Programming',
        sub: 'Rated Rounds & Contests',
        color: '#4cc9f0',
        color2: '#00d4ff',
        stat1: { label: 'Rank', value: 'Pupil' },
        stat2: { label: 'Rounds', value: '25+' },
        stat3: { label: 'Max Rating', value: '1200+' },
        link: 'https://codeforces.com/profile/sridesiyan',
    },
    {
        name: 'Skillrack',
        icon: '🎯',
        rating: '244+ Problems',
        detail: 'Problem Solving Platform',
        sub: 'College Platform Champion',
        color: '#00f5d4',
        color2: '#9d4edd',
        stat1: { label: 'Problems', value: '244+' },
        stat2: { label: 'Track', value: 'Elite' },
        stat3: { label: 'Score', value: 'Top 10%' },
        link: '#',
    },
];

// Activity heatmap mock data
function Heatmap() {
    const weeks = 26;
    const days = 7;
    const cells = Array.from({ length: weeks * days }, (_, i) => ({
        intensity: Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 0,
        idx: i,
    }));

    const colors = ['rgba(255,255,255,0.05)', '#00d4ff30', '#00d4ff60', '#00d4ff90', '#00d4ff'];

    return (
        <div style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', gap: 3, width: 'max-content' }}>
                {Array.from({ length: weeks }, (_, wk) => (
                    <div key={wk} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {Array.from({ length: days }, (_, d) => {
                            const cell = cells[wk * days + d];
                            return (
                                <div
                                    key={d}
                                    title={`${cell.intensity * 3} problems`}
                                    style={{
                                        width: 12, height: 12,
                                        borderRadius: 3,
                                        background: colors[cell.intensity],
                                        transition: 'transform 0.15s ease',
                                        cursor: 'default',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.4)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CompetitiveProgramming() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="competitive" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#00f5d4', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Competitive Programming
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Code. </span>
                    <span className="text-gradient-blue">Compete. </span>
                    <span style={{ color: '#f0f4ff' }}>Win.</span>
                </h2>
                <p className="section-subtitle">
                    Consistent problem solving across global competitive programming platforms.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: 20,
                    marginBottom: 48,
                }}>
                    {platforms.map((p, i) => (
                        <a
                            key={i}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="glass-card" style={{
                                padding: '28px',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                                transition: `all 0.6s ease ${i * 0.1}s`,
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                            }}>
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                                    background: `linear-gradient(90deg, ${p.color}, ${p.color2})`,
                                }} />

                                <div style={{ marginBottom: 16 }}>
                                    <span style={{ fontSize: 36 }}>{p.icon}</span>
                                </div>

                                <div style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    fontSize: 16, fontWeight: 800,
                                    color: '#f0f4ff', marginBottom: 4,
                                }}>
                                    {p.name}
                                </div>

                                <div style={{
                                    fontSize: 14, fontWeight: 700,
                                    color: p.color, marginBottom: 6,
                                }}>
                                    {p.rating}
                                </div>

                                <div style={{
                                    fontSize: 11, color: 'rgba(240,244,255,0.5)',
                                    marginBottom: 20, lineHeight: 1.5,
                                }}>
                                    {p.detail}<br />
                                    <span style={{ color: 'rgba(240,244,255,0.3)' }}>{p.sub}</span>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: 8,
                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                    paddingTop: 16,
                                }}>
                                    {[p.stat1, p.stat2, p.stat3].map((s, j) => (
                                        <div key={j} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: 12, fontWeight: 700, color: p.color, marginBottom: 2 }}>
                                                {s.value}
                                            </div>
                                            <div style={{ fontSize: 10, color: 'rgba(240,244,255,0.35)' }}>{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Activity Heatmap */}
                <div className="glass-card" style={{
                    padding: '32px',
                    opacity: inView ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.5s',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: 14, fontWeight: 700, color: '#00d4ff',
                            letterSpacing: '0.1em',
                        }}>
                            Problem-Solving Activity
                        </h3>
                        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                            <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)' }}>Less</span>
                            {['rgba(255,255,255,0.05)', '#00d4ff30', '#00d4ff60', '#00d4ff90', '#00d4ff'].map((c, i) => (
                                <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: c }} />
                            ))}
                            <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)' }}>More</span>
                        </div>
                    </div>
                    <Heatmap />
                </div>
            </div>
        </section>
    );
}
