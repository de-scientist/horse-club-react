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

        <div className="logo">
          <img src="./assets/horse.png" alt="logo" style={{width: "40px"}} />
          <p className="logo-text">horse club</p>
        </div>

        <div className="header-contact">
          <p className="header-contact-text"> <a href="tel:+254 729 934 671" target="_blank" rel="noopener noreferrer">0729934671</a></p>
          <span className="header-contact-icon">
            <i className="fa-solid fa-phone"></i>
          </span>
        </div>
      </div>

      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item"><a href="#home" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">home</a>
            </li>
            <li className="nav-list-item"><a href="#about" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">about us</a>
            </li>
            <li className="nav-list-item"><a href="#services" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">services</a>
            </li>
            <li className="nav-list-item"><a href="#reasons" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">why us</a>
            </li>
            <li className="nav-list-item"><a href="#team" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">team</a>
            </li>
            <li className="nav-list-item"><a href="#blog" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">blog</a>
            </li>
            <li className="nav-list-item"><a href="#testimonial" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">testimonial</a>
            </li>
            <li className="nav-list-item"><a href="#gallery" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">gallery</a>
            </li>
            <li className="nav-list-item"><a href="#gallery" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">gallery</a>
            </li>
            <li className="nav-list-item"><a href="#contact" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">contact us</a>
            </li>
            <li className="nav-list-item"><a href="#faq" target="_blank" rel="noopener noreferrer" className="nav-list-item-link">faq</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;