import type { Meta, StoryObj } from "@storybook/react";
import RadioDropdown from ".";

const meta: Meta<typeof RadioDropdown> = {
  title: "Components/RadioDropdown",
  component: RadioDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioDropdown>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export const Default: Story = {
  args: {
    options: options,
    defaultSelectedOptions: [],
    onChange: (value) => console.log("Selected:", value),
    className: "w-60",
  },
};
