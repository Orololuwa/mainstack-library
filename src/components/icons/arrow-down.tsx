import React from "react";

interface ArrowDownIconProps {
  color?: string;
  className?: string;
}

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  color,
  className,
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.25 11.75V4.25H1.08333V10.3333L11.1667 0.25L11.75 0.833333L1.66667 10.9167H7.75V11.75H0.25Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
