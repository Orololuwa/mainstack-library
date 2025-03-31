import type { Meta, StoryObj } from "@storybook/react";
import { MenuIcon as Menu } from "./menu";

const meta: Meta<typeof Menu> = {
  title: "Icons/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
