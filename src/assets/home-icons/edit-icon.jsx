import React from "react";

export const EditIcon = () => {
  return (
    <svg
      width={32.0}
      height={32.0}
      viewBox="0 0 32 32"
      fill="none"
    >
      <defs>
        <clipPath id="clip215_1854">
          <rect
            id="Корзина"
            width={20.0}
            height={20.0}
            transform="translate(6.000000 6.000000)"
            fill="white"
            fillOpacity={0}
          />
        </clipPath>
        <clipPath id="clip215_1857">
          <rect
            id="Корзина"
            width={16.0}
            height={16.0}
            transform="translate(8.000000 8.000000)"
            fill="white"
            fillOpacity={0}
          />
        </clipPath>
      </defs>
      <rect
        id="Background"
        rx={6.0}
        width={32.0}
        height={32.0}
        fill="#F7F7FF"
        fillOpacity={1.0}
      />
      <rect
        id="Корзина"
        width={16.0}
        height={16.0}
        transform="translate(8.000000 8.000000)"
        fill="#FFFFFF"
        fillOpacity={0}
      />
      <g clipPath="url(#clip215_1857)">
        <path
          id="round"
          d="M10 14L10 22.5C10 23.32 10.67 24 11.5 24L20.5 24C21.32 24 22 23.32 22 22.5L22 14L10 14Z"
          fill="#5B5CE2"
          fillOpacity={1.0}
          fillRule="nonzero"
        />
        <path
          id="Shape"
          d="M19 10L19 9C19 8.44 18.55 8 18 8L14 8C13.44 8 13 8.44 13 9L13 10L8.5 10C8.22 10 8 10.22 8 10.5L8 11.5C8 11.77 8.22 12 8.5 12L23.5 12C23.77 12 24 11.77 24 11.5L24 10.5C24 10.22 23.77 10 23.5 10L19 10Z"
          fill="#9999EE"
          fillOpacity={1.0}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};
