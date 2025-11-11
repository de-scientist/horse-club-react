function Header () {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-contact">
        <span className="header-contact-icon">
          <i className="fa-solid fa-paper-plane"></i>
        </span>
        <p className="header-contact-text"><a href="http://mailto:gitaumark502@gmail.com" target="_blank" rel="noopener noreferrer">gitaumark502@gmail.com</a></p>
        </div>
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        HOME
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        ABOUT US
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        SERVICES
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        WHY US
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        TEAM
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        BLOG
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        TESTIMONIAL
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        GALLERY
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        CONTACT US
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        FAQ
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" >
      <div className="hero-textbox">
        <p className="hero-textbox-paragraph">
          Introducing Horse Club - Where Passion Meets Care
        </p>
          <h1 className="hero-textbox-heading">
            At Horse Club, we believe in building a strong bond between horses and riders. Based in Murang'a, Kenya, we provide professional horse care, training, and support that ensures your horse is healthy, happy, and thriving.
          </h1>
          <a href="http://github.com/de-scientist/" target="_blank" rel="noopener noreferrer" className="hero-textbox-cta">learn more</a>
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header />
    </div>
  )
  
}


export default App