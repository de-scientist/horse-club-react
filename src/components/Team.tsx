import React from "react";
import mark from "../assets/me.jpg";
import bro from "../assets/bro.jpeg";
import babra from "../assets/staff-babra.jpg";
import fleeky from "../assets/staff-george.jpg";
import linet from "../assets/staff-linnet.jpg";
import joshua from "../assets/staff-joshua.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

// Define prop types for the social links
interface SocialLink {
  url: string;
  iconClass: string; // Font Awesome icon class
}

// Define prop types for each team member
interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string; // optional for team members that have shorter descriptions
  imageSrc: string;
  imageAlt: string;
  socialLinks: SocialLink[];
}

/**
 * Reusable TeamMemberCard component
 * Displays member image, name, role, bio, and social links.
 */
const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageSrc,
  imageAlt,
  socialLinks,
}) => {
  return (
    <div className="team-member-card">
      <div className="team-member-image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="team-member-image" />
      </div>
      <div className="team-member-information">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        {bio && <p className="team-member-bio">{bio}</p>}
        <div className="team-member-socials">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member-social-url"
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Main TeamSection component
 * Maps through an array of team member data and renders TeamMemberCard.
 */
const TeamSection: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Mark Kinyanjui",
      role: "Founder & CEO",
      bio: "An advocate for animal welfare and oversees operations and champions our mission to raise standards of horse care.",
      imageSrc: mark,
      imageAlt: "A head-shot of Mark",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: <FaInstagramSquare />,
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: <FaXTwitter />,
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: <FaFacebookSquare />,
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: <FaGithubSquare />,
        },
      ],
    },
    {
      name: "Kennedy Nyoike",
      role: "Head Groomer. With 10+ years’ experience in show stables, Ken’s attention to detail ensures every horse shines.",
      imageSrc: bro,
      imageAlt: "A head-shot of irene",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: "fa-brands fa-x-twitter",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: "fa-brands fa-facebook-f",
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: "fa-brands fa-github",
        },
      ],
    },
    {
      name: "Babra Obare",
      role: "IT & Digital Officer. She manages our booking platform, digital tracking systems, and keeps our online presence smooth.",
      imageSrc: babra,
      imageAlt: "A head-shot of Babra",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: "fa-brands fa-x-twitter",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: "fa-brands fa-facebook-f",
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: "fa-brands fa-github",
        },
      ],
    },
    {
      name: "Fleeky George",
      role: "Lead Trainer. Specializes in dressage, jumping, and behavioural conditioning. Fleeky brings patience, insight, and discipline to each horse.",
      imageSrc: fleeky,
      imageAlt: "A head-shot of Fleeky",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: "fa-brands fa-x-twitter",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: "fa-brands fa-facebook-f",
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: "fa-brands fa-github",
        },
      ],
    },
    {
      name: "Linnet Wanjiku",
      role: "HR & Community Liaison. Keeps staff morale high and builds bridges with our community of riders.",
      imageSrc: linet,
      imageAlt: "A head-shot of Linet",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: "fa-brands fa-x-twitter",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: "fa-brands fa-facebook-f",
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: "fa-brands fa-github",
        },
      ],
    },
    {
      name: "Joshua Kimani",
      role: "Sanctuary Manager. Leads care for resident and rescued horses, ensures daily welfare and enrichment.",
      imageSrc: joshua,
      imageAlt: "A head-shot of Joshua",
      socialLinks: [
        {
          url: "https://www.instagram.com/gitau6732/",
          iconClass: "fa-brands fa-instagram",
        },
        {
          url: "https://x.com/GitauMark1",
          iconClass: "fa-brands fa-x-twitter",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100072778362304",
          iconClass: "fa-brands fa-facebook-f",
        },
        {
          url: "https://github.com/de-scientist/",
          iconClass: "fa-brands fa-github",
        },
      ],
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
