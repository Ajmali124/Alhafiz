import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ScrollAnimator from '@/components/ScrollAnimator';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <Hero />

      {/* ========== ABOUT ========== */}
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate-on-scroll">
              <Image src="/hero-bg.png" alt="AlHafiz Surgical Hospital" width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
              <div className="experience-badge">
                <span className="number">13+</span>
                <span className="text">Years of trusted care</span>
              </div>
            </div>
            <div className="about-content animate-on-scroll">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: 20 }}>
                <span className="badge"><i className="ph ph-hospital" /> About Us</span>
                <h2>A Legacy of Healing &amp; Compassion</h2>
              </div>
              <p>
                Located opposite Lahore General Hospital on Ghazi Road, AlHafiz Surgical
                Hospital has been a trusted name in healthcare for over a decade. We combine
                experienced specialists, modern diagnostic equipment, and a caring staff to
                deliver the highest standard of patient care — 24 hours a day, 7 days a week.
              </p>
              <p>
                Our PMDC-verified medical team is dedicated to providing personalized,
                evidence-based treatment across multiple specialties, ensuring every patient
                feels valued and supported throughout their healing journey.
              </p>
              <div className="about-features">
                {[
                  { icon: 'clock', label: '24/7 Emergency' },
                  { icon: 'shield-check', label: 'PMDC Verified' },
                  { icon: 'wheelchair', label: 'Wheelchair Access' },
                  { icon: 'first-aid-kit', label: 'Modern Equipment' },
                ].map((f) => (
                  <div className="about-feature" key={f.label}>
                    <span className="icon"><i className={`ph ph-${f.icon}`} /></span>
                    {f.label}
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn btn-primary">
                <i className="ph ph-map-pin" /> Visit Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="badge"><i className="ph ph-heartbeat" /> Our Services</span>
            <h2>Comprehensive Medical Care</h2>
            <p>Expert departments covering every aspect of your healthcare needs.</p>
          </div>
          <div className="services-grid">
            {[
              { img: '/service-surgery.png', icon: 'scissors', title: 'General Surgery', desc: 'Hernia repair, appendectomy & advanced surgical interventions by FCPS-qualified surgeons.' },
              { img: '/service-gynecology.png', icon: 'baby', title: 'Gynaecology & Obstetrics', desc: 'Prenatal care, safe deliveries & women\'s health services by certified specialists.' },
              { img: '/service-urology.png', icon: 'drop', title: 'Urology', desc: 'Diagnosis & treatment of urinary tract and kidney conditions with modern techniques.' },
              { img: '/service-psychology.png', icon: 'brain', title: 'Clinical Psychology', desc: 'Professional counselling, CBT & psychological assessments for all ages.' },
              { img: '/service-emergency.png', icon: 'siren', title: '24/7 Emergency', desc: 'Round-the-clock trauma care, stabilisation & rapid response by our emergency team.' },
              { img: '/service-diagnostics.png', icon: 'scan', title: 'Diagnostics & Ultrasound', desc: 'Toshiba ultrasound systems for accurate & rapid medical imaging.' },
            ].map((s) => (
              <div className="service-card animate-on-scroll" key={s.title}>
                <div className="service-card-img">
                  <Image src={s.img} alt={s.title} width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="service-card-body">
                  <div className="service-icon"><i className={`ph ph-${s.icon}`} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DOCTORS ========== */}
      <section className="doctors section-padding" id="doctors">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="badge"><i className="ph ph-stethoscope" /> Medical Team</span>
            <h2>Meet Our Expert Doctors</h2>
            <p>PMDC-verified specialists with years of experience providing world-class healthcare.</p>
          </div>
          <div className="doctors-grid">
            {[
              { img: '/doctor-imran.png', name: 'Dr. Hafiz Muhammad Imran', specialty: 'General Surgeon', credentials: 'MBBS, FCPS (General Surgery)', exp: '13+ Years Experience' },
              { img: '/doctor-anila.png', name: 'Dr. Anila Imran', specialty: 'Gynaecologist & Obstetrician', credentials: 'MBBS, FCPS (Obs & Gynae)', exp: '10+ Years Experience' },
              { img: '/doctor-ghulam.png', name: 'Dr. Ghulam Abbas', specialty: 'Urologist', credentials: 'MBBS, MS (Urology)', exp: '8+ Years Experience' },
              { img: '/doctor-basharat.png', name: 'Dr. Basharat Nazir', specialty: 'Experienced Physician', credentials: 'MBBS', exp: 'Senior Doctor' },
              { img: '/doctor-muneeba.png', name: 'Muneeba Ramzan', specialty: 'Clinical Psychologist', credentials: 'Applied & Clinical Psychology', exp: 'Specialist' },
            ].map((d) => (
              <div className="doctor-card animate-on-scroll" key={d.name}>
                <Image className="doctor-img" src={d.img} alt={d.name} width={400} height={320} style={{ objectFit: 'cover', objectPosition: 'top', width: '100%' }} />
                <div className="doctor-info">
                  <h3>{d.name}</h3>
                  <p className="specialty">{d.specialty}</p>
                  <p className="credentials">{d.credentials}</p>
                  <span className="experience-tag"><i className="ph ph-medal" /> {d.exp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ========== CONTACT ========== */}
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="badge"><i className="ph ph-map-pin" /> Get in Touch</span>
            <h2>Visit Us or Call Today</h2>
            <p>We&apos;re here for you 24 hours a day, 7 days a week.</p>
          </div>
          <div className="contact-grid animate-on-scroll">
            <div className="contact-info-cards">
              <div className="contact-card">
                <div className="card-icon"><i className="ph ph-phone" /></div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p><a href="tel:+923316042352">+92 331 604 2352</a></p>
                  <p>Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="card-icon"><i className="ph ph-map-pin" /></div>
                <div>
                  <h4>Hospital Address</h4>
                  <p>Lahore – Kasur Rd, near Al Fazal Family Restaurant, opposite Lahore General Hospital Road, Gulshan Colony, Lahore, Pakistan</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="card-icon"><i className="ph ph-clock" /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p><strong>Emergency:</strong> 24/7 Open</p>
                  <p><strong>OPD:</strong> Mon – Sun</p>
                  <p><strong>Consultation Fee:</strong> ~Rs. 1,500</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="card-icon"><i className="ph ph-navigation-arrow" /></div>
                <div>
                  <h4>Landmark &amp; Nearby</h4>
                  <p>Opposite Lahore General Hospital, near Ghazi Chowk Metro Bus Station</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.3!2d74.3514!3d31.4573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919061a91c2f4f3%3A0x46196e43c0e5c43!2sAlHafiz%20Surgical%20Hospital!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AlHafiz Surgical Hospital on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="cta-banner">
        <div className="container animate-on-scroll">
          <h2>Need Urgent Medical Attention?</h2>
          <p>Our emergency department is open 24/7. Don&apos;t hesitate — call us or visit now.</p>
          <a href="tel:+923316042352" className="btn btn-white">
            <i className="ph ph-phone-call" /> Call +92 331 604 2352
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/logo.png" alt="AlHafiz Surgical Hospital" width={140} height={40} style={{ height: 40, width: 'auto' }} />
              <p>Providing compassionate, round-the-clock healthcare to the community of Lahore since 2011. Your health, our priority.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                {['About Us', 'Services', 'Our Doctors', 'Patient Reviews', 'Contact'].map((l) => (
                  <a href={`#${l === 'About Us' ? 'about' : l === 'Our Doctors' ? 'doctors' : l === 'Patient Reviews' ? 'testimonials' : l.toLowerCase()}`} key={l}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4>Our Services</h4>
              <div className="footer-links">
                {['General Surgery', 'Gynaecology', 'Urology', 'Psychology', 'Emergency Care', 'Diagnostics'].map((s) => (
                  <a href="#services" key={s}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4>Contact Info</h4>
              <div className="footer-contact-item">
                <span className="ico"><i className="ph ph-phone" /></span>
                <span>+92 331 604 2352</span>
              </div>
              <div className="footer-contact-item">
                <span className="ico"><i className="ph ph-map-pin" /></span>
                <span>Lahore – Kasur Rd, Gulshan Colony, Lahore</span>
              </div>
              <div className="footer-contact-item">
                <span className="ico"><i className="ph ph-clock" /></span>
                <span>Open 24 Hours — Every Day</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AlHafiz Surgical Hospital. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="ph ph-facebook-logo" /></a>
              <a href="#" aria-label="Instagram"><i className="ph ph-instagram-logo" /></a>
              <a href="#" aria-label="WhatsApp"><i className="ph ph-whatsapp-logo" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
