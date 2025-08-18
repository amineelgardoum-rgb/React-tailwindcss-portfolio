import React, { useState } from 'react'; // 1. Import useState
import { Outlet } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import MatrixBackground from './MatrixBackground';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu'; 
import Chatbot from './sections/Chatbot';

export const Layout = () => {
  // 2. Define the state here, in the common parent component
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <MatrixBackground />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Outlet />
      </main>
      <Chatbot />
    </>
  );
};