import { useEffect, useState } from 'react';

export function useRotatingText(values, interval = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % values.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, values.length]);

  return values[index];
}
