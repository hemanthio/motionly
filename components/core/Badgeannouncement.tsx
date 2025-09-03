"use client"

import React from "react";

interface BadgeAnnouncementProps {
  badgeText?: string;
  announcementText?: string;
  href?: string;
  showArrow?: boolean;
  showBadge?: boolean; 
  onClick?: () => void;
}

const BadgeAnnouncement: React.FC<BadgeAnnouncementProps> = ({
  badgeText = "NEW",
  announcementText = "Components are live on motionly",
  href = "#",
  showArrow = true,
  showBadge = true, 
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const content = (
    <div className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-full px-4 py-2 cursor-pointer group">
      {/* NEW Badge */}
      {showBadge && (
        <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
          {badgeText}
        </span>
      )}

      {/* Announcement Text */}
      <span className="text-purple-600 text-sm font-medium">
        {announcementText}
      </span>

      {/* Arrow */}
      {showArrow && (
        <svg
          className="w-4 h-4 text-purple-600 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </div>
  );

  if (href && href !== "#") {
    return (
      <a href={href} onClick={handleClick} className="inline-block">
        {content}
      </a>
    );
  }

  return <div onClick={handleClick}>{content}</div>;
};

export default BadgeAnnouncement;
