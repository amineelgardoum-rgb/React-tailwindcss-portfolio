import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import MatrixBackground from './MatrixBackground';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { useIsTouchDevice } from './MobileTouch'; // Assuming this is a hook that returns a boolean
import Chatbot from './sections/Chatbot';

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 1. Get the boolean value from the hook
  const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {/* 2. Conditionally render the cursor. 
          If it's NOT a touch device, render CustomCursor. */}
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