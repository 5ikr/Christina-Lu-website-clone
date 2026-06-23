import React, { useState } from 'react';
import './ExternalLink.css';

// 1. Ensure curly braces are around the parameters
const ExternalLink = ({ href, children, tooltipText }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <span className="tooltip-wrapper">
      <a
        href={href}
        className="project-link-underlined"
        onMouseEnter={() => setIsVisible(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </a>

      <span
        className={`custom-tooltip ${isVisible ? 'visible' : ''}`}
        style={{
          '--mouse-x': `${coords.x}px`,
          '--mouse-y': `${coords.y}px`
        }}
      >
        {/* 2. Must be wrapped in curly brackets without quotes */}
        {tooltipText} 
      </span>
    </span>
  );
};

export default ExternalLink;