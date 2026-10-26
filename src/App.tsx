import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Menu, MessageCircle, X } from 'lucide-react';
import { siteContent } from './content';

const whatsappUrl = `https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(siteContent.mensagemWhatsApp)}`;

function ContactLink({ className = '', children = 'Agendar consulta' }: { className?: string; children?: React.ReactNode }) {
  return <a className={`contact-link ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={18} strokeWidth={1.5} /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Maysa Ribeiro — início">
          <span>MAYSA RIBEIRO</span><small>PSICOLOGIA CLÍNICA</small>
        </a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
          <a href="#processo" onClick={closeMenu}>Como funciona</a>
          <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
          <a className="nav-instagram" href={siteContent.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Maysa Ribeiro"><Instagram size={20} /></a>
        </nav>
        <ContactLink className="header-contact">Agendar consulta</ContactLink>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-photo" aria-hidden="true"><img src="/images/maysa-retrato.webp" alt="" /></div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">ESCUTA · PRESENÇA · POSSIBILIDADES</p>
            <h1 id="hero-title">UM ESPAÇO<br />PARA <em>SE</em><br />ESCUTAR.</h1>
            <div className="hero-bottom">
              <p>Cuidando da infância e das histórias<br />que continuam na vida adulta.</p>
              <ContactLink>Conversar comigo</ContactLink>
            </div>
          </div>
          <p className="hero-note">Psicoterapia para crianças e adultos</p>
          <a className="scroll-cue" href="#sobre" aria-label="Conheça mais"><ArrowDown size={18} /><span>Explore</span></a>
        </section>

        <section className="intro section-pad" id="sobre">
          <div className="section-label" data-reveal><span>01</span><p>Sobre mim</p></div>
          <div className="intro-copy" data-reveal>
            <p className="intro-lead">Nem sempre é sobre <em>“estar mal”.</em><br />Às vezes, é sobre se entender melhor.</p>
            <div className="intro-detail">
              <p>Sou Maysa Ribeiro, psicóloga clínica. Acredito na escuta como um lugar de encontro: consigo mesma, com a própria história e com novas formas de viver.</p>
              <p>Meu trabalho é construir um espaço seguro e sensível, onde crianças e adultos possam se expressar no seu tempo e encontrar sentido para suas experiências.</p>
              <span>{siteContent.crp}</span>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="atendimento">
          <div className="section-label light" data-reveal><span>02</span><p>Atendimento</p></div>
          <h2 data-reveal>Cada história pede<br />uma escuta <em>única.</em></h2>
          <div className="service-list">
            {siteContent.atendimentos.map((item, index) => (
              <article key={item.titulo} data-reveal>
                <span className="service-number">0{index + 1}</span>
                <h3>{item.titulo}</h3>
                <div><h4>{item.subtitulo}</h4><p>{item.texto}</p><ul>{item.temas.map((tema) => <li key={tema}>{tema}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="personal section-pad">
          <div className="personal-image" data-reveal><img src="/images/maysa-corpo.webp" alt="Maysa Ribeiro sorrindo, ao lado de um banco" /></div>
          <div className="personal-copy" data-reveal>
            <p className="eyebrow dark">ALÉM DO CONSULTÓRIO</p>
            <h2>Quem sou eu,<br /><em>Maysa.</em></h2>
            <p className="personal-text">Prefiro tudo no seu tempo. Reparo nos detalhes e gosto de rotina. Filmes e séries são meu jeito de desligar — e conversas tranquilas me ganham.</p>
            <p className="personal-text">Também preciso de momentos sozinha para recarregar. Talvez seja por isso que eu valorize tanto o respeito ao ritmo de cada pessoa.</p>
            <a className="text-link" href={siteContent.instagram} target="_blank" rel="noreferrer">Me acompanhe no Instagram <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="process section-pad" id="processo">
          <div className="section-label" data-reveal><span>03</span><p>Como funciona</p></div>
          <div className="process-heading" data-reveal><h2>Começar pode ser<br />mais <em>simples.</em></h2><p>Sem fórmulas prontas. O processo começa com uma conversa e é construído com presença, cuidado e clareza.</p></div>
          <div className="steps">
            {siteContent.etapas.map(([titulo, texto], index) => <article key={titulo} data-reveal><span>0{index + 1}</span><h3>{titulo}</h3><p>{texto}</p></article>)}
          </div>
        </section>

        <section className="journal section-pad" aria-labelledby="journal-title">
          <div className="journal-heading" data-reveal><div><p className="eyebrow dark">CONTEÚDOS PARA LER COM CALMA</p><h2 id="journal-title">Do meu Instagram</h2></div><a className="text-link" href={siteContent.instagram} target="_blank" rel="noreferrer">Ver perfil <ArrowUpRight size={18} /></a></div>
          <div className="posts">
            <a href={siteContent.instagram} target="_blank" rel="noreferrer" data-reveal><img src="/images/motivos-terapia.webp" alt="Motivos para fazer terapia" /><span>Autoconhecimento <ArrowUpRight size={17} /></span></a>
            <a href={siteContent.instagram} target="_blank" rel="noreferrer" data-reveal><img src="/images/terapia-infantil.webp" alt="Seu filho vai começar terapia?" /><span>Terapia infantil <ArrowUpRight size={17} /></span></a>
            <a href={siteContent.instagram} target="_blank" rel="noreferrer" data-reveal><img src="/images/quem-sou-eu.webp" alt="Quem sou eu — Maysa Ribeiro" /><span>Um pouco sobre mim <ArrowUpRight size={17} /></span></a>
          </div>
        </section>

        <section className="faq section-pad" id="duvidas">
          <div className="section-label light" data-reveal><span>04</span><p>Dúvidas frequentes</p></div>
          <div className="faq-grid"><h2 data-reveal>Antes de começar,<br /><em>vamos conversar.</em></h2><div className="faq-list" data-reveal>{siteContent.duvidas.map(([pergunta, resposta]) => <details key={pergunta}><summary>{pergunta}<span aria-hidden="true">+</span></summary><p>{resposta}</p></details>)}</div></div>
        </section>

        <section className="closing section-pad">
          <div data-reveal><p className="eyebrow dark">QUANDO FIZER SENTIDO PARA VOCÊ</p><h2>Vamos começar<br />por uma <em>conversa?</em></h2></div>
          <div className="closing-action" data-reveal><p>Você não precisa ter todas as palavras.<br />A gente pode encontrar um jeito, juntas.</p><ContactLink>Agendar pelo WhatsApp</ContactLink></div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span>MAYSA RIBEIRO</span><small>PSICOLOGIA CLÍNICA · {siteContent.crp}</small></div>
        <div className="footer-links"><a href={siteContent.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a href="#inicio">Voltar ao início <ArrowRight size={17} /></a></div>
        <p>© {new Date().getFullYear()} Maysa Ribeiro. Cuidado, ética e escuta.</p>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={1.5} />
      </a>
    </>
  );
}

export default App;
