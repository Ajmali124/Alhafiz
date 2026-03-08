'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const statsRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const targets = [13, 5, 10000, 24];
  const suffixes = ['+', '+', 'K+', '/7'];
  const labels = ['Years', 'Doctors', 'Patients', 'Open'];
  const display = (val, i) => {
    if (i === 2) return `${Math.floor(val / 1000)}`;
    if (i === 3) return `${Math.floor(val)}`;
    return `${Math.floor(val)}`;
  };

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounters(targets.map((t) => Math.min(t, Math.round(t * progress))));
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="hero" id="hero">
      {/* Background image — NO overlay, just subtle gradient at bottom */}
      <div className="hero-bg">
        <Image src="/hero-bg.png" alt="" fill style={{ objectFit: 'cover' }} priority />
      </div>
      <div className="hero-scrim" />

      {/* Decorative orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container">
        {/* ---- Content — minimal text ---- */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse" />
            24/7 Emergency Care
          </div>

          <h1>
            <span className="line">Your Health,</span>
            <span className="line highlight">Our Priority.</span>
          </h1>

          <p className="hero-subtitle">
            Trusted surgical &amp; specialist care in Lahore.
          </p>

          <div className="hero-buttons">
            <a href="tel:+923316042352" className="btn btn-primary">
              <i className="ph ph-phone-call" /> Book Now
            </a>
            <a href="#services" className="btn btn-glass">
              Explore Services
            </a>
          </div>
        </div>

        {/* ---- Stats strip ---- */}
        <div className="hero-stats-strip" ref={statsRef}>
          {targets.map((t, i) => (
            <div className="hero-stat" key={i}>
              <span className="hero-stat-num">
                {display(counters[i], i)}<span className="hero-stat-suffix">{suffixes[i]}</span>
              </span>
              <span className="hero-stat-label">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating rating */}
      <div className="hero-rating-badge">
        <span className="rating-score">4.4</span>
        <div className="rating-stars">★★★★☆</div>
        <span className="rating-text">Google</span>
      </div>
    </section>
  );
}
