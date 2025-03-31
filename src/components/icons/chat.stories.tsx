import type { Meta, StoryObj } from "@storybook/react";
import { ChatIcon as Chat } from "./chat";

const meta: Meta<typeof Chat> = {
  title: "Icons/Chat",
  component: Chat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
