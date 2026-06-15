import { useState } from 'react'
import { useSherbimet } from '../context/ServicesContext'
import './AdminPanel.css'

const boshForm = { titulli: '', pershkrimi: '', foto: '', cmimi: '' }

function AdminPanel() {
  const { sherbimet, shtoSherbim, ndryshoSherbim, fshijSherbim } =
    useSherbimet()

  const [form, setForm] = useState(boshForm)
  const [editId, setEditId] = useState(null)
  const [shfaqFormin, setShfaqFormin] = useState(false)
  const [konfirmoFshirjen, setKonfirmoFshirjen] = useState(null)

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleShto() {
    setForm(boshForm)
    setEditId(null)
    setShfaqFormin(true)
  }

  function handleEdit(s) {
    setForm({
      titulli: s.titulli,
      pershkrimi: s.pershkrimi,
      foto: s.foto,
      cmimi: s.cmimi,
    })
    setEditId(s.id)
    setShfaqFormin(true)
  }

  function handleRuaj(e) {
    e.preventDefault()
    if (!form.titulli.trim() || !form.cmimi.trim()) return
    if (editId !== null) {
      ndryshoSherbim(editId, form)
    } else {
      shtoSherbim(form)
    }
    setForm(boshForm)
    setEditId(null)
    setShfaqFormin(false)
  }

  function handleAnulo() {
    setForm(boshForm)
    setEditId(null)
    setShfaqFormin(false)
  }

  function handleFshij(id) {
    fshijSherbim(id)
    setKonfirmoFshirjen(null)
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Paneli i Administratorit</h1>
          <p>Menaxho shërbimet e klinikës dentare</p>
        </div>
        <button className="btn-shto" onClick={handleShto}>
          + Shto Shërbim të Ri
        </button>
      </div>

      {shfaqFormin && (
        <div className="admin-modal-overlay" onClick={handleAnulo}>
          <div
            className="admin-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{editId !== null ? 'Ndrysho Shërbimin' : 'Shto Shërbim të Ri'}</h2>
            <form onSubmit={handleRuaj} className="admin-form">
              <div className="form-group">
                <label>Titulli *</label>
                <input
                  type="text"
                  name="titulli"
                  value={form.titulli}
                  onChange={handleInput}
                  placeholder="p.sh. Zbardhim Dentar"
                  required
                />
              </div>
              <div className="form-group">
                <label>Përshkrimi</label>
                <textarea
                  name="pershkrimi"
                  value={form.pershkrimi}
                  onChange={handleInput}
                  rows={3}
                  placeholder="Shkruaj përshkrimin e shërbimit..."
                />
              </div>
              <div className="form-group">
                <label>URL e Fotos</label>
                <input
                  type="url"
                  name="foto"
                  value={form.foto}
                  onChange={handleInput}
                  placeholder="https://..."
                />
                {form.foto && (
                  <img
                    src={form.foto}
                    alt="preview"
                    className="foto-preview"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                )}
              </div>
              <div className="form-group">
                <label>Çmimi *</label>
                <input
                  type="text"
                  name="cmimi"
                  value={form.cmimi}
                  onChange={handleInput}
                  placeholder="p.sh. 5,000 ALL"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn-anulo" onClick={handleAnulo}>
                  Anulo
                </button>
                <button type="submit" className="btn-ruaj">
                  {editId !== null ? 'Ruaj Ndryshimet' : 'Shto Shërbimin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {konfirmoFshirjen !== null && (
        <div
          className="admin-modal-overlay"
          onClick={() => setKonfirmoFshirjen(null)}
        >
          <div
            className="admin-modal admin-modal--small"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Konfirmo Fshirjen</h2>
            <p>A jeni i sigurt që doni të fshini këtë shërbim? Ky veprim nuk mund të kthehet.</p>
            <div className="form-actions">
              <button
                className="btn-anulo"
                onClick={() => setKonfirmoFshirjen(null)}
              >
                Anulo
              </button>
              <button
                className="btn-fshij-konfirmo"
                onClick={() => handleFshij(konfirmoFshirjen)}
              >
                Po, Fshije
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="admin-stats">
        <div className="stat-card">
          <span className="stat-num">{sherbimet.length}</span>
          <span className="stat-label">Shërbime Gjithsej</span>
        </div>
      </div>

      {sherbimet.length === 0 ? (
        <div className="admin-empty">
          <p>Nuk ka shërbime ende.</p>
          <button className="btn-shto" onClick={handleShto}>
            + Shto Shërbimin e Parë
          </button>
        </div>
      ) : (
        <div className="admin-grid">
          {sherbimet.map((s) => (
            <div className="admin-card" key={s.id}>
              <div className="admin-card-foto">
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
                  className="admin-card-foto-placeholder"
                  style={{ display: s.foto ? 'none' : 'flex' }}
                >
                  📷
                </div>
              </div>
              <div className="admin-card-body">
                <h3>{s.titulli}</h3>
                <p className="admin-card-desc">{s.pershkrimi}</p>
                <span className="admin-card-cmimi">{s.cmimi}</span>
              </div>
              <div className="admin-card-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(s)}
                >
                  ✏️ Ndrysho
                </button>
                <button
                  className="btn-fshij"
                  onClick={() => setKonfirmoFshirjen(s.id)}
                >
                  🗑 Fshij
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminPanel
