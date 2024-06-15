import React, { useContext } from 'react';
import { CursorAlphaProps, CursorContext, CursorProps, CursorScaleProps } from '../../types/Cursor';

export interface CircleCursorElementProps extends CursorProps, CursorScaleProps, CursorAlphaProps {
  radius: number;
  color?: string;
}

export default function CircleCursorElement(props: CircleCursorElementProps) {
  const cursorState = useContext(CursorContext);

  let scale = (cursorState.isPressing && props.scaleOnPress) || 1;
  const radius = props.radius * scale;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      style={{
        pointerEvents: 'none'
      }}
    >
      <circle cx={radius} cy={radius} r={radius} fill={props.color} opacity={props.alpha} />
    </svg>
  );
}

CircleCursorElement.defaultProps = {
  color: '#000000',
  scaleOnPress: 0.6,
  scalePressRelativeToHover: true,
  alpha: 1,
  alphaOnPress: 1
};
