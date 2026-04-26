# Britlex – Language Learning Platform (Web App)

Britlex is a modern, responsive web application for English language learning, built with HTML5, CSS3, and vanilla JavaScript. It features a clean, intuitive interface with a focus on user engagement and progress tracking.

## 📋 Features

- **Modern Design** – Full-screen hero section, glassmorphism effects, and smooth scrolling.
- **Responsive Layout** – Optimized for desktop, tablet, and mobile devices with flexible grids and media queries.
- **Interactive Lessons** – Includes engaging sections for vocabulary, grammar, and listening practice.
- **Progress Tracking** – Mock dashboard to visualize learning progress and achievements.
- **Smooth Navigation** – Sticky navigation bar and single-page application feel.
- **Dark & Light Themes** – User preference-based theming system.
- **Clean & Accessible** – Semantic HTML, proper ARIA labels, and focus management.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in your web browser.

## 📂 Project Structure

```
Britlex/
├── index.html              # Main application entry point
├── styles/                 # CSS stylesheets
│   ├── main.css            # Global styles & layout
│   ├── pages.css           # Page-specific styles (Hero, Lessons, Dashboard)
│   └── components.css      # Reusable components (Navbar, Cards, Buttons)
└── scripts/                # JavaScript files
    ├── main.js             # Main application logic
    ├── theme.js            # Theme switching (Dark/Light mode)
    └── navigation.js       # Navigation & scroll animations
```

## 🛠️ Tech Stack
- **HTML5** – Semantic markup
- **CSS3** – Custom properties (variables), flexbox, grid, animations
- **JavaScript (Vanilla)** – DOM manipulation, event handling, theme management

## 🎯 Key Features

### Responsive Design
- **Mobile-first approach** ensures seamless experience across all devices
- **Adaptive layouts** adjust navigation, cards, and dashboard elements based on screen size
- **Touch-friendly** interactive elements for mobile users

### Interactive Components
- **Parallax effects** in the hero section create depth
- **Card-based lesson layout** makes content scannable and engaging
- **Theme toggle** for personalized viewing experience
- **Smooth scrolling** between sections for better UX

### Dashboard
- Mock progress tracking with visual indicators
- Achievement badges to gamify learning
- Quick access to different skill areas

## 🖥️ Development

### Running Locally
1. Open `index.html` in your browser
2. Use browser developer tools for debugging

### Theme Management
Toggle between light and dark mode using the theme switch in the footer:

```javascript
// Toggle logic in scripts/theme.js
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save preference to localStorage
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
```

### Navigation
Smooth scrolling between sections powered by `scripts/navigation.js`:

```javascript
// Smooth scroll function
function smoothScrollTo(targetId, duration = 800) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
```

## 🎨 Styling

The styling uses a modern color palette with custom CSS properties for easy maintenance:

```css
/* Global variables in styles/main.css */
:root {
  --primary-color: #3b82f6;      /* Blue */
  --secondary-color: #6366f1;    /* Indigo */
  --accent-color: #f43f5e;       /* Pink/Red */
  --bg-color-light: #f9fafb;
  --bg-color-dark: #1f2937;
}

/* Dark mode overrides */
body.dark-mode {
  --bg-color-light: #111827;
  --text-primary: #f3f4f6;
  --text-secondary: #d1d5db;
}
```

## 📱 Responsiveness

The application uses a mobile-first approach with strategic breakpoints:

- **Base styles** for mobile devices (width < 640px)
- **Tablet breakpoint** (`@media (min-width: 640px)`) for layout adjustments
- **Desktop breakpoint** (`@media (min-width: 1024px)`) for full desktop experience
- **Max-width** on content containers for optimal readability

## 🎯 Best Practices

- **Semantic HTML5** – Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Accessibility** – ARIA labels, keyboard navigation, focus management
- **Performance** – Lazy loading of images (if implemented), efficient DOM updates
- **Maintainability** – Modular CSS, clear naming conventions, JavaScript separation
- **Cross-browser compatibility** – Tested on major modern browsers

## 📝 Todo

- [ ] Add actual lesson content and media
- [ ] Implement backend integration for user progress saving
- [ ] Create user authentication system
- [ ] Add interactive exercises (quizzes, fill-in-the-blanks)
- [ ] Integrate speech recognition for pronunciation practice
- [ ] Add gamification features (points, levels, leaderboards)
- [ ] Create admin panel for content management

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

[Your Name/Team Name]
[Your Email or Website]

---

**Built with 💖 for language learners**
