// src/styles/homepage.css.ts
import { globalStyle, style } from '@vanilla-extract/css';

/* Base Styles */
globalStyle('*', { margin: 0, padding: 0, boxSizing: 'border-box' });

globalStyle(':root', {
  fontFamily: 'Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
  color: '#212121',
  backgroundColor: '#ffffff',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  fontWeight: '500',
  color: '#0d47a1',
  textDecoration: 'none',
  transition: 'color 0.25s',
});

globalStyle('a:hover', {
  color: '#1976d2',
});


/* Apply doodle background ONLY to .background-wrapper */
globalStyle('.background-wrapper', {
  backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('/assets/mycivilsociety-doodle.png')
  `,
  backgroundRepeat: 'repeat',
  backgroundSize: '300px 300px',
  backgroundAttachment: 'scroll',
  backgroundBlendMode: 'overlay',
  '@media': {
    '(max-width: 768px)': {
      backgroundSize: '200px 200px',
    },
    '(min-width: 769px)': {
      backgroundSize: '300px 300px',
    },
  },
});

/* Body with background gradient + SVG overlay */
globalStyle('body', {
  margin: 0,
  minWidth: '320px',
  minHeight: '100vh',
  fontFamily: 'Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
  color: '#212121',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/assets/education-pattern.png')`,
  backgroundRepeat: 'repeat',
  backgroundSize: '200px 200px, 400px 400px, 400px 400px',  // different sizes for each layer
  backgroundAttachment: 'scroll',
  backgroundBlendMode: 'overlay',
  '@media': {
    '(max-width: 768px)': {
      backgroundSize: '150px 150px, 200px 200px, 200px 200px',
    },
    '(min-width: 769px)': {
      backgroundSize: '250px 250px, 300px 300px, 300px 300px',
    },
  },
});

/* Navbar */
globalStyle('.navbar', {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#0d47a1',
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',  // reduce excessive spacing
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
});

/* Logo */
globalStyle('.nav-logo-icon', {
  height: '54px',
  width: '54px', // keep square for circular container
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
  border: '1px solid #bbdefb', // subtle border in brand accent
  borderRadius: '50%',
  padding: '6px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)', // softer shadow
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
});

globalStyle('.nav-logo-icon:hover', {
  transform: 'scale(1.05)',
});


globalStyle('.nav-links ul', {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
});

globalStyle('.nav-links ul li a', {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'color 0.3s ease',
});

globalStyle('.nav-links ul li a:hover', {
  color: '#bbdefb',
});


// Mobile Hamburger Button Section

// Hide nav-links by default on mobile
globalStyle('.nav-links', {
  display: 'none',
  '@media': {
    '(min-width: 769px)': {
      display: 'flex',
    },
    '(max-width: 768px)': {
      display: 'none',  // default on mobile
      position: 'absolute',
      top: '60px',
      right: '0',
      backgroundColor: '#0d47a1',
      width: '200px',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      zIndex: 999,
    },
  },
});


// Show nav-links when active
globalStyle('.nav-links.active', {
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
    },
  },
});

// Show nav-links when active
globalStyle('.hamburger', {
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
      fontSize: '28px',
      background: 'none',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      marginLeft: 'auto',
      zIndex: 1100,
    },
  },
});

// Stack nav-links vertically
globalStyle('.nav-links ul', {
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      margin: '0',
      padding: '0',
    },
  },
});

// Nav-links list item spacing
globalStyle('@media (max-width: 768px) and (min-width: 0px) .nav-links ul li', {
  padding: '10px 0',
});

/* Hero Section */
globalStyle('.hero', {
  background: 'linear-gradient(to right, #0d47a1, #1976d2)',
  color: '#ffffff',
  textAlign: 'center',
  padding: '120px 20px',
});

globalStyle('.hero-center-logo', {
  height: '240px',
  width: 'auto',
  display: 'inline-block',
  backgroundColor: 'rgba(255, 255, 255, 0.15)', // lighter background for subtlety
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.3)', // subtle border instead of heavy shadow
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // lighter shadow
  margin: '0 auto 20px',
});


globalStyle('.hero h1', {
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: '15px',
});

globalStyle('.hero p', {
  fontSize: '1.2rem',
  maxWidth: '600px',
  margin: '0 auto 25px',
});

/* Buttons */
globalStyle('.btn-primary', {
  backgroundColor: '#ffffff',
  color: '#0d47a1',
  padding: '12px 28px',
  borderRadius: '6px',
  fontWeight: 600,
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background-color 0.3s ease',
  marginTop: '20px',
});

globalStyle('.btn-primary:hover', {
  backgroundColor: '#bbdefb',
});

globalStyle('.btn-secondary', {
  backgroundColor: '#0d47a1',
  color: '#ffffff',
  padding: '12px 28px',
  borderRadius: '6px',
  fontWeight: 600,
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background-color 0.3s ease',
  marginTop: '20px',
});

globalStyle('.btn-secondary:hover', {
  backgroundColor: '#1565c0',
});

/* .section background semi-transparent */
globalStyle('.section', {
  backgroundColor: 'rgba(255, 255, 255, 0.95)', // 95% white
  padding: '60px 20px',
  maxWidth: '1100px',
  margin: '40px auto',
  borderRadius: '12px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
});


globalStyle('.section h2', {
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#0d47a1',
  textAlign: 'center',
});

globalStyle('.section p', {
  fontSize: '1.1rem',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 20px',
});

/* Cards */
globalStyle('.cards', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginTop: '30px',
});

globalStyle('.card', {
  background: '#e3f2fd',
  borderLeft: '6px solid #0d47a1',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'left',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
});

globalStyle('.card h3', {
  fontSize: '1.3rem',
  marginBottom: '10px',
  color: '#0d47a1',
});

/* Footer */
globalStyle('footer', {
  backgroundColor: '#0d47a1',
  color: '#ffffff',
  textAlign: 'center',
  padding: '20px 10px',
  fontSize: '0.9rem',
});

/* Testimonials */
globalStyle('.light', {
  backgroundColor: '#f1faff',
});

globalStyle('blockquote', {
  fontStyle: 'italic',
  margin: '15px auto',
  maxWidth: '700px',
  color: '#333',
  borderLeft: '4px solid #0d47a1',
  paddingLeft: '20px',
});

/* Slideshow Styles (Targeted) */
globalStyle('.slider', {
  width: '100%',
  overflow: 'hidden',
  marginTop: '20px',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

globalStyle('.slider-wrapper', {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
});

globalStyle('.slide', {
  flex: '0 0 100%',
});

globalStyle('.slide img', {
  display: 'block',
  width: '100%',
  maxHeight: '400px',     // limit the height of images
  objectFit: 'cover',     // keeps images from stretching and crops nicely
  borderRadius: '12px',   // soft edges
  boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
});

/* Meet Our Staff Section (Targeted) */
globalStyle('#meet-our-staff .staff-grid', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px',
});

globalStyle('#meet-our-staff .staff-card', {
  background: '#e3f2fd',
  borderLeft: '6px solid #0d47a1',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  width: '250px',
});

globalStyle('#meet-our-staff .staff-card img', {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  objectPosition: 'center 20%',  // move the focus downward
  marginBottom: '15px',
});

/* Careers Page Hero (Targeted) */
globalStyle('.hero-careers', {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/staff-foto.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center 20%', // shifted lower
  backgroundRepeat: 'no-repeat',
  color: '#ffffff',
  textAlign: 'center',
  padding: '120px 20px',
});

globalStyle('.hero-careers h1', {
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: '15px',
  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)', // thicker and more fade
  opacity: 0.95, // slight fade for blending
});

globalStyle('.hero-careers p', {
  fontSize: '1.2rem',
  maxWidth: '600px',
  margin: '0 auto 25px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // consistent with h1
  opacity: 0.9, // slight fade
});


globalStyle('.hero-careers .hero-content', {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',  // white with 20% opacity
  borderRadius: '12px',
  padding: '20px',
  display: 'inline-block',
});

globalStyle('.swiper', {
  width: '100%',
  maxWidth: '1100px',
  margin: '20px auto',
});

globalStyle('.swiper-slide img', {
  display: 'block',
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
});


// Dummy export to force CSS generation
export const dummy = style({});