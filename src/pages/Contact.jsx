import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    emri: '',
    email: '',
    telefoni: '',
    mesazhi: '',
  })
  const [eDerguar, setEDerguar] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEDerguar(true)
    setFormData({ emri: '', email: '', telefoni: '', mesazhi: '' })
  }

  return (
    <div className="page contact">
      <section className="contact-header">
        <h1>Na Kontaktoni</h1>
        <p>
          Keni pyetje ose dëshironi të caktoni një termin? Plotësoni
          formularin më poshtë ose na kontaktoni drejtpërdrejt.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Informacionet e Kontaktit</h2>
          <p>
            <strong>Adresa:</strong> Rruga "Dëshmorët e Kombit", Prishtinë,
            Kosovë
          </p>
          <p>
            <strong>Telefoni:</strong> +383 44 123 456
          </p>
          <p>
            <strong>Email:</strong> info@drshkodrani.com
          </p>
          <h2>Orari i Punës</h2>
          <p>E Hënë - E Premte: 08:00 - 19:00</p>
          <p>E Shtunë: 09:00 - 14:00</p>
          <p>E Diel: Mbyllur</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Dërgo një Mesazh</h2>

          {eDerguar && (
            <p className="success-message">
              Faleminderit! Mesazhi juaj u dërgua me sukses. Do t'ju
              kontaktojmë së shpejti.
            </p>
          )}

          <label htmlFor="emri">Emri dhe Mbiemri</label>
          <input
            type="text"
            id="emri"
            name="emri"
            value={formData.emri}
            onChange={handleChange}
            placeholder="Shkruani emrin tuaj"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Shkruani email-in tuaj"
            required
          />

          <label htmlFor="telefoni">Numri i Telefonit</label>
          <input
            type="tel"
            id="telefoni"
            name="telefoni"
            value={formData.telefoni}
            onChange={handleChange}
            placeholder="Shkruani numrin tuaj të telefonit"
          />

          <label htmlFor="mesazhi">Mesazhi</label>
          <textarea
            id="mesazhi"
            name="mesazhi"
            value={formData.mesazhi}
            onChange={handleChange}
            placeholder="Si mund t'ju ndihmojmë?"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn-primary-dark">
            Dërgo Mesazhin
          </button>
        </form>
      </section>

      <section className="map-section">
        <h2>Na Gjeni</h2>
        <div className="map-placeholder">
          Harta e lokacionit të klinikës do të shfaqet këtu
        </div>
      </section>
    </div>
  )
}

export default Contact
