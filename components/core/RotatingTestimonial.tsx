"use client"

import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string; // 
}

interface TestimonialProps {
  testimonials?: Testimonial[];
  autoRotate?: boolean;
  interval?: number; 
  showDots?: boolean;
  className?: string;
}

const RotatingTestimonial: React.FC<TestimonialProps> = ({
  testimonials = [
    {
      quote: "With Qonto, we can create accounts for each team and assign them a budget. This way, we keep track of all expenses and save time.",
      author: "Alvaro Patón",
      title: "CFO",
      company: "Morrison Shoes",
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      quote: "The platform has revolutionized how we manage our finances. The automation features have saved us countless hours each month.",
      author: "Sarah Chen",
      title: "Finance Director",
      company: "TechFlow Solutions",
      image: "https://i.pravatar.cc/100?img=2"
    },
    {
      quote: "Outstanding customer support and intuitive interface. Our team adopted it within days, and we've seen immediate improvements in our workflow.",
      author: "Michael Rodriguez",
      title: "Operations Manager",
      company: "GreenLeaf Industries",
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      quote: "The real-time reporting and analytics give us insights we never had before. It's transformed our decision-making process completely.",
      author: "Emma Thompson",
      title: "CEO",
      company: "InnovateCorp",
      image: "https://i.pravatar.cc/100?img=4"
    }
  ],
  autoRotate = true,
  interval = 3000,
  showDots = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % testimonials.length
        );
        setIsAnimating(false);
      }, 150); 
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`max-w-2xl  px-6 py-12 text-center ${className}`}>
      {/* Quote */}
      <div 
        className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      >
        <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-normal mb-8">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex flex-col items-center gap-3">
          {currentTestimonial.image && (
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
          )}
          <div className="text-gray-600">
            <span className="block font-semibold text-black">
              {currentTestimonial.author}
            </span>
            <span className="text-gray-500 text-sm">
              {currentTestimonial.title} at {currentTestimonial.company}
            </span>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      {showDots && testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gray-800 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default RotatingTestimonial;
