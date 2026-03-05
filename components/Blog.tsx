'use client';
import { useInView } from 'react-intersection-observer';

const posts = [
    {
        title: 'Building AI for Dark Web Monitoring: Grapnel 2.0',
        excerpt: 'How we built an AI-powered OSINT system to help Kerala Police detect narcotics trafficking and cybercrime on the dark web. A technical deep-dive into Tor crawling, NLP classification, and graph analysis.',
        date: 'Jan 2025',
        readTime: '12 min read',
        tags: ['OSINT', 'AI', 'Cybersecurity', 'NLP'],
        icon: '🕵️',
        color: '#9d4edd',
        featured: true,
    },
    {
        title: 'Winning a ₹5L Cybersecurity Hackathon: Lessons Learned',
        excerpt: 'The full story of how our team built and presented Grapnel 2.0 at HacKP 2025. From idea to winning pitch — what worked, what didn\'t, and what judges at police hackathons actually care about.',
        date: 'Feb 2025',
        readTime: '8 min read',
        tags: ['Hackathon', 'Strategy', 'Startup'],
        icon: '🏆',
        color: '#00d4ff',
        featured: true,
    },
    {
        title: 'Agentic AI for Disease Prediction: M-Pulse Architecture',
        excerpt: 'Building autonomous AI agents that monitor climate data, health records, and satellite imagery to predict disease outbreaks before they happen. Technical walkthrough of our LangChain agentic pipeline.',
        date: 'Mar 2025',
        readTime: '10 min read',
        tags: ['Agentic AI', 'Healthcare', 'LangChain'],
        icon: '🧬',
        color: '#00f5d4',
        featured: false,
    },
    {
        title: 'AI for Public Safety: Building Ethical AI Systems',
        excerpt: 'Reflections on building AI systems for law enforcement. How do we balance effectiveness with civil liberties? A framework for ethical AI development in high-stakes public safety applications.',
        date: 'Mar 2025',
        readTime: '6 min read',
        tags: ['Ethics', 'AI Safety', 'Public Policy'],
        icon: '🛡️',
        color: '#f72585',
        featured: false,
    },
];

export default function Blog() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="blog" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', top: 0, right: 0, width: 400, height: 600,
                background: 'radial-gradient(circle, rgba(0,245,212,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#00f5d4', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Research & Writing
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Technical </span>
                    <span className="text-gradient-blue">Articles</span>
                </h2>
                <p className="section-subtitle">
                    Deep dives into AI engineering, cybersecurity research, and hackathon experiences.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                    {posts.map((post, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                                transition: `all 0.6s ease ${i * 0.1}s`,
                                cursor: 'pointer',
                                gridColumn: post.featured && i === 0 ? 'span 2' : 'span 1',
                            }}
                        >
                            {/* Top bar */}
                            <div style={{ height: 3, background: `linear-gradient(90deg, ${post.color}, transparent)` }} />

                            <div style={{ padding: '28px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                                    <div style={{
                                        width: 52, height: 52, borderRadius: 14,
                                        background: `${post.color}15`, border: `1px solid ${post.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: 26, flexShrink: 0,
                                    }}>
                                        {post.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        {post.featured && (
                                            <span style={{
                                                display: 'inline-block', padding: '2px 10px',
                                                background: `${post.color}15`, border: `1px solid ${post.color}30`,
                                                borderRadius: 20, fontSize: 10, color: post.color, fontWeight: 700,
                                                marginBottom: 6,
                                            }}>
                                                FEATURED
                                            </span>
                                        )}
                                        <h3 style={{
                                            fontFamily: 'Space Grotesk, sans-serif',
                                            fontSize: post.featured && i === 0 ? 18 : 15,
                                            fontWeight: 700, color: '#f0f4ff', lineHeight: 1.4,
                                        }}>
                                            {post.title}
                                        </h3>
                                    </div>
                                </div>

                                <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>
                                    {post.excerpt}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                                    {post.tags.map(tag => (
                                        <span key={tag} style={{
                                            padding: '3px 10px',
                                            background: `${post.color}10`,
                                            border: `1px solid ${post.color}20`,
                                            borderRadius: 20, fontSize: 11, color: post.color, fontWeight: 500,
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14 }}>
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)' }}>{post.date}</span>
                                        <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)' }}>•</span>
                                        <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)' }}>{post.readTime}</span>
                                    </div>
                                    <span style={{ fontSize: 12, color: post.color, fontWeight: 600, cursor: 'pointer' }}>
                                        Read →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
