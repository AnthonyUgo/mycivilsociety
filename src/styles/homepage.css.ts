// src/styles/homepage.css.ts
import { globalStyle } from '@vanilla-extract/css';

/* Reset & Base Styles */
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

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

/* Body */
globalStyle('body', {
  margin: 0,
  minWidth: '320px',
  minHeight: '100vh',
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
  padding: '15px 40px',
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
});

globalStyle('.nav-logo-icon', {
  height: '48px',
  width: 'auto',
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
});

globalStyle('.nav-links ul li a:hover', {
  color: '#bbdefb',
});

/* Hero Section */
globalStyle('.hero', {
  background: 'linear-gradient(to right, #0d47a1, #1976d2)',
  color: '#ffffff',
  textAlign: 'center',
  padding: '120px 20px',
});

globalStyle('.hero-center-logo', {
  height: '180px',
  width: 'auto',
  display: 'block',
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

/* Sections */
globalStyle('.section', {
  padding: '60px 20px',
  maxWidth: '1100px',
  margin: '40px auto',
  backgroundColor: '#ffffff',
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

/* Hamburger Button (default: hidden) */
globalStyle('.hamburger', {
  fontSize: '28px',
  background: 'none',
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  display: 'none', // hidden by default
  marginLeft: 'auto',
});

/* Show hamburger on smaller screens */
globalStyle('@media (max-width: 768px) .hamburger', {
  display: 'block',
});

globalStyle('@media (max-width: 768px) .nav-links', {
  display: 'none',
  width: '100%',
  flexDirection: 'column', // ensures it stacks vertically
});

globalStyle('@media (max-width: 768px) .nav-links.active', {
  display: 'flex', // changed from 'block' to 'flex'
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#0d47a1',
  padding: '10px 0',
});

globalStyle('@media (max-width: 768px) .nav-links ul', {
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  margin: 0,
  padding: 0,
});

globalStyle('@media (max-width: 768px) .nav-links ul li', {
  padding: '10px 0',
});
