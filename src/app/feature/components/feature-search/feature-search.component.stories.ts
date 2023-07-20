import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureSearchComponent } from './feature-search.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FeatureSearchComponent> = {
  title: 'Example/FeatureSearchComponent',
  component: FeatureSearchComponent,
  tags: ['autodocs'],
  render: (args: FeatureSearchComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<FeatureSearchComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {},
};
