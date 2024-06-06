import { useEffect } from 'react';

export const useKeyboardEvents = (ref: React.RefObject<HTMLElement>, cb: () => void) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        cb();
      }
    };

    const handleClickAway = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e?.target as Node)) {
        cb();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [ref, cb]);
};
