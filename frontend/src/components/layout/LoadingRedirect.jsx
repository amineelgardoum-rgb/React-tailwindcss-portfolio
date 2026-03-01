import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingScreen } from './LoadingScreen';

/**
 * A component that displays a loading screen and then redirects to a specified path.
 * @param {{ redirectTo: string }} props
 */
export const LoadingRedirect = ({ redirectTo }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // This function will be called by LoadingScreen when its animation is done
  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  // When loadingComplete becomes true, this component will re-render
  // and instead of showing the LoadingScreen, it will render the <Navigate> component.
  if (loadingComplete) {
    // The <Navigate> component from react-router-dom programmatically changes the URL.
    // `replace` is used to prevent the user from clicking "back" to the loading screen.
    return <Navigate to={redirectTo} replace />;
  } else {
    // While loading is not complete, show the loading screen.
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
};