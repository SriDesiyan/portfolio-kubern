'use client';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const socials = [
    { icon: <Github size={20} />, label: 'GitHub', handle: '@sridesiyan', href: 'https://github.com/sridesiyan', color: '#f0f4ff' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', handle: 'Sri Desiyan V', href: 'https://linkedin.com/in/sridesiyan', color: '#0a66c2' },
    { icon: <ExternalLink size={20} />, label: 'LeetCode', handle: 'Top 5.36%', href: 'https://leetcode.com/sridesiyan', color: '#f5a623' },
];

// Minimal chat bot
function AIChatBot() {
    const [messages, setMessages] = useState([
        { from: 'bot', text: "Hi! I'm Desiyan's AI assistant. Ask me about his projects, skills, or achievements!" },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    const responses: Record<string, string> = {
        hackathon: "Sri Desiyan won the HacKP 2025 hackathon organized by Kerala Police Cyberdome, winning ₹5,00,000! He's also a finalist at 6+ national and international hackathons including Israel-India Global Innovators and ISRO's Bharatiya Antariksh Hackathon.",
        project: "His flagship project is Grapnel 2.0 — an AI-powered dark web monitoring platform for law enforcement. He also built M-Pulse (disease outbreak prediction), AgriAssist (smart farming), and a Secure Police Messaging App.",
        skill: "Sri Desiyan is expert in Python, PyTorch, Computer Vision, NLP, and Agentic AI. He has full-stack skills with React, Next.js, Node.js, FastAPI, MongoDB, and PostgreSQL.",
        contact: "You can reach Sri Desiyan at desiyan2005@gmail.com or +91 7010337409. He's based in Chennai, India.",
        leetcode: "Sri Desiyan has solved 520+ problems on LeetCode, ranking in the Top 5.36% globally!",
        experience: "He interned at Kerala Police Cyberdome (Grapnel 2.0), MMRD R&D (AI research assistant), and Internzo (full-stack developer). Currently studying at Chennai Institute of Technology.",
        default: "That's a great question about Sri Desiyan! He's passionate about building AI for public safety and cybersecurity. Want to know about his projects, hackathon wins, or technical skills?",
    };

    const send = () => {
        if (!input.trim()) return;
        const userMsg = input.toLowerCase();
        setMessages(m => [...m, { from: 'user', text: input }]);
        setInput('');
        setTyping(true);

        setTimeout(() => {
            const key = Object.keys(responses).find(k => userMsg.includes(k)) || 'default';
            setMessages(m => [...m, { from: 'bot', text: responses[key] }]);
            setTyping(false);
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
        }, 800);
    };

    return (
        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', height: 400, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(0,212,255,0.04)',
            }}>
                <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14,
                }}>🤖</div>
                <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#f0f4ff', fontFamily: 'Orbitron, sans-serif' }}>AI Assistant</div>
                    <div style={{ fontSize: 10, color: '#00d4ff' }}>● Online</div>
                </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{
                            maxWidth: '80%',
                            padding: '10px 14px',
                            borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                            background: msg.from === 'user'
                                ? 'linear-gradient(135deg, #00d4ff, #9d4edd)'
                                : 'rgba(255,255,255,0.06)',
                            border: msg.from === 'bot' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                            fontSize: 13,
                            color: '#f0f4ff',
                            lineHeight: 1.5,
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {typing && (
                    <div style={{ display: 'flex', gap: 4, padding: '10px 14px', width: 'fit-content' }}>
                        {[0, 1, 2].map(i => (
                            <div key={i} style={{
                                width: 7, height: 7, borderRadius: '50%', background: '#00d4ff',
                                animation: `float 1.2s ease ${i * 0.2}s infinite`,
                            }} />
                        ))}
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', gap: 10,
            }}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                    placeholder="Ask about projects, skills, hackathons..."
                    style={{
                        flex: 1, background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 20, padding: '10px 16px',
                        color: '#f0f4ff', fontSize: 13, outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                    }}
                />
                <button
                    onClick={send}
                    style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                        border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <Send size={15} color="white" />
                </button>
            </div>
        </div>
    );
}

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }} ref={ref}>
            <div style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: 800, height: 400,
                background: 'radial-gradient(ellipse, rgba(157,78,221,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
                        color: '#9d4edd', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif',
                    }}>
                        Get In Touch
                    </span>
                </div>
                <h2 className="section-title">
                    <span style={{ color: '#f0f4ff' }}>Let&apos;s </span>
                    <span className="text-gradient-blue">Build Together</span>
                </h2>
                <p className="section-subtitle">
                    Open to AI research collaborations, hackathon partnerships, and full-time opportunities at
                    cutting-edge AI and cybersecurity companies.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 32,
                    alignItems: 'start',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'all 0.8s ease',
                }}>
                    {/* Left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {/* Contact info */}
                        {[
                            { icon: <Mail size={18} />, label: 'Email', value: 'desiyan2005@gmail.com', href: 'mailto:desiyan2005@gmail.com', color: '#00d4ff' },
                            { icon: <Phone size={18} />, label: 'Phone', value: '+91 7010337409', href: 'tel:+917010337409', color: '#9d4edd' },
                            { icon: <MapPin size={18} />, label: 'Location', value: 'Chennai, India', href: '#', color: '#00f5d4' },
                        ].map((item, i) => (
                            <a key={i} href={item.href} style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <div style={{
                                        width: 44, height: 44, borderRadius: 12,
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: item.color, flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</div>
                                        <div style={{ fontSize: 14, color: '#f0f4ff', fontWeight: 600 }}>{item.value}</div>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Social links */}
                        <div className="glass-card" style={{ padding: '24px' }}>
                            <div style={{ fontSize: 12, color: 'rgba(240,244,255,0.4)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Social Profiles</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {socials.map((s, i) => (
                                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'flex', alignItems: 'center', gap: 12,
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        borderRadius: 12,
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        color: 'rgba(240,244,255,0.7)',
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(0,212,255,0.06)';
                                            e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)';
                                            e.currentTarget.style.color = '#00d4ff';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                            e.currentTarget.style.color = 'rgba(240,244,255,0.7)';
                                        }}
                                    >
                                        <span>{s.icon}</span>
                                        <div>
                                            <div style={{ fontSize: 13, fontWeight: 600 }}>{s.label}</div>
                                            <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)' }}>{s.handle}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* AI Chatbot */}
                        <AIChatBot />
                    </div>

                    {/* Right - Contact form */}
                    <div className="glass-card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                            background: 'linear-gradient(90deg, #00d4ff, #9d4edd)',
                        }} />

                        <h3 style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: 16, fontWeight: 700,
                            color: '#f0f4ff', marginBottom: 28,
                        }}>
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {[
                                { key: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                                { key: 'email', label: 'Email Address', placeholder: 'you@company.com', type: 'email' },
                            ].map(field => (
                                <div key={field.key}>
                                    <label style={{ display: 'block', fontSize: 12, color: 'rgba(240,244,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        value={(formState as Record<string, string>)[field.key]}
                                        onChange={e => setFormState(s => ({ ...s, [field.key]: e.target.value }))}
                                        placeholder={field.placeholder}
                                        required
                                        style={{
                                            width: '100%',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 12,
                                            padding: '14px 16px',
                                            color: '#f0f4ff',
                                            fontSize: 14,
                                            outline: 'none',
                                            fontFamily: 'Inter, sans-serif',
                                            transition: 'border-color 0.2s ease',
                                        }}
                                        onFocus={e => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                                    />
                                </div>
                            ))}

                            <div>
                                <label style={{ display: 'block', fontSize: 12, color: 'rgba(240,244,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Message
                                </label>
                                <textarea
                                    value={formState.message}
                                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                                    placeholder="I'd love to discuss a collaboration opportunity..."
                                    required
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 12,
                                        padding: '14px 16px',
                                        color: '#f0f4ff',
                                        fontSize: 14,
                                        outline: 'none',
                                        fontFamily: 'Inter, sans-serif',
                                        resize: 'vertical',
                                        transition: 'border-color 0.2s ease',
                                    }}
                                    onFocus={e => (e.target.style.borderColor = 'rgba(0,212,255,0.4)')}
                                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                                />
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {sent ? '✅ Message Sent!' : <><Send size={16} /> Send Message</>}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}
