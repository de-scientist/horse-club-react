import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide horse training, grooming, veterinary services, feeding programs, sanctuary care, and digital tracking for horse health.",
  },
  {
    question: "Do you train beginners?",
    answer:
      "Yes! We welcome both new and experienced riders. Our training programs are tailored to meet your skill level and goals.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in Murang’a, Kenya, and serve clients across the region.",
  },
  {
    question: "How can I support the sanctuary?",
    answer:
      "You can contribute through donations, volunteering, or sponsoring a horse in need. Every contribution helps us give horses a second chance at life.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can reach us through our contact form, WhatsApp, or by calling directly. Online booking options will also be available soon.",
  },
];

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFAQs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
