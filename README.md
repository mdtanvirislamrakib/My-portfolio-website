# 💼 MD. Tanvir Islam Rakib — Portfolio Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0EA5E9?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF4A8A?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-333333?style=for-the-badge&logo=email&logoColor=white)](https://www.emailjs.com/)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-F27B9B?style=for-the-badge&logo=sweetalert2&logoColor=white)](https://sweetalert2.github.io/)



## 🖥️ Live Demo

You can see the live version of this portfolio website here:

➡️ [https://md-tanvir-islam-rakib.netlify.app/](https://md-tanvir-islam-rakib.netlify.app/)

---

## 🖼️ Live Demo & Preview

> 📸 Replace this with an actual screenshot of your project

![Portfolio Preview](./src/assets/home.PNG)

---

## 📋 Overview

This is my personal **portfolio website** built using React and modern tools. It highlights my skills, showcases my best projects, and allows users to contact me directly. The website is mobile-friendly, animated, and easy to navigate.

---

## 📁 Folder Structure
portfolio-website/
│
├── public/                              # Static files served directly
│   ├── favicon.ico                     # Favicon for browser tab
│   └── index.html                      # HTML entry point
│
├── src/                                # Source files
│   ├── assets/                         # Static assets like images, icons, styles
│   │   ├── css/                       # CSS files (Tailwind base, Prism theme)
│   │   │   ├── index.css              # Tailwind imports and global styles
│   │   │   └── prism-theme.css        # PrismJS syntax highlighting theme
│   │   ├── images/                    # Photos, project screenshots
│   │   │   └── portfolio-preview.png
│   │   └── logos/                     # Brand logos, icons if separate from react-icons
│   │
│   ├── components/                    # Reusable UI components (small to medium)
│   │   ├── Navbar/                   # Navbar folder (if complex, else just Navbar.jsx)
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css      # Optional: CSS Module or Tailwind styles
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.jsx
│   │   │   └── HeroSection.module.css
│   │   ├── AboutSection/
│   │   │   ├── AboutSection.jsx
│   │   │   └── AboutSection.module.css
│   │   └── common/                   # Shared small components (Buttons, Icons, etc.)
│   │       ├── Button.jsx
│   │       └── SocialLinks.jsx
│   │
│   ├── pages/                        # Page-level components or sections
│   │   ├── Home.jsx                  # Main landing page rendering all sections
│   │   ├── SkillsSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   │
│   ├── layouts/                     # Layout components (shells, wrappers)
│   │   └── RootLayout.jsx           # Contains Navbar, Footer, Outlet for routing
│   │
│   ├── router/                     # Routing logic and config
│   │   └── router.jsx              # React Router setup
│   │
│   ├── hooks/                      # Custom React hooks (optional)
│   │   └── useScrollToTop.js
│   │
│   ├── utils/                      # Utility/helper functions (optional)
│   │   └── emailService.js         # EmailJS helper
│   │
│   ├── App.jsx                    # Root app component
│   ├── main.jsx                   # ReactDOM render / app bootstrap
│   └── index.css                  # Global CSS imports (Tailwind base etc.)
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── vite.config.js / webpack.config.js   # Build config depending on your setup


---

## 🚀 Features

### 🧭 Navigation Bar
- Fully responsive with React Router integration
- Smooth scrolling or routing between sections

### 👨‍💻 Hero Section
- Professional designation and typing animation
- Resume download button (static or dynamic)
- Social media links (GitHub, LinkedIn, Facebook, Twitter)

### 🙋 About Me
- Detailed description of programming journey
- Personal interests and hobbies
- Adds personality to the portfolio

### 🧠 Skills Section
- Skill categories like Frontend, Backend, Tools
- Graphical display using icons and motion

### 🎓 Education Section
- Complete academic background with timeline-style layout

### 📂 Projects Section
- At least 3 high-quality projects
  - Name, image, tech stack, description
  - GitHub (client) and Live demo links

### 📬 Contact Section
- Email, phone, WhatsApp, LinkedIn, and location
- Contact form with `react-hook-form` + `emailjs`
- SweetAlert2 for success confirmation

### 📱 Responsive Design
- Fully optimized for mobile, tablet, and desktop
- Clean, modern, and professional UI

---

## 🛠️ Tech Stack

- **React.js** – Frontend Library  
- **Tailwind CSS** – Utility-First CSS  
- **Framer Motion** – Animation Framework  
- **EmailJS** – Email integration without a backend  
- **React Hook Form** – Form handling & validation  
- **SweetAlert2** – Interactive alerts  
- **React Icons** – Icon library  
- **React Router DOM** – Routing  
- **PrismJS** – Code syntax highlighting  
- **React Simple Typewriter** – Typing animation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💼 Author

**MD. Tanvir Islam Rakib**  
BGIFT Institute of Science & Technology  
📧 mdtanvirislamrakib7@email.com  
🌐 [GitHub](https://github.com/mdtanvirislamrakib)    
🔗 [LinkedIn](https://www.linkedin.com/in/tanvir-islam-rakib/)  

---

## ⭐ Support & Feedback

If you find this project helpful or inspiring, please consider giving it a ⭐ on GitHub and sharing your thoughts!

