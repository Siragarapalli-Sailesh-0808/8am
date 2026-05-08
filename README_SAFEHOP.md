# SAFEHOP Landing Page

A premium, high-end landing page for SAFEHOP - India's #1 Student Mobility Platform featuring GPS bus tracking and RFID student notifications.

## Features

✨ **Visual Excellence**
- Split-diagonal hero section with golden yellow accent (#FFD700)
- Sticky header with glassmorphism effect
- Animated scrolling ticker with key features
- Smooth fade-in-up animations for all hero elements

🎨 **Design Specs**
- **Primary Color**: Vibrant Golden Yellow (#FFD700)
- **Secondary Color**: Pure White (#FFFFFF)
- **Accent Color**: Charcoal Grey (#2D2D2D)
- **Typography**: Montserrat (Bold) for headlines, Inter for body text
- **Mobile-First**: Fully responsive design

⚡ **Tech Stack**
- Next.js 14+ with App Router
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- TypeScript for type safety

## Components

### 1. ScrollingTicker
- Horizontal marquee with key messages
- Infinite scroll animation
- Persistent branding messages

### 2. StickyHeader
- Fixed navigation bar
- Logo with golden highlight
- Centered menu links with hover animations
- Yellow pill-shaped "Get Started" CTA button
- Glassmorphic effect on scroll

### 3. HeroSection
- Responsive split layout
- "India's #1 Mobility Platform" badge
- Multi-line headline with italic styling
- Professional subtext
- Prominent CTA button with icon
- Trust statistics (15+ Cities, 50K+ Students, 99.9% Uptime)
- Animated diagonal shape with decorative elements

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
cd safehop
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with font imports
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── ScrollingTicker.tsx # Top scrolling marquee
│   ├── StickyHeader.tsx    # Navigation header
│   └── HeroSection.tsx     # Main hero section
```

## Customization

### Colors
Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary: #FFD700;      /* Golden Yellow */
  --color-secondary: #FFFFFF;    /* White */
  --color-accent: #2D2D2D;       /* Charcoal Grey */
}
```

### Content
- **Ticker items**: Edit `src/components/ScrollingTicker.tsx`
- **Menu links**: Update in `src/components/StickyHeader.tsx`
- **Hero content**: Modify `src/components/HeroSection.tsx`

### Typography
Fonts are imported in `src/app/layout.tsx`:
- Montserrat for headlines
- Inter for body text

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized with Turbopack
- Static page pre-rendering
- Minimal JavaScript bundle
- Framer Motion animations use GPU acceleration

## License
Proprietary - SAFEHOP
