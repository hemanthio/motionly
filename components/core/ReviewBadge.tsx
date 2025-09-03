"use client"

import React from 'react';

interface ReviewBadgeProps {
  rating?: number;
  reviewCount?: number;
  profileImages?: string[];
  maxVisibleProfiles?: number;
  className?: string;
}

const ReviewBadge: React.FC<ReviewBadgeProps> = ({
  rating = 4.0,
  reviewCount = 167000,
  profileImages = [
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"
  ],
  maxVisibleProfiles = 3,
  className = ""
}) => {
  const formatReviewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}k`;
    }
    return count.toString();
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
            <path fill="currentColor" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  const visibleImages = profileImages.slice(0, maxVisibleProfiles);

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-lg  text-black ${className}`}>
      {/* Profile Images */}
      <div className="flex -space-x-2">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
            style={{ zIndex: visibleImages.length - index }}
          >
            <img
              src={image}
              alt={`Reviewer ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rating + Stars + Reviews */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-bold text-lg">{rating.toFixed(1)}</span>
          <div className="flex items-center">{renderStars()}</div>
        </div>
        <span className="text-sm text-gray-400">
          {formatReviewCount(reviewCount)} Reviews
        </span>
      </div>
    </div>
  );
};

export default ReviewBadge;
