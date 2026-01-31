import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomCursor } from './CustomCursor';
import MatrixBackground from './MatrixBackground';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { useIsTouchDevice } from './MobileTouch'; 
import { Background } from './Background';


export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="relative min-h-screen">
      {!isTouchDevice && <CustomCursor />}
      <Background />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};