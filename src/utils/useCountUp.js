import { useEffect, useRef, useState } from 'react';

export function useCountUp(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1100;

        const frame = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return [ref, value];
}
