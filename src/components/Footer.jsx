import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Klinika Dentare Dr. Shkodrani</h3>
          <p>Buzëqeshja juaj, përkushtimi ynë.</p>
        </div>
        <div>
          <h4>Kontakti</h4>
          <p>Address: Blloku 5, Zahir Pajaziti, Mitrovicë 40000</p>
          <p>Phone: +383 44 400 088</p>
          <p>Email: dr_shkodrani@dental-ks.com</p>
        </div>
        <div>
          <h4>Orari i Punës</h4>
          <p>E Hënë - E Premte: 08:00 - 19:00</p>
          <p>E Shtunë: 09:00 - 14:00</p>
          <p>E Diel: Mbyllur</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Klinika Dentare Dr. Shkodrani. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  )
}

export default Footer

// new test
