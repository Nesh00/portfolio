import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import '../css/Cursor.css';
import useCursorPosition from '../hooks/useCursorPosition';

const Cursor = () => {
  const { clientX, clientY } = useCursorPosition();
  const { cursorType } = useContext(CursorContext);

  return (
    <>
      <div
        style={{ left: `${clientX}px`, top: `${clientY}px` }}
        className={'cursor1 ' + cursorType}
      ></div>
      <div
        style={{ left: `${clientX}px`, top: `${clientY}px` }}
        className={'cursor2 ' + cursorType}
      ></div>
    </>
  );
};

export default Cursor;
