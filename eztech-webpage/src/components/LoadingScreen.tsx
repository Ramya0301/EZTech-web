import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showTagline, setShowTagline] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let currentProgress = 0;

    // Simulate loading progress
    progressInterval = setInterval(() => {
      if (currentProgress < 100) {
        // Slow down progress as it gets closer to 100%
        const increment = Math.max(1, (100 - currentProgress) / 20);
        currentProgress = Math.min(99, currentProgress + increment);
        setProgress(currentProgress);
      }
    }, 50);

    // Show tagline after 1 second
    const taglineTimer = setTimeout(() => setShowTagline(true), 1000);

    // Force complete after 5 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
      
      // Add small delay before hiding loading screen
      setTimeout(() => setIsLoading(false), 500);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(taglineTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] tech-background overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute inset-0 hex-grid" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Logo Container */}
        <div className="logo-container mb-8">
          <div className="logo-outline" />
          <div className="logo-trail" />
          <h1 className="logo-text">
            EZ TECH
          </h1>
        </div>

        {/* Tagline */}
        <p className={`tagline max-w-2xl text-center px-4 ${showTagline ? 'opacity-100' : 'opacity-0'}`}>
          {language === 'en'
            ? "Ready to elevate your business with next-level technology?"
            : "Готовы вывести свой бизнес на новый уровень с передовыми технологиями?"}
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/30 backdrop-blur-sm">
        <div 
          className="progress-bar h-full"
          style={{ width: `${progress}%` }}
        />
        
        {/* Progress Percentage */}
        <div 
          className="progress-text absolute bottom-4 left-1/2 -translate-x-1/2"
          style={{ 
            opacity: progress < 100 ? 1 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* Page Transition Layer */}
      <div 
        className="absolute inset-0 page-transition"
        style={{
          opacity: progress === 100 ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      />
    </div>
  );
}
