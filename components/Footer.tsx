'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '48px 0 32px',
            position: 'relative',
            zIndex: 1,
        }}>
            <div className="section-container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 24,
                    marginBottom: 32,
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: 18, fontWeight: 800,
                            background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: 6,
                        }}>
                            Sri Desiyan V
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.4)', maxWidth: 300, lineHeight: 1.5 }}>
                            AI Engineer & Cybersecurity Researcher building intelligent systems for public good.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: 16 }}>
                        <a href="https://github.com/sridesiyan" target="_blank" rel="noopener noreferrer"
                            style={{
                                width: 44, height: 44, borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'rgba(240,244,255,0.6)',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,212,255,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                                e.currentTarget.style.color = '#00d4ff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = 'rgba(240,244,255,0.6)';
                            }}
                        >
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/sridesiyan" target="_blank" rel="noopener noreferrer"
                            style={{
                                width: 44, height: 44, borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'rgba(240,244,255,0.6)',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,212,255,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                                e.currentTarget.style.color = '#00d4ff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = 'rgba(240,244,255,0.6)';
                            }}
                        >
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:desiyan2005@gmail.com"
                            style={{
                                width: 44, height: 44, borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'rgba(240,244,255,0.6)',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,212,255,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                                e.currentTarget.style.color = '#00d4ff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = 'rgba(240,244,255,0.6)';
                            }}
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

                {/* Bottom */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.3)' }}>
                        © {year} Sri Desiyan V. Built with Next.js and passion for AI.
                    </p>
                    <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        Chennai Institute of Technology
                        <span style={{ color: '#9d4edd', marginLeft: 4 }}>🎓</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
