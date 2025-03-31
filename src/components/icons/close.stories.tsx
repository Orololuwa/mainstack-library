import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon as Close } from "./close";

const meta: Meta<typeof Close> = {
  title: "Icons/Close",
  component: Close,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Close>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
