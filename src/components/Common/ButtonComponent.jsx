import { Button } from "@material-tailwind/react";
import React from "react";

export const UploadButton = (props) => {
  const { children } = props;
  return (
    <div className="text-white">
      <Button
        variant="filled"
        className="flex justify-center items-center gap-3 bg-[#383C79] rounded-full font-body text-button normal-case"
        fullWidth
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.0625 7.6875L12 3.75L15.9375 7.6875"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 14.25V3.75"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {children}
      </Button>
    </div>
  );
};

export const AddButton = (props) => {
  const { onClick, children } = props;
  return (
    <div className="text-white">
      <Button
        variant="filled"
        onClick={onClick}
        className="bg-[#F68C20] rounded-full font-body text-button normal-case"

      >
        {children}
      </Button>
    </div>
  );
};
