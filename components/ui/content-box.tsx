'use client'

import React from 'react';
import styles from '@/app/globals.module.css';

interface ContentBoxProps {
  children: React.ReactNode;
  animationDelay?: string;
  className?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, className, animationDelay = '0.2s' }) => {
  return (
    <div 
      className={`w-full h-full ${styles.contentAnimation} ${className}`} 
      style={{ animationDelay }}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl h-full flex flex-col">
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;

