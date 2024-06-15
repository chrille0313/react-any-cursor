import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { useEventListener } from '../../hooks/useEventListener';
import { CursorContext, CursorState } from '../../types/Cursor';
import styles from './CursorComposite.module.css';

export interface CursorCompositeProps extends PropsWithChildren<{}> {}

export default function CursorComposite({ children }: CursorCompositeProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>({
    coords: { x: 0, y: 0 },
    isPressing: false
  });

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setState((prevState) => ({
      ...prevState,
      coords: { x: clientX, y: clientY }
    }));

    if (cursorRef.current !== null) {
      cursorRef.current.style.top = `${clientY}px`;
      cursorRef.current.style.left = `${clientX}px`;
    }
  }, []);

  const onMouseDown = useCallback(() => {
    setState((prevState) => ({ ...prevState, isPressing: true }));
  }, []);

  const onMouseUp = useCallback(() => {
    setState((prevState) => ({ ...prevState, isPressing: false }));
  }, []);

  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);

  return (
    <CursorContext.Provider value={state}>
      <div ref={cursorRef} className={styles.CursorRoot}>
        {children}
      </div>
    </CursorContext.Provider>
  );
}
