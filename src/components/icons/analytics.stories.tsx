import type { Meta, StoryObj } from "@storybook/react";
import { Analytics } from "./analytics";

const meta: Meta<typeof Analytics> = {
  title: "Icons/Analytics",
  component: Analytics,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Analytics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
