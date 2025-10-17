import { useState, useEffect } from "react";

const useWindowSize = () => {
  const getSize = () => ({
    isMobile: window.innerWidth <= 1199,
    isTab: window.innerWidth >= 768 && window.innerWidth <= 1024,
    isMedium: window.innerWidth > 1199 && window.innerWidth <= 1440,
    isMediumPlus: window.innerWidth > 1440 && window.innerWidth < 1920,
    isLarge: window.innerWidth >= 1920,
  });

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
