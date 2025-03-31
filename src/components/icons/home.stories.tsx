import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon as Home } from "./home";

const meta: Meta<typeof Home> = {
  title: "Icons/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
