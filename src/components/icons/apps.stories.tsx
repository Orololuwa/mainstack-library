import type { Meta, StoryObj } from "@storybook/react";
import { Apps } from "./apps";

const meta: Meta<typeof Apps> = {
  title: "Icons/Apps",
  component: Apps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Apps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
