'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '0 32px',
            transition: 'all 0.4s ease',
            background: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(24px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}>
            <div style={{
                maxWidth: 1200,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 72,
            }}>
                {/* Logo */}
                <a href="#" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 14,
                            fontWeight: 800,
                            color: 'white',
                            fontFamily: 'Orbitron, sans-serif',
                            boxShadow: '0 0 16px rgba(0,212,255,0.4)',
                        }}>
                            SD
                        </div>
                        <span style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: 16,
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #00d4ff, #9d4edd)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Sri Desiyan
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="animated-underline" style={{
                            padding: '8px 16px',
                            color: 'rgba(240,244,255,0.7)',
                            textDecoration: 'none',
                            fontSize: 14,
                            fontWeight: 500,
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.7)')}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="https://github.com/sridesiyan" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13, marginLeft: 8 }}>
                        GitHub
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'none',
                        padding: 8,
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{
                    background: 'rgba(3,7,18,0.97)',
                    backdropFilter: 'blur(24px)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    padding: '16px 32px 24px',
                }}>
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                display: 'block',
                                padding: '12px 0',
                                color: 'rgba(240,244,255,0.7)',
                                textDecoration: 'none',
                                fontSize: 16,
                                fontWeight: 500,
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
