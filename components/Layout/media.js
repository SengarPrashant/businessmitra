
import { useState, useEffect } from 'react';

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    sm:false,
    md:false,
    lg:false,
    xl:false,
    xxl:false
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          sm:window.innerWidth<device.md,
          md:window.innerWidth<device.lg && window.innerWidth >= device.md,
          xl:window.innerWidth<device.xxl && window.innerWidth >= device.xl,
          xxl:window.innerWidth >= device.xxl,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const device={
    xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl:1400
}
