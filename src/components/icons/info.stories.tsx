import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon as Info } from "./info";

const meta: Meta<typeof Info> = {
  title: "Icons/Info",
  component: Info,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
