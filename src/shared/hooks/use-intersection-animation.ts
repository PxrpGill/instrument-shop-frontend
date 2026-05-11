'use client';

import { type MutableRefObject, useEffect } from 'react';

export function useIntersectionAnimation(
  ref: MutableRefObject<HTMLElement | null>,
  visibleClass: string
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(visibleClass);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, visibleClass]);
}
