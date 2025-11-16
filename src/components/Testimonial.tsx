import React from "react";
import linet from "../assets/staff-linnet.jpg"
import babra from "../assets/staff-babra.jpg"
import linet from "../assets/staff-linnet.jpg"
import linet from "../assets/staff-linnet.jpg"

// Define types for testimonial props
interface TestimonialProps {
  imgSrc: string;
  imgAlt: string;
  text: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  imgSrc,
  imgAlt,
  text,
  author,
}) => {
  return (
    <div className="testimonial">
      <img src={imgSrc} alt={imgAlt} className="testimonial-img" />
      <div className="testimonial-content">
        <p className="testimonial-text">"{text}"</p>
        <h4>— {author}</h4>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      imgSrc: linet,
      imgAlt: "Grace M. - Rider",
      text: "Horse Club has been a game-changer for my riding journey. Their training programs helped me build confidence and trust with my horse. I can now ride with ease and joy.",
      author: "Grace M., Rider",
    },
    {
      imgSrc: babra,
      imgAlt: "Mary W. - Parent",
      text: "As a parent, I wanted a safe environment where my children could interact with horses. Horse Club provided exactly that — professional care, guidance, and a warm atmosphere.",
      author: "Mary W., Parent",
    },
    {
      imgSrc: "./src/images/staff-joshua.jpg",
      imgAlt: "Samuel W. - Farmer",
      text: "My horse is part of my farm work, and keeping it strong and healthy is critical. The feeding and veterinary services at Horse Club keep my horse in peak condition all year.",
      author: "Samuel W., Farmer",
    },
    {
      imgSrc: "./src/images/staff-irene.jpg",
      imgAlt: "Irene N. - Sanctuary Supporter",
      text: "The Horse Sanctuary is a true blessing. I’ve seen neglected horses find peace and love here. Supporting this cause has been one of the most fulfilling things I’ve done.",
      author: "Irene N., Sanctuary Supporter",
    },
  ];

  return (
    <section id="testimonial" className="testimonial-section">
      <h2 className="title-sub">What Our Community Says</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
