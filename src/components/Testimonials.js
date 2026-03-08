'use client';

import { useEffect, useState } from 'react';

const slides = [
  [
    { initials: 'AY', name: 'Arshad Yousaf', stars: 5, text: '"Humble and qualified doctors with a very cooperative staff. The environment is clean and hygienic. Highly recommended for surgical procedures."' },
    { initials: 'AG', name: 'Areeba Ghulam', stars: 5, text: '"Caring management and exceptional support from the nursing staff. Dr. Sidra was very professional and attentive. Best hospital experience!"' },
    { initials: 'SR', name: 'Sufwan Rafiq', stars: 5, text: '"Very professional environment with state-of-the-art equipment. The doctors are highly qualified and explained everything thoroughly before the procedure."' },
  ],
  [
    { initials: 'NG', name: 'Noraze Ghafoor', stars: 5, text: '"The hospital staff is very cooperative and caring. Everything was handled professionally from admission to discharge. Excellent service!"' },
    { initials: 'HA', name: 'Hadiqa Ahtisham', stars: 5, text: '"Amazing experience at AlHafiz Hospital. The gynecology department is wonderful. Dr. Anila Imran is a very caring and skilled doctor."' },
    { initials: 'FG', name: 'Fareeha Ghafoor', stars: 5, text: '"One of the best surgical hospitals in the area. Clean environment, friendly staff, and excellent medical care. Will definitely recommend to everyone."' },
  ],
  [
    { initials: 'MK', name: 'Mishi Kanwal', stars: 5, text: '"Outstanding hospital with great facilities. The surgical team is experienced and very supportive. I felt safe throughout my treatment."' },
    { initials: 'ZY', name: 'Zubair Yasin', stars: 4, text: '"Good hospital with qualified doctors. The staff was helpful and the procedures were handled efficiently. Value for money healthcare services."' },
    { initials: 'NA', name: 'Naveed Ahmed', stars: 5, text: '"Highly professional doctors and supportive staff. The hospital is clean and well-maintained. Dr. Hafiz Imran is an excellent surgeon."' },
  ],
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (i) => setCurrent(((i % slides.length) + slides.length) % slides.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="badge"><i className="ph ph-star" /> Patient Reviews</span>
          <h2>What Our Patients Say</h2>
          <p>Real feedback from real patients on Google Maps.</p>
        </div>

        <div className="rating-overview animate-on-scroll">
          <span className="rating-big">4.4</span>
          <div className="rating-details">
            <div className="rating-stars">★★★★☆</div>
            <p className="review-count">Based on 44 Google Reviews</p>
          </div>
        </div>

        <div className="testimonials-slider animate-on-scroll">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, si) => (
              <div className="testimonial-card" key={si}>
                {slide.map((r, ri) => (
                  <div className="review-card" key={ri}>
                    <div className="review-header">
                      <div className="reviewer-avatar">{r.initials}</div>
                      <div>
                        <div className="reviewer-name">{r.name}</div>
                        <div className="reviewer-date">Recent</div>
                      </div>
                    </div>
                    <div className="review-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                    <p className="review-text">{r.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={prev} aria-label="Previous">
              <i className="ph ph-caret-left" />
            </button>
            <div className="slider-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${i === current ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={next} aria-label="Next">
              <i className="ph ph-caret-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
