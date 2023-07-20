import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { FeatureSearchComponent } from './feature-search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FeatureSearchComponent> = {
  title: 'BPI/FeatureSearchComponent',
  component: FeatureSearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
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
