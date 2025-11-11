impo

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
      <Hero />
    </div>
  )
  
}


export default App