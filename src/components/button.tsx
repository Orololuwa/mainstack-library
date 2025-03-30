import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button as HeadlessButton } from "@headlessui/react";
import { AiOutlineLoading } from "react-icons/ai";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold border rounded-[6px] transition-all duration-150 focus:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover border-primary",
        secondary:
          "bg-white text-gray-700 hover:bg-gray-100 border-gray-400 shadow-sm",
        danger: "bg-red-600 text-white hover:bg-red-700",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
      },
      size: {
        sm: "px-2 py-1.5 text-sm",
        md: "px-4 py-2.5 text-base",
        lg: "px-6 py-3.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant,
  size,
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <HeadlessButton
      className={twMerge(buttonVariants({ variant, size }), className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <AiOutlineLoading className="animate-spin mr-2 h-5 w-5" />
      ) : (
        children
      )}
    </HeadlessButton>
  );
};
