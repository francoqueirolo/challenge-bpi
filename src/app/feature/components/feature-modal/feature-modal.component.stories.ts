import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureModalComponent } from './feature-modal.component';
import { actions } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FeatureModalComponent> = {
  title: 'Example/FeatureModalComponent',
  component: FeatureModalComponent,
  tags: ['autodocs'],
  render: (args: FeatureModalComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<FeatureModalComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    show: true,
    currentUser: {
      id: 1,
      name: 'Pikachu',
      email: 'nobody@example.com',
    },
  },
};
