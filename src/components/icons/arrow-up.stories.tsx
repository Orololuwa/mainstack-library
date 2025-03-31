import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUpIcon as Arrow } from "./arrow-up";

const meta: Meta<typeof Arrow> = {
  title: "Icons/Arrow-Up",
  component: Arrow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
