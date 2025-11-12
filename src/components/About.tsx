import React from "react";
import about from "../assets/about-img.jpg";

// Define props for flexibility and reusability
interface AboutProps {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const About: React.FC<AboutProps> = ({
  subtitle = "We are here to take care of your horses",
  title = "We are your horses' best friend now and forever",
  description = `We are dedicated to nurturing horses with excellence. From health to
  grooming, training to feeding, Horse Club is your trusted partner. Our mission
  is to deliver reliable, affordable, and compassionate services to horse lovers
  across Kenya.`,
  ctaText = "Get Started Now",
  ctaLink = "https://github.com/de-scientist",
  imageSrc = about,
  imageAlt = "horse running",
}) => {
  return (
    <section className="about-section" id="about">
      {/* --- Left Text Box --- */}
      <div className="about-textbox">
        <p className="about-text-subtitle">{subtitle}</p>

        <h2 className="about-title">{title}</h2>

        <p className="about-description">{description}</p>

        <a
          href={ctaLink}
          target="#"
          rel="noopener noreferrer"
          className="about-cta"
          aria-label={ctaText}
        >
          {ctaText}
        </a>
      </div>

      {/* --- Right Image --- */}
      <div className="about-img-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="about-img-image"
          loading="lazy" // improves performance
        />
      </div>
    </section>
  );
};

export default About;
