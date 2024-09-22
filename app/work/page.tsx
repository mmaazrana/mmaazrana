"use client";
import React, { useState } from "react";

export default function DynamicPlaceholder() {
  const [value, setValue] = useState("");
  const placeholder = "Placeholder Value";
  const isRequired = true;
  return (
    <div className={"overflow-x-hidden max-w-[100vw]"}>
      <main className="overflow-x-visible xl:max-w-8xl xl:mx-auto mb-[525px] about:mb-80 md:mb-96 xl:py-12 lg:py-11 md:py-10 sm:py-9 py-8 xl:gap-12 lg:gap-11 md:gap:10 sm:gap-9 gap-8 flex items-center justify-center flex-col">
        <div className={"relative"}>
          <input
            type={"text"}
            id={"field"}
            className={
              "peer bg-white border-gray-200 text-gray-700 py-1 px-2 rounded-lg"
            }
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <label
            htmlFor={"field"}
            className={`absolute text-gray-300 left-2 top-1/2 -translate-y-1/2 max-w-full text-ellipsis line-clamp-1 peer-focus:hidden ${value && "hidden"}`}
          >
            <span>{placeholder}</span>
            {isRequired && <span className={"text-red-500"}>&nbsp;*</span>}
          </label>
        </div>
      </main>
    </div>
  );
}
