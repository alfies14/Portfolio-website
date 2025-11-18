# Portfolio Website

A modern, creative portfolio website featuring light and dark mode, built with Tailwind CSS and SHADCN-inspired components.

## Features

- 🌓 **Light & Dark Mode** - Seamless theme switching with system preference detection
- 🎨 **Modern Design** - Clean, creative UI inspired by SHADCN design system
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast & Performant** - Built with Tailwind CSS for optimal performance
- 🎯 **Smooth Animations** - Engaging transitions and hover effects

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Theme management and interactivity
- **SHADCN-inspired** - Modern component design patterns

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/josuediazflores/Portfolio-website.git
cd Portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Build the CSS:
```bash
npm run build:css
```

4. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

### Development

Watch for CSS changes during development:
```bash
npm run watch:css
```

Build for production:
```bash
npm run build
```

## Project Structure

```
Portfolio-website/
├── index.html              # Main portfolio page
├── src/
│   ├── input.css          # Tailwind source CSS
│   ├── output.css         # Compiled CSS (generated)
│   └── theme.js           # Dark mode theme management
├── package.json            # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── apple/                 # Apple logo projects
├── career/                # Career and college planning content
├── currentevents/         # Climate change content
├── icons/                 # Icon collection
├── navicons/             # Navigation icons
├── speed/                # Speedometer project
└── thumbnails/           # Project thumbnail images
```

## Projects Showcased

The portfolio includes a diverse range of interactive projects:

- **Apple Logos** - SVG-based Apple logo designs
- **Basketball** - 2D basketball game
- **Analog Clock** - Interactive analog clock display
- **Random Circles** - Dynamic circle generation visualization
- **Resistor Calculator** - Tool for calculating resistor values using color codes
- **Tic Tac Toe** - Classic game implementation
- **Tiles** - Interactive tile-based project
- **Hex Color Maker** - Color picker and hex code generator
- **4kids** - Educational content for children
- **Speed-o-meter** - Speedometer visualization with audio
- **Icons** - Collection of custom SVG icons
- **Chocolate Molecule** - Molecular structure visualization
- **Chinese Zodiac** - Chinese zodiac sign calculator
- **Current Events** - Climate change information and visualizations
- **College Plans** - Career and educational planning content

## Customization

### Theme Colors

Edit the CSS variables in `src/input.css` to customize the color scheme:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --background: 0 0% 100%;
  /* ... more variables */
}
```

### Adding Projects

Add new project cards in the projects section of `index.html`:

```html
<a href="your-project.html" class="group">
  <div class="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div class="aspect-square mb-4 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
      <img src="thumbnails/your-thumbnail.png" alt="Project Name" class="w-24 h-24 object-contain">
    </div>
    <h3 class="text-xl font-semibold mb-2">Project Name</h3>
    <p class="text-sm text-muted-foreground">Project description</p>
  </div>
</a>
```

## Browser Support

This portfolio is designed to work with modern web browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- ES6 JavaScript
- Local Storage API

## License

This project is part of a personal portfolio.

## Contact

- **Email**: alfredorodriguez0704@gmail.com
- **GitHub**: [@alfies14](https://github.com/alfies14)
