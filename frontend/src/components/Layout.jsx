import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import MatrixBackground from './MatrixBackground';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { useIsTouchDevice } from './MobileTouch'; 
import Chatbot from './sections/Chatbot';

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {!isTouchDevice && <CustomCursor />}
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