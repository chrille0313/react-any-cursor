import { createContext, PropsWithChildren, StyleHTMLAttributes } from 'react';

export interface CursorCoordinates {
  x: number;
  y: number;
}

export interface CursorState {
  coords: CursorCoordinates;
  isPressing: boolean;
}

export const CursorContext = createContext<CursorState>({
  coords: { x: 0, y: 0 },
  isPressing: false
});

export interface CursorProps extends PropsWithChildren<StyleHTMLAttributes<HTMLElement>> {}

export interface CursorScaleProps {
  scaleOnPress?: number;
}

export interface CursorAlphaProps {
  alpha?: number;
  alphaOnPress?: number;
}
