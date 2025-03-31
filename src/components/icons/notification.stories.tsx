import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./notification";

const meta: Meta<typeof Notification> = {
  title: "Icons/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
