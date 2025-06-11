import React from 'react';

interface SacredGeometryProps {
  type: 'mandala' | 'lotus' | 'yantra' | 'circle' | 'star';
  className?: string;
}

const SacredGeometry: React.FC<SacredGeometryProps> = ({ type, className = '' }) => {
  const renderGeometry = () => {
    switch (type) {
      case 'mandala':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.9" />
            <g stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.6">
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="5"
                  x2="50"
                  y2="95"
                  transform={`rotate(${i * 45} 50 50)`}
                />
              ))}
            </g>
            <g stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.1">
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={50 + 30 * Math.cos((i * 30 * Math.PI) / 180)}
                  cy={50 + 30 * Math.sin((i * 30 * Math.PI) / 180)}
                  r="3"
                />
              ))}
            </g>
          </svg>
        );
      
      case 'lotus':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.1">
              {[...Array(8)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="50"
                  cy="50"
                  rx="15"
                  ry="30"
                  transform={`rotate(${i * 45} 50 50)`}
                />
              ))}
            </g>
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        );
      
      case 'yantra':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.7"
            />
            <polygon
              points="50,90 10,10 90,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.7"
            />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.9" />
          </svg>
        );
      
      case 'circle':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </svg>
        );
      
      case 'star':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <polygon
              points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return renderGeometry();
};

export default SacredGeometry;