# Professional Portfolio

A clean, modern, and responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 📱 Fully responsive design that works on all devices
- 🎨 Modern and professional UI with smooth animations
- 🧩 Modular sections: Hero, About, Projects, Skills, and Contact
- 🔍 Project filtering functionality
- 📝 Working contact form (requires backend setup)
- 🎭 Smooth scrolling and animations
- 🍔 Mobile-friendly navigation
- 🌓 Dark mode / light mode toggle with preference saving
- ✨ Enhanced animations and visual effects
- 🖱️ Custom animated cursor
- 🌊 Parallax floating elements

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content to make it your own

## Customization

### Personal Information

- Update the name, job title, and description in the hero section
- Change the profile image in the About section
- Modify the personal details in the About section
- Update contact information in the Contact section
- Replace social media links with your own

### Projects

For each project you want to showcase:

1. Duplicate a project card in the HTML
2. Update the image, title, description, and tags
3. Add the appropriate category attribute to enable filtering
4. Link to your live demo and source code

### Skills

- Adjust the skill levels by changing the width percentage in the progress bars
- Add or remove skills as needed
- Customize the categories to match your expertise

### Custom Styling

- Change the color scheme by modifying the CSS variables in `:root`
- Switch between light and dark mode using the theme toggle button
- Adjust spacing, typography, and other design elements in the CSS file
- Customize animations by modifying the animation classes and keyframes

### Animations

The portfolio includes several animation types that can be applied to any element:

- `fade-in`: Simple fade-in effect
- `slide-up`: Element slides up from below
- `slide-in-left`: Element slides in from the left
- `slide-in-right`: Element slides in from the right
- `zoom-in`: Element zooms in from a smaller size
- `rotate-in`: Element rotates and zooms in
- `bounce-in`: Element bounces into view

To apply an animation to an element, add the corresponding class and adjust animation delay if needed:

```css
.your-element {
    animation-delay: 0.3s; /* Optional delay */
}
```

### Dark Mode Customization

You can customize the dark mode colors by modifying the CSS variables in the `[data-theme="dark"]` selector in styles.css.

## Credits

- Font Awesome for the icons
- Google Fonts for the typography
- Placeholder.co for placeholder images

## License

This project is released under the MIT License.

---

Feel free to use this portfolio template for your personal or professional use. If you use it publicly, attribution is appreciated but not required! 