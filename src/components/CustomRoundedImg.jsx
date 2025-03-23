import React, { memo } from "react";
import { cn } from "utils/tailwind.merge";

function CustomRoundedImg({ src = "", alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full w-[35px] h-[35px] cursor-pointer border-gray-500 border-2",
        className
      )}
    />
  );
}

export default memo(CustomRoundedImg);
