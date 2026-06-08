import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

// Show scrollbar only when mouse is within 20px of the right edge
document.addEventListener('mousemove', (e) => {
  const threshold = 20; // px from right edge
  const nearRight = e.clientX >= window.innerWidth - threshold;
  document.body.classList.toggle('show-scrollbar', nearRight);
});

// Hide when mouse leaves the window
document.addEventListener('mouseleave', () => {
  document.body.classList.remove('show-scrollbar');
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
