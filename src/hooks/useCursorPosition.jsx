import { useEffect, useState } from 'react';

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    const cursorHandler = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ clientX, clientY });
    };

    document.addEventListener('mousemove', cursorHandler);

    return () => {
      document.removeEventListener('mousemove', cursorHandler);
    };
  }, []);

  return cursorPosition;
};

export default useCursorPosition;
