import CircleCursorElement from '@components/CircleCursorElement';
import CursorComposite from '@components/CursorComposite';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  component: CircleCursorElement,
  title: 'CircleCursorElement',
  decorators: [
    (Story) => {
      return (
        <CursorComposite>
          <Story />
        </CursorComposite>
      );
    }
  ],
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof CircleCursorElement>;

export default meta;
type Story = StoryObj<typeof CircleCursorElement>;

export const Default = {
  args: {
    radius: 8,
    scaleOnPress: 0.6
  }
} satisfies Story;
