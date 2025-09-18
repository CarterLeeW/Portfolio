# Data Science & Software Engineering Portfolio

A modern, responsive portfolio website showcasing data science projects and software engineering skills.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Typing animations, progress bars, hover effects
- **Optimized Performance**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 4
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Animations**: CSS3 transitions and keyframes

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Customization Guide

### 1. Personal Information
Edit the following in `index.html`:
- **Name**: Update "Carter Wooton" throughout the file
- **Title**: Change "Data Scientist & Software Engineer"
- **Bio**: Update the about section content
- **Contact**: Replace email and social media links

### 2. Skills Section
Update the skills cards in the `#skills` section:
- Change icons (Font Awesome classes)
- Update skill descriptions
- Modify technology tags

### 3. Projects Section
For each project card:
- Update project titles and descriptions
- Change project icons
- Modify technology tags
- Add GitHub and demo links

### 4. Colors and Styling
Customize colors in `styles.css` by modifying CSS variables:
```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --secondary-color: #1e40af;  /* Secondary brand color */
  --accent-color: #06b6d4;     /* Accent color */
  /* ... other variables */
}
```

### 5. Adding New Sections
To add new sections:
1. Add navigation link in the navbar
2. Create section HTML with proper ID
3. Add corresponding styles in CSS
4. Update JavaScript for smooth scrolling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔧 Setup Instructions

1. **Clone or Download** the repository
2. **Open** `index.html` in a web browser
3. **Customize** content as needed
4. **Deploy** to your preferred hosting platform

## 🌐 Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings
3. Enable GitHub Pages from main branch
4. Access via `https://yourusername.github.io/repository-name`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with automatic deployments

## 📊 Performance Optimization

- **Images**: Compress and use modern formats (WebP)
- **CSS**: Minify for production
- **JavaScript**: Minify and use CDN for libraries
- **Fonts**: Use `font-display: swap` for better loading

## 🎯 SEO Optimization

- Update meta tags in `<head>` section
- Add Open Graph tags for social media
- Create XML sitemap
- Add Google Analytics tracking code

## 🧪 Testing

Test your portfolio on:
- Different browsers (Chrome, Firefox, Safari, Edge)
- Various devices and screen sizes
- Different connection speeds
- Accessibility tools (screen readers)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you need help customizing this portfolio, feel free to:
- Open an issue on GitHub
- Contact me via email
- Check the documentation

## 🔄 Future Enhancements

Planned features:
- Dark mode toggle
- Blog integration
- Contact form backend
- Project filtering
- Animation improvements
- Progressive Web App (PWA) features

---

**Made with ❤️ for the data science and software engineering community**