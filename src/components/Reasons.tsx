import React from "react";

// Define prop types for the reusable ReasonCard
interface ReasonCardProps {
  title: string;
  description: string;
}

/**
 * Reusable ReasonCard component
 * Displays a title and a short description for each reason.
 */
const ReasonCard: React.FC<ReasonCardProps> = ({ title, description }) => {
  return (
    <div className="reason">
      <h3 className="reason-title">{title}</h3>
      <p className="reason-description">{description}</p>
    </div>
  );
};

/**
 * Main ReasonsSection component
 * Uses an array of reasons and maps them into reusable ReasonCard components.
 */
const ReasonsSection: React.FC = () => {
  // Data for each reason (typed automatically)
  const reasons = [
    {
      title: "expert technicians",
      description:
        "Our team is composed of certified equine professionals — vets, trainers, groomers — with years of specialized experience. They understand horse behavior, health, and care inside out.",
    },
    {
      title: "professional advice",
      description:
        "We don’t guess. We consult research, diagnostics, and real data to guide each recommendation.",
    },
    {
      title: "great support",
      description:
        "24/7 helpline, on-site visits, and fast response times — we stay by your side.",
    },
    {
      title: "technical skills",
      description:
        "Continuous training for our staff ensures we use the latest in equine science and technology.",
    },
    {
      title: "highly recommended",
      description:
        "Trusted by horse owners, riding schools, and equestrian communities across Murang’a, Kenya.",
    },
    {
      title: "positive reviews",
      description:
        "Hear from our satisfied clients — real stories from riders, trainers, and horse lovers.",
    },
  ];

  return (
    <section className="reasons-section" id="reasons">
      {reasons.map((reason, index) => (
        <ReasonCard key={index} {...reason} />
      ))}
    </section>
  );
};

export default ReasonsSection;
