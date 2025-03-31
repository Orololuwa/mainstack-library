import React from "react";

interface ArrowUpIconProps {
  color?: string;
  className?: string;
}

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({
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
        d="M0.999837 11.5833L0.416504 11L10.4998 0.916677H4.4165V0.0833435H11.9165V7.58334H11.0832V1.50001L0.999837 11.5833Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
