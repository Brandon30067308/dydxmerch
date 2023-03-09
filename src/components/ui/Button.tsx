import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: "sm" | "md" | "lg";
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "Button",
        className,
        [
          "font-circularStd flex justify-center items-center font-bold text-lg leading-[32px] tracking-wide text-center border-none outline-none rounded-full cursor-pointer will-change-transform transition-all",
          "disabled:cursor-not-allowed",
        ],
        {
          "p-3": size === "sm",
          "px-5 py-3": size === "md",
          "px-6 py-4": size === "lg",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
