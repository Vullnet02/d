import { Link } from 'react-router-dom'
import { useSherbimet } from '../context/ServicesContext'
import './Services.css'

function Services() {
  const { sherbimet } = useSherbimet()

  return (
    <div className="page services">
      <section className="services-header">
        <h1>Shërbimet Tona</h1>
        <p>
          Ofrojmë një gamë të gjerë shërbimesh dentare për të përmbushur
          nevojat e çdo pacienti, nga kontrollet rutinore deri te trajtimet
          më komplekse.
        </p>
      </section>

      {sherbimet.length === 0 ? (
        <div className="services-empty">
          <p>Shërbimet janë duke u ngarkuar ose nuk janë shtuar ende.</p>
        </div>
      ) : (
        <section className="services-grid">
          {sherbimet.map((s) => (
            <div className="service-card" key={s.id}>
              <div className="service-card-foto">
                {s.foto ? (
                  <img
                    src={s.foto}
                    alt={s.titulli}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="service-card-foto-placeholder"
                  style={{ display: s.foto ? 'none' : 'flex' }}
                >
                  🦷
                </div>
              </div>
              <div className="service-card-body">
                <h3>{s.titulli}</h3>
                <p>{s.pershkrimi}</p>
              </div>
              <div className="service-card-footer">
                <span className="service-cmimi">{s.cmimi}</span>
                <Link to="/kontakt" className="btn-rezervo-sherbim">
                  Rezervo këtë Shërbim →
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export default Services
