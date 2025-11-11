# 🐴 Horse Club Web App

<!-- Live GitHub Stats & Badges -->
[![GitHub Repo stars](https://img.shields.io/github/stars/de-scientist/horse-club?style=social)](https://github.com/de-scientist/horse-club/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/de-scientist/horse-club?style=social)](https://github.com/de-scientist/horse-club/network/members)
[![GitHub issues](https://img.shields.io/github/issues/de-scientist/horse-club)](https://github.com/de-scientist/horse-club/issues)
[![GitHub license](https://img.shields.io/github/license/de-scientist/horse-club)](https://github.com/de-scientist/horse-club/blob/main/LICENSE)

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css)
![EmailJS](https://img.shields.io/badge/EmailJS-Integration-orange)
[![Author](https://img.shields.io/badge/Author-Mark%20Kinyanjui-blue)](https://github.com/de-scientist/)

---

## 🎯 Project Overview

Horse Club is a **modern, responsive web app** for horse enthusiasts in Kenya.  
It connects riders, parents, farmers, and supporters to:

- Horse training & grooming programs  
- Veterinary services & feeding schedules  
- Sanctuary care for rescued horses  
- Blogs, FAQs, gallery, and community testimonials  
- Contact and messaging via EmailJS  

Built using **React + TypeScript + Tailwind CSS**, designed with **reusable modular components**.

---

## 🧩 Component Architecture

| Component | Description |
|-----------|-------------|
| `Header` | Navigation bar with smooth scroll links. |
| `BlogSection` | Grid of blog cards with images, tags, titles, synopsis, and author/date meta. |
| `TestimonialSection` | Carousel-style quotes from Riders, Parents, Farmers, and Supporters. |
| `Gallery` | Responsive grid with clickable Lightbox modal for full-size images. |
| `Lightbox` | Reusable modal for viewing gallery images. |
| `ContactForm` | EmailJS-integrated form with smart mobile/email handling. |
| `FAQSection` | Collapsible FAQ items to answer common questions. |
| `Footer` | Footer with author credit & GitHub link. |

---

## 💡 Features

- **Responsive & Mobile-Friendly**  
- **Interactive Blog & Gallery**  
- **Testimonials for Social Proof**  
- **Smart Contact Form with EmailJS**  
- **Collapsible FAQs**  
- **Reusable Components for Easy Maintenance**  

---

## 📂 Demo of Collapsible Sections

<details>
<summary>Frequently Asked Questions</summary>

**Q: What services do you offer?**  
We provide horse training, grooming, veterinary services, feeding programs, sanctuary care, and digital tracking for horse health.

**Q: Do you train beginners?**  
Yes! Programs are tailored for both new and experienced riders.

**Q: Where are you located?**  
Based in Murang’a, Kenya, serving clients across the region.

**Q: How can I support the sanctuary?**  
Through donations, volunteering, or sponsoring a horse.

**Q: How do I book a service?**  
Contact us via form, WhatsApp, or phone. Online booking coming soon.

</details>

<details>
<summary>Testimonials</summary>

- **Grace M., Rider**: "Horse Club has been a game-changer. Training programs built my confidence and trust with my horse."  
- **Mary W., Parent**: "Safe environment for my children to interact with horses. Professional care and guidance."  
- **Samuel W., Farmer**: "Feeding and veterinary services keep my horse in peak condition year-round."  
- **Irene N., Sanctuary Supporter**: "Neglected horses find peace and love here. Supporting this cause is fulfilling."

</details>

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js >= 18.x  
- npm or yarn  
- EmailJS account (optional)

### Install

```bash
git clone https://github.com/de-scientist/horse-club.git
cd horse-club
npm install
# or
yarn install
🛠 Usage

Add Blogs → Modify blogItems array in BlogSection.tsx

Add Gallery Images → Modify galleryItems array in Gallery.tsx

Add Testimonials → Extend testimonials array in TestimonialSection.tsx

Add FAQs → Extend faqItems array in FAQSection.tsx

Contact Form → Update EmailJS credentials in .env

🗂 Project Structure
horse-club/
│
├─ src/
│  ├─ components/
│  │  ├─ BlogSection.tsx
│  │  ├─ ContactForm.tsx
│  │  ├─ FAQSection.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Gallery.tsx
│  │  ├─ Header.tsx
│  │  ├─ Lightbox.tsx
│  │  └─ TestimonialSection.tsx
│  │
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
│  │
│  ├─ App.tsx
│  └─ main.tsx
│
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ README.md

📜 License

MIT License – see LICENSE
 for details.

🔮 Future Enhancements

Dark mode toggle

Animations for blog cards & testimonials

Multi-language support

Online booking system integration

Admin panel for content management

✨ Author

Mark Kinyanjui

GitHub

Email

“Horses are partners in trust, discipline, and joy. This project brings that connection online.”
— Mark Kinyanjui