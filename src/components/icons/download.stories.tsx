import type { Meta, StoryObj } from "@storybook/react";
import { DownloadIcon as Download } from "./download";

const meta: Meta<typeof Download> = {
  title: "Icons/Download",
  component: Download,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Download>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
