import React from 'react';
import './Preloader.css';


const Preloader: React.FC = () => {
  React.useEffect(() => {
    // Preload critical hero mockup images
    const images = [
      '/assets/images/laptop mockup with screenshot.png',
      '/assets/images/mockup.png',
    ];
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);
  return (
    <div className="preloader">
      {/* Use the public path directly in the src attribute */}
      <img src="/assets/images/group3 logo.PNG" alt="Group3 Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
