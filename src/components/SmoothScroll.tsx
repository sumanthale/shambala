import React, { useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={scrollRef} className="relative">
      {children}
    </div>
  );
};

export default SmoothScroll;