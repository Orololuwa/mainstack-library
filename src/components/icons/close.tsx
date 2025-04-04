import React from "react";

interface CloseIconProps {
  color?: string;
  className?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ color, className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.39995 13.3L0.699951 12.6L6.29995 7.00001L0.699951 1.40001L1.39995 0.700012L6.99995 6.30001L12.6 0.700012L13.3 1.40001L7.69995 7.00001L13.3 12.6L12.6 13.3L6.99995 7.70001L1.39995 13.3Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
