
'use client';
 
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function BootstrapProvider({ children }) {
  useEffect(() => { 
    if (typeof document !== 'undefined') {
      const { Tooltip, Popover } = require('bootstrap');
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new Tooltip(el));
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new Popover(el));
    }

    AOS.init({
      duration: 1500,  
      offset: 100,     
      once: false,      
    });
  }, []);

  return children;
}
