"use client";

import { useState } from 'react';
import { Code } from 'lucide-react';

interface TechIconProps {
  logoKey: string;
  name: string;
  className?: string;
}

export function TechIcon({ logoKey, name, className = "h-5 w-5" }: TechIconProps) {
  const [imageError, setImageError] = useState(false);
  
  // Try several icon variations in case some don't exist
  const getIconUrl = () => {
    // For special cases
    if (logoKey === 'nextjs') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
    if (logoKey === 'tailwindcss') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg';
    
    // Standard path
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
  };
  
  // Fallbacks for when original icon doesn't exist
  const getFallbackUrl = () => {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;
  };
  
  if (imageError) {
    return <div className={`${className} flex items-center justify-center bg-primary/10 text-primary rounded`}>
      <Code className="h-3 w-3" />
    </div>;
  }
  
  return (
    <img 
      src={getIconUrl()}
      alt={`${name} logo`}
      className={`${className} object-contain`}
      onError={(e) => {
        const target = e.currentTarget;
        // Try plain version as fallback
        if (target.src !== getFallbackUrl()) {
          target.src = getFallbackUrl();
        } else {
          // If both fail, show fallback element
          setImageError(true);
        }
      }}
    />
  );
}