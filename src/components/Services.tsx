import React from "react";
import vet from "../assets/service-vet.png";
import grooming from "../assets/service-horse-grooming.png";
import training from "../assets/service-horse-training.png";
import fleeky from "../assets/staff-george.jpg";
import linet from "../assets/staff-linnet.jpg";
import joshua from "../assets/staff-joshua.jpg";

// Define the prop types for the ServiceCard
interface ServiceCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

/**
 * Reusable ServiceCard component
 * Displays an image, title, and description for each service.
 * Strongly typed to avoid implicit 'any' warnings.
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="service-card">
      <div className="service-card-img-wrapper">
        <img src={imgSrc} alt={altText} className="service-image" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

/**
 * Main ServicesSection component
 * Uses an array of services and maps them to ServiceCard components.
 */
const ServicesSection: React.FC = () => {
  // Array of service data (typed automatically by inference)
  const services = [
    {
      imgSrc: vet,
      altText: "veterinary services",
      title: "veterinary service",
      description:
        "Comprehensive veterinary care delivered by certified equine veterinarians. From routine wellness checks and vaccinations to emergency interventions, we ensure your horse gets the medical attention it deserves — with compassion, precision, and cutting-edge diagnostics.",
    },
    {
      imgSrc: grooming,
      altText: "horse grooming",
      title: "horse grooming",
      description:
        "Luxurious grooming and coat care for your equine companion. We use premium brushes, safe grooming products, and gentle techniques to clean, trim mane & tail, and pamper your horse so it looks and feels its best.",
    },
    {
      imgSrc: training,
      altText: "horse training",
      title: "horse training",
      description:
        "Structured training programs tailored to your horse’s temperament and your goals — be it competition, riding confidence, or behavioural improvement. Our experienced trainers use positive reinforcement, consistent routines, and behavioral science to create harmony.",
    },
    {
      imgSrc: "./src/images/service-horse-feeding.png",
      altText: "horse feeding",
      title: "horse feeding",
      description:
        "Customized nutrition plans to match age, workload, and health condition. We use high-quality feeds, supplements, and seasonal adjustments to optimize digestion and performance in every horse.",
    },
    {
      imgSrc: "./src/images/service-horse-santuary.png",
      altText: "sanctuary for horses",
      title: "Sanctuary for horses",
      description:
        "Safe haven for retired, rescued, or rehabilitating horses. Our spacious paddocks, dedicated care teams, and compassionate philosophy ensure every horse lives out its days in comfort, dignity, and peace.",
    },
    {
      imgSrc: "./src/images/service-horse-tracking.png",
      altText: "digital tracking",
      title: "digital tracking",
      description:
        "Harness technology with our digital tracking system — GPS, health monitoring, activity logs — so you stay informed about your horse’s location, behavior, and wellness, wherever you are.",
    },
  ];

  return (
    <section className="services-section" id="services">
      {/* Section title */}
      <div className="title">
        <p className="title-sub">some of the things we offer</p>
        <h2 className="title-main">our services</h2>
      </div>

      {/* Services cards container */}
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
