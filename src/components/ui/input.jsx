import clsx from "clsx";
import React from "react";

export const Input = React.forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      id,
      type,
      icon: Icon,
      error,
      helperText,
      variant,
      clasname,
      ...resTprop
    },
    ref
  ) => {
    return (
      <div className="w-[300px] flex items-center gap-[18px] h-[45px] pl-[12px] border border-white rounded-[8px]">
        {<img src={Icon} alt="icon" className="w-[20px] h-[20px] absolute z-10" />}
        <input
          {...resTprop}
          className={clsx(
            " rounded-[8px] px-[30px] py-[10px] outline-none",
            {
              "w-[360px] h-[56px] bg-white border border-black mb-[20px]":
                variant == "primary",
              "w-[300px] h-[40px] outline-none rounded-[20px] px-[10px] text-xl border-2 text-center border-gray-600 mb-[10px]":
                variant == "secondary",
              "bg-transparent text-white text-lg outline-none":
                variant == "smooth",
              "bg-transparent text-black-600 w-[300px] h-[45px] pl-[12px] border border-black rounded-[8px] text-lg outline-none":
                variant == "smooth2",
                "w-[250px] h-[40px] pl-[40px] pt-[10px] pb-[9px] bg-grayer translate-x-[-10px]": variant == "primary250"
            },
            clasname
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {helperText && (
          <p className=" text-white text-xs text-left mt-[-15px]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
