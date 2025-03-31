import type { Meta, StoryObj } from "@storybook/react";
import { RevenueIcon as Revenue } from "./revenue";

const meta: Meta<typeof Revenue> = {
  title: "Icons/Revenue",
  component: Revenue,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Revenue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
