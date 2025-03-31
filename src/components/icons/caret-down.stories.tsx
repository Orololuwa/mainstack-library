import type { Meta, StoryObj } from "@storybook/react";
import { CaretDownIcon as CaretDown } from "./caret-down";

const meta: Meta<typeof CaretDown> = {
  title: "Icons/CaretDown",
  component: CaretDown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaretDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#131316",
  },
};
