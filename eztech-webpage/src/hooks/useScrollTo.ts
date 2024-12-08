import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}
