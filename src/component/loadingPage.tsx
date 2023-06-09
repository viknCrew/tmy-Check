import React from "react";
import Coin from "../assets/logo.svg";

export default function LoadingPage() {
  return (
    <div className="bg-[#343443]">
      <div className="flex h-screen items-center justify-center">
        <div className="animation-pulse flex h-40 w-40 items-center justify-center rounded-full bg-[#6D00F3]">
          <svg
            width="70"
            height="70"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.9 4.03231H17.138V11.9053L19.038 13.0288L20.8962 11.9053V4.03231H20.9ZM0 0V4.03231H38V0H0Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 16.4558L34.5534 6.9585H38V36.8133H34.5534V11.6396L19 21.1369L3.5644 11.6396V36.8133H0V6.9585H3.4656L19 16.4558Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0234 25.9744L31.6622 18.1057L31.6888 22.7694L20.912 29.4754V36.8172H17.1538V29.4885L6.30859 22.739L6.33899 18.0796L19.0234 25.9744Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
