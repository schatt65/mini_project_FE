// import { ISVGProps } from "@alinta-digital/asg";
import * as React from "react";

const MoveHomeIcon = (props: any): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="43"
      fill="none"
      viewBox="0 0 46 43"
      {...props}
    >
      <g
        stroke="#F26722"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M20 25.645a3.125 3.125 0 1 1 0-6.25 3.125 3.125 0 0 1 0 6.25ZM6.25 25.645a3.125 3.125 0 1 1 0-6.25 3.125 3.125 0 0 1 0 6.25Z" />
        <path d="M19.375 16.895V5.645a1.25 1.25 0 0 0-1.25-1.25H1.875a1.25 1.25 0 0 0-1.25 1.25v16.25h2.5M16.875 21.895h-5M25.625 23.145h2.5a1.25 1.25 0 0 0 1.25-1.25v-7.5a5 5 0 0 0-5-5h-5M29.375 20.645H25" />
        <path d="M29.375 15.02h-5a1.25 1.25 0 0 1-1.25-1.25V9.395" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M30 .02H0v30h30z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoveHomeIcon;
