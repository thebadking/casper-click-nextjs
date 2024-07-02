import React from "react";
import cx from "classnames";

export const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  h2?: boolean;
  h3?: boolean;
  h5?: boolean;
} & React.HTMLProps<HTMLDivElement>) => (
  <div
    className={cx(
      "flex flex-col w-full min-h-screen mx-auto bg-background text-content-secondary",
      {
        "font-bold text-content-primary text-2xl mt-8": props.h2,
        "font-medium text-content-primary text-lg mt-8": props.h3,
        "font-medium text-content-primary text-sm text-center mt-4": props.h5,
      }
    )}
    {...props}
  >
    {children}
  </div>
);
export default Container;
