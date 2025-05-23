import React from "react";

interface DownloadIconProps {
  color?: string;
  className?: string;
}

export const DownloadIcon: React.FC<DownloadIconProps> = ({
  color,
  className,
}) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.00008 9.6875L3.04175 6.75L3.64591 6.14583L5.58341 8.08333V0.875H6.41675V8.08333L8.35425 6.14583L8.95842 6.75L6.00008 9.6875ZM1.52091 12.8333C1.13203 12.8333 0.809248 12.705 0.552581 12.4483C0.295359 12.1911 0.166748 11.8681 0.166748 11.4792V9.5H1.00008V11.4792C1.00008 11.6181 1.0523 11.7394 1.15675 11.8433C1.26064 11.9478 1.38203 12 1.52091 12H10.4792C10.6181 12 10.7395 11.9478 10.8434 11.8433C10.9479 11.7394 11.0001 11.6181 11.0001 11.4792V9.5H11.8334V11.4792C11.8334 11.8681 11.7051 12.1911 11.4484 12.4483C11.1912 12.705 10.8681 12.8333 10.4792 12.8333H1.52091Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
