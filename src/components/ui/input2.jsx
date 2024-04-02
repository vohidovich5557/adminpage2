import clsx from "clsx";
import React from "react";

export const Input2 = React.forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      id,
      type,
      label,
      error,
      helperText,
      variant,
      clasname,
      defaultValue,
      ...resTprop
    },
    ref
  ) => {
    return (
      <div className="flex flex-col items-start">
        {<label className="text-md font-bold mb-[12px]">{label}</label>}
        <input
          {...resTprop}
          className={clsx(
            " rounded-[8px] px-[30px] py-[10px] outline-none",
            {
              "w-[764px] h-[44px] bg-grayer rounded-[6px]": variant == "primary764",
              "w-[362px] h-[44px] bg-grayer rounded-[6px]": variant == "primary362",
              "w-[228px] h-[44px] bg-grayer rounded-[6px]": variant == "primary228",
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
          defaultValue={defaultValue}
        />
        {helperText && (
          <p className=" text-red-600 mt-[20px] text-xs text-left">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
