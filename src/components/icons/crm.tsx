import React from "react";

interface CRMProps {
  color?: string;
}

export const CRM: React.FC<CRMProps> = ({ color = "#131316" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M1.74438 14.1181C1.74438 13.6996 1.85075 13.3292 2.06347 13.0067C2.2762 12.6842 2.56568 12.432 2.93188 12.2499C3.70965 11.8712 4.49049 11.5787 5.27441 11.3722C6.05832 11.1657 6.91663 11.0625 7.84932 11.0625C8.78202 11.0625 9.63859 11.1657 10.419 11.3722C11.1995 11.5787 11.9804 11.8713 12.7618 12.25C13.1273 12.4332 13.4163 12.6859 13.6289 13.0081C13.8415 13.3303 13.9478 13.7004 13.9478 14.1186V14.6891C13.9478 15.0014 13.833 15.2765 13.6032 15.5143C13.3734 15.752 13.0943 15.8709 12.766 15.8709H2.92624C2.59789 15.8709 2.31883 15.7561 2.08905 15.5263C1.85927 15.2965 1.74438 15.0174 1.74438 14.6891V14.1181ZM17.0777 15.8709H15.2355C15.329 15.6909 15.4015 15.5017 15.4531 15.3031C15.5046 15.1046 15.5304 14.8999 15.5304 14.6891V14.0841C15.5304 13.5411 15.407 13.0235 15.1602 12.5315C14.9135 12.0396 14.551 11.6239 14.0729 11.2845C14.6023 11.3705 15.1056 11.496 15.583 11.661C16.0604 11.8261 16.5196 12.0248 16.9607 12.2572C17.373 12.4741 17.6926 12.7349 17.9194 13.0397C18.1461 13.3445 18.2595 13.6764 18.2595 14.0353V14.6866C18.2595 15.0173 18.1439 15.2974 17.9127 15.5268C17.6815 15.7562 17.4032 15.8709 17.0777 15.8709ZM7.84932 9.76038C7.06842 9.76038 6.40391 9.48633 5.8558 8.93824C5.3077 8.39013 5.03366 7.72562 5.03366 6.94472C5.03366 6.1638 5.3077 5.49929 5.8558 4.9512C6.40391 4.40308 7.06842 4.12903 7.84932 4.12903C8.63023 4.12903 9.29473 4.40308 9.84284 4.9512C10.3909 5.49929 10.665 6.1638 10.665 6.94472C10.665 7.72562 10.3909 8.39013 9.84284 8.93824C9.29473 9.48633 8.63023 9.76038 7.84932 9.76038ZM14.7419 6.93578C14.7419 7.7105 14.4678 8.37322 13.9197 8.92392C13.3716 9.47462 12.7071 9.74997 11.9262 9.74997C11.8477 9.74997 11.7434 9.74037 11.6135 9.72117C11.4835 9.70198 11.3765 9.68086 11.2924 9.65782C11.617 9.27824 11.8658 8.85659 12.0387 8.39288C12.2116 7.92917 12.298 7.44438 12.298 6.93851C12.298 6.43449 12.2091 5.95109 12.0312 5.4883C11.8533 5.02549 11.607 4.60098 11.2924 4.21476C11.3966 4.1763 11.5029 4.1524 11.6113 4.14305C11.7197 4.1337 11.8247 4.12903 11.9262 4.12903C12.7071 4.12903 13.3716 4.40385 13.9197 4.95351C14.4678 5.50316 14.7419 6.16392 14.7419 6.93578ZM2.91022 14.7051H12.782V14.1204C12.782 13.9429 12.7385 13.7859 12.6514 13.6494C12.5643 13.5129 12.4241 13.3926 12.2307 13.2884C11.5488 12.9391 10.8523 12.6751 10.1411 12.4964C9.42999 12.3177 8.66665 12.2283 7.85109 12.2283C7.03319 12.2283 6.26752 12.3177 5.55409 12.4964C4.84066 12.6751 4.14314 12.9391 3.46151 13.2884C3.26545 13.3926 3.12456 13.5132 3.03882 13.6502C2.95309 13.7872 2.91022 13.9436 2.91022 14.1194V14.7051ZM7.84803 8.59455C8.30295 8.59455 8.69186 8.43352 9.01478 8.11147C9.3377 7.78941 9.49916 7.40092 9.49916 6.94601C9.49916 6.49108 9.33813 6.10215 9.01607 5.77924C8.69402 5.45632 8.30553 5.29486 7.85061 5.29486C7.3957 5.29486 7.00678 5.45589 6.68386 5.77795C6.36095 6.1 6.19949 6.48849 6.19949 6.94342C6.19949 7.39834 6.36052 7.78726 6.68257 8.11017C7.00463 8.43309 7.39311 8.59455 7.84803 8.59455Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
