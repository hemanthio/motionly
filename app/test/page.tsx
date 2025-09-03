"use client"

import React, { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
  target: number;
  duration?: number; // duration in seconds
  startOnMount?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  onComplete?: () => void;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  target = 200,
  duration = 2,
  startOnMount = true,
  prefix = "$",
  suffix = "%",
  decimals = 0,
  className = "",
  onComplete
}) => {
  const [count, setCount] = useState<number>(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = () => {
    setCount(0);
    startTimeRef.current = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = (now - (startTimeRef.current || 0)) / 1000; // seconds
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = target * easeProgress;
      setCount(currentCount);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        if (onComplete) onComplete();
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, startOnMount]);

  const formatNumber = (num: number): string => {
    return num.toFixed(decimals);
  };

  return (
    <div className={`font-mono text-4xl font-regular ${className}`}>
      <span className="tabular-nums">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </div>
  );
}; 

export default NumberCounter;
