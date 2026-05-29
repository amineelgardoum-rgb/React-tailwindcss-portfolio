import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomCursor } from '../ui/CustomCursor';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { useIsTouchDevice } from '../ui/MobileTouch'; 
import { Background } from '../ui/Background';

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="relative min-h-screen w-full">
      {!isTouchDevice && <CustomCursor />}
      <Background />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative z-10 w-full pt-16">
        <Outlet />
      </main>
    </div>
  );
};
