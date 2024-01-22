import React from "react";

export const Container = ({
  children,
  size = "medium",
  width = "large",
  className = "",
  ...props
}) => {
  const verticalPadding = {
    custom: "",
    small: "py-6",
    medium: "py-12",
    large: "py-24",
    default: "py-12",
  };
  const widthClass = {
    small: "max-w-[1440px]",
    medium: "max-w-5xl",
    large: "max-w-[1440px]",
    custom: "",
  };

  return (
    <div
      className={`${widthClass[width]} flex flex-row mx-auto justify-around flex-wrap px-2 sm:px-8 ${verticalPadding[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
