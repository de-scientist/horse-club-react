import React, { useState, type FormEvent } from "react";
import { FaInstagramSquare } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactInfoItem {
  iconClass: string;
  label: string;
  href?: string;
}

interface ContactSectionProps {
  contactInfo?: ContactInfoItem[];
}

const defaultContactInfo: ContactInfoItem[] = [
  { iconClass: "fa-solid fa-phone", label: "+254 729 934 671" },
  {
    iconClass: "fa-solid fa-envelope",
    label: "urbanhaven@apartments.com",
    href: "mailto:gitaumark502@gmail.com",
  },
  {
    iconClass: "fa-brands fa-facebook",
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    iconClass: <FaInstagramSquare />,
    label: "Instagram",
    href: "https://instagram.com",
  },
];

const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo = defaultContactInfo,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API integration or email service can go here-- my trials
    console.log("Form submitted:", formData);

    // Simulate success
    setStatusMessage("Thank you! Your message has been sent.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you. Reach out to us through any of the
          channels below or send us a direct message.
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        {contactInfo.map((item, index) => (
          <div key={index} className="info-item">
            <i className={item.iconClass}></i>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <p>{item.label}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
        {statusMessage && <p id="form-status">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
