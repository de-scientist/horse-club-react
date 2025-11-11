import React from "react";


interface HeroProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  
  title = "Introducing Horse Club - Where Passion Meets Care",
  description = `At Horse Club, we believe in building a strong bond between horses and
  riders. Based in Murang'a, Kenya, we provide professional horse care,
  training, and support that ensures your horse is healthy, happy, and thriving.`,
  ctaText = "Learn More",
  ctaLink = "https://github.com/de-scientist/",
}) => {
  return (
    // Main section for the hero area
    <section className="hero-section" id="home">
      {/* Text container — holds all hero text content */}
      <div className="hero-textbox">
        {/* Introductory tagline */}
        <p className="hero-textbox-paragraph">{title}</p>

        {/* Main heading — single h1 for accessibility and SEO */}
        <h1 className="hero-textbox-heading">{description}</h1>

        {/* Call-to-action link/button */}
        <a
          href={ctaLink} // Link destination (defaults to your GitHub)
          target="_blank" // Opens in a new browser tab
          rel="noopener noreferrer" // Prevents potential security vulnerabilities
          className="hero-textbox-cta"
          aria-label={`Navigate to ${ctaText}`} // Accessibility support for screen readers
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
