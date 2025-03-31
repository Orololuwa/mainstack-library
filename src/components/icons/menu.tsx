import React from "react";

interface MenuIconProps {
  color?: string;
  className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ color, className }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 11.275C0.85 11.275 0.729333 11.225 0.638 11.125C0.546 11.025 0.5 10.9083 0.5 10.775C0.5 10.625 0.546 10.5043 0.638 10.413C0.729333 10.321 0.85 10.275 1 10.275H17C17.15 10.275 17.271 10.321 17.363 10.413C17.4543 10.5043 17.5 10.625 17.5 10.775C17.5 10.9083 17.4543 11.025 17.363 11.125C17.271 11.225 17.15 11.275 17 11.275H1ZM1 6.49998C0.85 6.49998 0.729333 6.44998 0.638 6.34998C0.546 6.24998 0.5 6.13331 0.5 5.99998C0.5 5.84998 0.546 5.72898 0.638 5.63698C0.729333 5.54564 0.85 5.49998 1 5.49998H17C17.15 5.49998 17.271 5.54998 17.363 5.64998C17.4543 5.74998 17.5 5.86664 17.5 5.99998C17.5 6.14998 17.4543 6.27098 17.363 6.36298C17.271 6.45431 17.15 6.49998 17 6.49998H1ZM1 1.72498C0.85 1.72498 0.729333 1.67898 0.638 1.58698C0.546 1.49564 0.5 1.37498 0.5 1.22498C0.5 1.09164 0.546 0.974976 0.638 0.874976C0.729333 0.774976 0.85 0.724976 1 0.724976H17C17.15 0.724976 17.271 0.774976 17.363 0.874976C17.4543 0.974976 17.5 1.09164 17.5 1.22498C17.5 1.37498 17.4543 1.49564 17.363 1.58698C17.271 1.67898 17.15 1.72498 17 1.72498H1Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
