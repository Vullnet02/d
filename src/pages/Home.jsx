import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSherbimet } from '../context/ServicesContext'
import './Home.css'

const slides = [
  {
    id: 1,
    bg: 'https://t3.ftcdn.net/jpg/04/95/81/22/360_F_495812218_Tmvs0YKFZACeNKrThvz8c13PNqc3ZjGx.jpg',
    titulli: 'Mirë se Vini në Klinikën Dentare Dr. Shkodrani',
    pershkrimi: 'Kujdesi më i mirë dentar për çdo anëtar të familjes suaj',
    btn: 'Cakto një Termin',
    btnLink: '/kontakt',
  },
  {
    id: 2,
    bg: 'https://img.magnific.com/free-vector/bio-tech-dental-care-medical-background-with-text-space_1017-57770.jpg?semt=ais_hybrid&w=740&q=80',
    titulli: 'Teknologji Moderne & Pajisje të Avancuara',
    pershkrimi: 'Trajtim i saktë dhe pa dhimbje me teknologjinë më të re dentare',
    btn: 'Shiko Shërbimet',
    btnLink: '/sherbimet',
  },
]
// new update
function Home() {
  const [aktiv, setAktiv] = useState(0)
  const { sherbimet } = useSherbimet()
  const sherbimetFeatured = sherbimet.slice(0, 2)

  useEffect(() => {
    const timer = setInterval(() => {
      setAktiv((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="page home">
      {/* SLIDER */}
      <section className="slider">
        <div className="slider-track" style={{ transform: `translateX(-${aktiv * 100}%)` }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="slide-content">
                <h1>{slide.titulli}</h1>
                <p>{slide.pershkrimi}</p>
                <Link to={slide.btnLink} className="btn-primary">
                  {slide.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn slider-btn--prev"
          onClick={() => setAktiv((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Slide i mëparshëm"
        >
          ‹
        </button>
        <button
          className="slider-btn slider-btn--next"
          onClick={() => setAktiv((prev) => (prev + 1) % slides.length)}
          aria-label="Slide i ardhshëm"
        >
          ›
        </button>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === aktiv ? ' slider-dot--aktiv' : ''}`}
              onClick={() => setAktiv(i)}
              aria-label={`Shko te slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Pse të na zgjidhni?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Përvojë Shumëvjeçare</h3>
            <p>
              Stafi ynë ka vite përvojë në fushën e stomatologjisë, duke
              ofruar trajtime të sigurta dhe efektive.
            </p>
          </div>
          <div className="feature-card">
            <h3>Pajisje Moderne</h3>
            <p>
              Përdorim teknologji dhe pajisje bashkëkohore për diagnostikim
              dhe trajtim sa më të saktë.
            </p>
          </div>
          <div className="feature-card">
            <h3>Kujdes i Personalizuar</h3>
            <p>
              Çdo pacient trajtohet me kujdes individual, duke u përshtatur
              nevojave dhe kërkesave specifike.
            </p>
          </div>
          <div className="feature-card">
            <h3>Çmime të Përballueshme</h3>
            <p>
              Ofrojmë shërbime cilësore me çmime konkurruese dhe plane
              fleksibël pagese.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      {sherbimetFeatured.length > 0 && (
        <section className="featured-services">
          <h2>Shërbime të Zgjedhura</h2>
          <p className="featured-subtitle">
            Zbuloni disa nga shërbimet tona më të kërkuara
          </p>
          <div className="featured-grid">
            {sherbimetFeatured.map((s) => (
              <div className="featured-card" key={s.id}>
                {s.foto && (
                  <div className="featured-card-foto">
                    <img src={s.foto} alt={s.titulli} />
                  </div>
                )}
                <div className="featured-card-body">
                  <h3>{s.titulli}</h3>
                  <p>{s.pershkrimi}</p>
                  <div className="featured-card-footer">
                    <span className="featured-cmimi">{s.cmimi}</span>
                    <Link to="/kontakt" className="btn-rezervo">
                      Rezervo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="featured-more">
            <Link to="/sherbimet" className="btn-secondary">
              Shiko të Gjitha Shërbimet →
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta">
        <h2>Gati për një Buzëqeshje më të Shëndetshme?</h2>
        <p>Na kontaktoni sot dhe rezervoni vizitën tuaj të parë.</p>
        <Link to="/kontakt" className="btn-secondary">
          Na Kontaktoni
        </Link>
      </section>
    </div>
  )
}

export default Home
