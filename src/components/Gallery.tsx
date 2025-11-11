import React, { useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
}

const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { src: "./src/images/rider.jpg", alt: "Horse riding session" },
    { src: "./src/images/feeding.jpg", alt: "Feeding the horse" },
    { src: "./src/images/training-session.jpg", alt: "Training field in Murang'a" },
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
          <img className="lightbox-content" src={currentImg} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
