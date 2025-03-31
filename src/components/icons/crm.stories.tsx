import type { Meta, StoryObj } from "@storybook/react";
import { CRMIcon as CRM } from "./crm";

const meta: Meta<typeof CRM> = {
  title: "Icons/CRM",
  component: CRM,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CRM>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
