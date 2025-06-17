export function throttle<T extends unknown[]>(func: (...args: T) => void, delay: number): (...args: T) => void {
  let lastCall = 0;
  return (...args: T) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}