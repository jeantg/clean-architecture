import React from "react";

export const Button = ({
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
