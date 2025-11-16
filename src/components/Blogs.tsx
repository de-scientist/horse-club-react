import React from "react";
import img from "../assets/blog-img-1.jpg";
import blog from "../assets/blog-img-2.jpg";
import img3 from "../assets/blog-img-3.jpg";
import img4 from "../assets/blog-img-4.jpg";
import img5 from "../assets/blog-img-5.jpg";
import img6 from "../assets/blog-img-6.jpg";

// Define types for blog metadata and blog card
interface BlogMeta {
  date: string;
  author: string;
}

interface BlogCardProps {
  title: string;
  synopsis: string;
  imageSrc: string;
  imageAlt: string;
  chips: string[];
  meta: BlogMeta;
  link?: string; // optional link to full blog
}

/**
 * Reusable BlogCard component
 */
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  synopsis,
  imageSrc,
  imageAlt,
  chips,
  meta,
  link = "#",
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="blog-card-featured-image"
        />
      </div>
      <div className="blog-card-chips-container">
        {chips.map((chip, idx) => (
          <a key={idx} href="#" className="blog-card-chip">
            {chip}
          </a>
        ))}
      </div>
      <a href={link} className="blog-card-title">
        <h3 className="blog-card-title-title">{title}</h3>
      </a>
      <p
        className="blog-synopsis"
        dangerouslySetInnerHTML={{ __html: synopsis }}
      />
      <div className="blog-card-meta-information">
        <div className="blog-card-meta">
          <i className="fa-solid fa-calendar-days"></i>
          <p dangerouslySetInnerHTML={{ __html: meta.date }} />
        </div>
        <div className="blog-card-meta">
          <i className="fa-solid fa-user"></i>
          <a href="#">{meta.author}</a>
        </div>
      </div>
    </div>
  );
};

/**
 * Main BlogSection component
 */
const BlogSection: React.FC = () => {
  const blogs: BlogCardProps[] = [
    {
      title: "The Importance of Proper Horse Nutrition in Kenya",
      synopsis:
        "Nutrition is the backbone of a horse’s health and performance. In Kenya’s diverse climate, horses require a balanced diet of hay, grains, and mineral supplements. At Horse Club, we design feeding programs that strengthen muscles, boost immunity, and improve energy levels. A well-fed horse is not only healthier but also happier, more active, and better prepared for training.",
      imageSrc: img,
      imageAlt: "featured image",
      chips: ["travel", "lifestyle"],
      meta: { date: "31<sup>st</sup> September 2025", author: "Jane Shiru" },
    },
    {
      title: "Top 5 Horse Grooming Tips for Healthy Skin & Coat",
      synopsis: `
        Grooming goes beyond keeping a horse clean — it builds trust and comfort between horse and handler. Here are 5 key tips:
        <ol class="blog-synopsis-ol">
          <li>Brush daily to remove dust and loose hair.</li>
          <li>Check hooves for stones or cracks.</li>
          <li>Use natural oils for a shiny coat.</li>
          <li>Trim manes and tails to prevent tangling.</li>
          <li>Watch for skin infections like rain rot.</li>
        </ol>
        At Horse Club, our professional grooming keeps your horse looking sharp and feeling comfortable.
      `,
      imageSrc: blog,
      imageAlt: "featured image",
      chips: ["travel", "lifestyle", "animals", "accommodation"],
      meta: { date: "30<sup>th</sup> September 2025", author: "Denny Ndegwa" },
    },
    {
      title: "Why Training Builds Trust Between Rider and Horse",
      synopsis:
        "Training isn’t just about performance — it’s about communication. A horse that’s well-trained responds calmly and confidently to its rider. We use progressive training techniques that emphasize patience, respect, and reward. This approach reduces stress, prevents accidents, and strengthens the bond between horse and rider. Whether for sport, leisure, or therapy, training is key to harmony.",
      imageSrc: img3,
      imageAlt: "featured image",
      chips: ["travel", "lifestyle", "accommodation"],
      meta: { date: "28<sup>th</sup> September 2025", author: "Joan Shii" },
    },
    {
      title: "Horse Sanctuary: Giving Horses a Second Chance at Life",
      synopsis:
        "Many horses are abandoned or neglected due to illness, old age, or financial strain. At our sanctuary in Murang’a, we provide these horses with shelter, food, and medical care. Our mission is to restore their dignity and offer them peace in a loving environment. Supporting our sanctuary means giving a horse another chance to live with freedom and care.",
      imageSrc: img4,
      imageAlt: "featured image",
      chips: ["accommodation"],
      meta: {
        date: "27<sup>st</sup> September 2025",
        author: "Hildah Mwihaki",
      },
    },
    {
      title: "How to Build a Strong Bond with Your Horse",
      synopsis:
        "A horse is more than a riding partner — it’s a companion that thrives on trust and respect. Building a strong bond requires patience, consistency, and kindness. Spend time grooming, walking, and talking to your horse outside of training sessions. Learn its moods, reward good behavior, and always handle with gentleness. At Horse Club in Murang’a, we emphasize relationship-building in all our training programs, because a bonded horse is calmer, more responsive, and more loyal.",
      imageSrc: img5,
      imageAlt: "featured image",
      chips: ["lifestyle", "animals"],
      meta: { date: "26<sup>th</sup> September 2025", author: "Isaac Gitau" },
    },
    {
      title: "The Growing Horse Culture in Kenya",
      synopsis:
        "Over the last decade, horse riding has grown from a niche activity to a vibrant culture across Kenya. From competitive sports and leisure riding to therapy programs and farm work, horses are becoming part of daily life for many families. At Horse Club, we are proud to be part of this cultural shift, providing expert training, care, and sanctuary services that nurture both horses and riders. With Murang’a becoming a hub for equine enthusiasts, the future of horse culture in Kenya has never been brighter.",
      imageSrc: img6,
      imageAlt: "featured image",
      chips: ["lifestyle", "animals", "accommodation"],
      meta: { date: "25<sup>th</sup> September 2025", author: "Rita Waithera" },
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="title">
        <p className="title-sub">latest from our blog</p>
        <h2 className="title-main">our blog</h2>
      </div>
      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
