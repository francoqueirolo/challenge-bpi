import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureCreateComponent } from './feature-create.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FeatureCreateComponent> = {
  title: 'Example/FeatureCreateComponent',
  component: FeatureCreateComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args: FeatureCreateComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<FeatureCreateComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Create: Story = {
  args: {},
};
