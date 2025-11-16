import React, { useState } from "react";
import rider from "../assets/rider.jpg"
import feeding from "../assets/feeding.jpg"
import training from "../assets/training-session.jpg"
import rider from "../assets/rider.jpg"

interface GalleryItem {
  src: string;
  alt: string;
}

const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { src: rider, alt: "Horse riding session" },
    { src: feeding, alt: "Feeding the horse" },
    {
      src: training,
      alt: "Training field in Murang'a",
    },
    { src: "./src/images/grooming.jpg", alt: "Horse grooming session" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string>("");

  const openLightbox = (src: string) => {
    setCurrentImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg("");
  };

  return (
    <section id="gallery" className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(item.src)}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <img
            className="lightbox-content"
            src={currentImg}
            alt="Enlarged view"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
