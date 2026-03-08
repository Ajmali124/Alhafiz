'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/* Inline SVG logo – teal medical cross + crescent */
function LogoSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="url(#logo-grad)" />
      <path d="M22 10v24M10 22h24" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M31 13a11 11 0 0 1 0 18" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="44" y2="44">
          <stop stopColor="#0d9488" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  };

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#doctors', label: 'Doctors' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="nav-logo" aria-label="AlHafiz Surgical Hospital">
            <LogoSVG className="nav-logo-svg" />
          </Link>

          <div className="nav-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={activeSection === l.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+923316042352" className="btn btn-primary nav-cta">
              <i className="ph ph-phone-call" /> Call Now
            </a>
          </div>

          <button
            className={`hamburger${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-nav${mobileOpen ? ' active' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={activeSection === l.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, l.href)}
          >
            <i className={`ph ph-${
              l.label === 'About' ? 'hospital' :
              l.label === 'Services' ? 'heartbeat' :
              l.label === 'Doctors' ? 'stethoscope' :
              l.label === 'Reviews' ? 'star' : 'map-pin'
            }`} />
            {l.label}
          </a>
        ))}
        <a href="tel:+923316042352" className="mobile-cta" onClick={() => setMobileOpen(false)}>
          <i className="ph ph-phone-call" /> Call Now
        </a>
      </div>
    </>
  );
}
