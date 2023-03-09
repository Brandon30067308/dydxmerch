import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import classNames from "classnames";

const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => {
  return (
    <input
      className={classNames(
        "Input",
        className,
        "w-full bg-transparent font-circularStd"
      )}
      {...props}
    />
  );
};

export default Input;
