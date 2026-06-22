import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

const teamMembers = [
  {
    name: 'Dr. Arben Shkodrani',
    role: 'Lead Dentist & Founder',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
  },
  {
    name: 'Dr. Lira Berisha',
    role: 'Orthodontist',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    name: 'Dr. Kujtim Hoxha',
    role: 'Oral Surgeon',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
]

function About() {
  return (
    <div className="page about">

      {/* HERO BANNER */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">Who We Are</p>
          <h1>Your Smile Is Our Mission</h1>
          <p className="about-hero-sub">
            Over a decade of trusted dental care in the heart of Mitrovica.
          </p>
        </div>
      </section>

      {/* INTRO — photo left, text right */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80"
              alt="Clinic interior"
            />
          </div>
          <div className="about-intro-text">
            <span className="about-section-tag">About Us</span>
            <h2>Dr. Shkodrani Dental Clinic</h2>
            <p>
              Founded in 2012, Dr. Shkodrani Dental Clinic has been dedicated to
              delivering exceptional oral health care to patients of all ages. Our
              clinic combines modern technology with a warm, patient-centred
              approach so that every visit feels comfortable and stress-free.
            </p>
            <p>
              Located in <strong>Blloku 5, Zahir Pajaziti, Mitrovicë</strong>, we
              offer a full range of dental services — from routine check-ups and
              teeth whitening to orthodontics and oral surgery — all under one
              roof.
            </p>
            <p>
              We believe that great dental health is the foundation of overall
              well-being, and we are committed to helping every patient achieve
              a healthy, confident smile.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Years of Experience</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">5 000+</span>
                <span className="about-stat-label">Happy Patients</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                <span className="about-stat-label">Services Offered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-inner">
          <span className="about-section-tag">Our Values</span>
          <h2>Why Patients Choose Us</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">🦷</div>
              <h3>Advanced Technology</h3>
              <p>We invest in the latest dental equipment to ensure precise, pain-free treatments.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">❤️</div>
              <h3>Patient-First Care</h3>
              <p>Your comfort and well-being are our top priority at every stage of treatment.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🏆</div>
              <h3>Expert Team</h3>
              <p>Our specialists bring years of clinical experience and continuous training.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🔬</div>
              <h3>Sterilised & Safe</h3>
              <p>We follow strict hygiene protocols to keep every patient safe and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-team-inner">
          <span className="about-section-tag">Our Team</span>
          <h2>Meet the Specialists</h2>
          <div className="about-team-grid">
            {teamMembers.map((m) => (
              <div className="about-team-card" key={m.name}>
                <img src={m.img} alt={m.name} />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
