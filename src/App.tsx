import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import maysaImage from './assets/maysa_second.png';
import logo from './assets/logo.png';
function App() {
  return (
    <main>
      <nav className="nav_container">
        <img src={logo} alt="logo" />
        <button
          type="button"
          className="primary"
          aria-label="Agendar via WhatsApp"
          onClick={() => {
            const win = window.open('https://wa.me/5528999442025', '_blank');
            if (win) win.opener = null;
          }}
        >
          Agende sua consulta
        </button>

      </nav>
      <section className="section_container">

        <div className="section_container-content">
          <div className="section_container-content__text">

            <div className="section_container-content__text-eyebrow">
              <p className="title">Psicóloga</p>
              <p className="text-lg">CRP 06/123456</p>
            </div>

            <h2>Maysa Ribeiro</h2>

            <div className="section_container-content__socials">
              <a href="http://wa.me/5528999442025" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/psi.maysa.ribeiro?igsh=am05M2s3NmZub3Az&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@psi.maysa.ribeiro?_r=1&_t=ZS-94SuZ9BA7ap" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>

            <div className="section_container-content__about">
              <p className="mission">
                "Cuidando da infância e das histórias que continuam na vida adulta."
              </p>
              <p className="services">
                <span className="dot"></span> Atendimento Infantil e Adulto
              </p>
            </div>

            <button
              type="button"
              className="primary"
              aria-label="Agendar via WhatsApp"
              onClick={() => {
                const win = window.open('https://wa.me/5528999442025', '_blank');
                if (win) win.opener = null;
              }}
            >
              Agende sua consulta
            </button>

          </div>

          <div className="section_container-content__image">
            <img src={maysaImage} alt="Psicóloga Maysa Ribeiro" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;