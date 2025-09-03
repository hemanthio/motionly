"use client"

import React from 'react';

interface TopBannerProps {
  text?: string;
  linkText?: string;
  href?: string;
  showCloseButton?: boolean;
  showLink : Boolean,
  onClose?: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({
  text = "Maintenance scheduled for tonight.",
  linkText = "View details",
  href = "#",
  showCloseButton = true,
  showLink = true,
  onClose
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const handleClose = (): void => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-purple-600 text-white py-3 px-4 relative">
      <div className="max-w-screen-xl mx-auto text-center">
        <span className="text-sm font-medium md:text-sm ">
          {text}
          {showLink && (
            <>
              {' '}
              <a 
                href={href} 
                className="text-purple-200 underline hover:no-underline transition-all duration-200"
              >
                {linkText}
              </a>
            </>
          )}
        </span>
      </div>
      
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-600 transition-colors duration-200"
          aria-label="Close banner"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TopBanner;