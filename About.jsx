import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

const teamMembers = [
  {
    name: 'Dr. Arben Shkodrani',
    role: 'Dentist Kryesor & Themeluesi',
    img: 'https://tetova1.mk/wp-content/uploads/2025/06/IMG_8612-300x210.jpeg',
  },
  {
    name: 'Dr. Lira Berisha',
    role: 'Ortodontiste',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Bsg38VnskHHYZk-kmDvSb7_Rtj-WV91WKKJrUQ_gA&s=10',
  },
  {
    name: 'Dr. Kujtim Hoxha',
    role: 'Kirurg i Gojës',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcJAPFVbbLPngrgkecSe0-91oe014GN9aL6YPI49wtQ&s=10',
  },
]

function About() {
  return (
    <div className="page about">

      {/* HERO BANNER */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">Kush Jemi Ne</p>
          <h1>Misioni ynë është buzëqeshja juaj</h1>
          <p className="about-hero-sub">
             Më shumë se një dekadë i kujdesit dental të besueshëm në zemrën e Mitrovicës.
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
            <span className="about-section-tag">Rreth Nesh</span>
            <h2>Dr. Shkodrani Dental Clinic</h2>
            <p>
               Themeluar në 2012, Klinika Dentare e Dr. Shkodranit ka qenë e dedikuar për të dhënë kujdes oral të jashtëzakonshëm për pacientë të të gjitha moshave. Klinika jonë kombinon teknologjinë moderne me një qasje të ngrohtë, të përqendruar në pacient, në mënyrë që çdo vizitë të ndihet e rehatshme dhe pa stres.
            </p>
            <p>
               E vendosur në <strong>Bllokun 5, Zahir Pajaziti, Mitrovicë</strong>, ne ofrojmë një sërë të plotë të shërbimeve dentare - nga kontrollet rutinë dhe zbardhja e dhëmbëve deri në ortodoncia dhe kirurgjinë orale - të gjitha nën një çati.
            </p>
            <p>
               Kami besojmë se shëndeti i mirë i dhëmbëve është themeli i mirëqenies së përgjithshme, dhe jemi të përkushtuar në ndihmimin e çdo pacienti për të arritur një buzë të shëndetshme dhe të sigurt.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                 <span className="about-stat-label">Vjet Përvojë</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">5 000+</span>
                 <span className="about-stat-label">Pacientë të Lumtur</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                 <span className="about-stat-label">Shërbime të Ofruara</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-inner">
           <span className="about-section-tag">Vlerat Tona</span>
           <h2>Pse Pacientët Zgjedhin Ne</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">🦷</div>
               <h3>Teknologji e Avancuar</h3>
               <p>Investojmë në pajisjet më të fundit dentare për të siguruar trajtime të preciza, pa dhimbje.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">❤️</div>
               <h3>Kujdesi i Parë për Pacientët</h3>
               <p>Komoditeti juaj dhe mirëqenia juaj janë prioriteti ynë më i lartë në çdo fazë të trajtimit.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🏆</div>
               <h3>Ekip Eksperti</h3>
               <p>Specialistët tanë sjellë vite përvojë klinike dhe trajnim të vazhdueshëm.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🔬</div>
               <h3>Steril & I Sigurt</h3>
               <p>Ne ndjekim protokolle strikte të higjenës për të mbajtur çdo pacient të sigurt dhe të mbrojtur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-team-inner">
           <span className="about-section-tag">Ekipi Ynë</span>
           <h2>Takohu me Specialistët</h2>
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
