import React, { useState, useEffect } from 'react';
import smallImage from '../Assets/Meditation Pic450.png';
import largeImage from '../Assets/Meditation Pic900.png';

function ResponsiveImage() {
  const [currentImage, setCurrentImage] = useState(getImageSrc(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setCurrentImage(getImageSrc(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getImageSrc(windowWidth) {
    if (windowWidth < 600) {
      return smallImage;
    } else {
      return largeImage;
    }
  }

  return (
    <img src={currentImage} alt="Responsive" />
  );
}

export default ResponsiveImage;
