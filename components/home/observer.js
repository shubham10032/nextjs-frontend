import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const observerRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Call the callback function when the observed element intersects the viewport
        callback(entry.target, entry);
      }
    });
  };

  const observe = element => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, options);
    }

    observerRef.current.observe(element);
  };

  const unobserve = element => {
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [observe, unobserve];
};

export default useIntersectionObserver;
