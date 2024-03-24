import { useEffect, useRef } from "react";

export const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observerRef.current = observer;

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget && observerRef.current) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, []);

  return targetRef;
};
