import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const GalleryContact: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const contactFormRef = useRef<HTMLFormElement>(null);

  const galleryItems = [
    { src: "/src/images/rider.jpg", alt: "Horse riding session" },
    { src: "/src/images/feeding.jpg", alt: "Feeding the horse" },
    { src: "/src/images/training-session.jpg", alt: "Training field in Murang'a" },
    { src: "/src/images/grooming.jpg", alt: "Horse grooming session" },
  ];

  // Lightbox handler
  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  // Smart Email handler
  const smartEmail = () => {
    const email = "gitaumark502@gmail.com";
    const isMobile = /iphone|ipad|ipod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
    }
  };

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactFormRef.current) return;

    setFormStatus("Sending...");

    emailjs
      .sendForm(
        "service_we80e3m", 
        "template_wu0tzs9",
        contactFormRef.current,
        "IcaDo3VicicKINrhX" 
      )
      .then(
        () => {
          setFormStatus("✅ Message sent successfully!");
          contactFormRef.current?.reset();
        },
        (err) => {
          setFormStatus("❌ Failed to send message. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <div>
      {/* Gallery */}
      <section className="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <a
              href={item.src}
              className="gallery-item"
              key={i}
              onClick={(e) => {
                e.preventDefault();
                openLightbox(item.src);
              }}
            >
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <img className="lightbox-content" src={lightboxSrc} alt="Enlarged" />
        </div>
      )}

      {/* Contact Form */}
      <section className="contact">
        <form ref={contactFormRef} onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message..." rows={6} required />
          <button type="submit">Send Message</button>
        </form>
        {formStatus && <p>{formStatus}</p>}
        <button onClick={smartEmail}>Email Us Directly</button>
      </section>
    </div>
  );
};

export default GalleryContact;
