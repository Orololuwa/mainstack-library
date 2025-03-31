import type { Meta, StoryObj } from "@storybook/react";
import { ArrowDownIcon as Arrow } from "./arrow-down";

const meta: Meta<typeof Arrow> = {
  title: "Icons/Arrow-Down",
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
