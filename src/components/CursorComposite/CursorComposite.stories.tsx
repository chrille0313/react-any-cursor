import React from 'react';
import CircleCursorElement from '../CircleCursorElement';
import CursorComposite from './CursorComposite';

export const ActionsData = {
  // onMouseMove: fn(),
  // onMouseDown: fn(),
  // onMouseUp: fn(),
};

export default {
  component: CursorComposite,
  title: 'CursorComposite',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
};

export const Circle = {
  args: {
    children: (
      <>
        <CircleCursorElement radius={10} color="#000000" />
        <CircleCursorElement radius={10} color="#000000" />
      </>
    )
  }
};
