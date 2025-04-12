// SmoothScrollWrapper.jsx
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.07, // lower = smoother, slower
      alwaysShowTracks: true,
    });

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <div>{children}</div>
    </div>
  );
};

export default SmoothScrollWrapper;
