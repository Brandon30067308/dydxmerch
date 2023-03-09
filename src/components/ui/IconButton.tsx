import classNames from "classnames";
import { FC } from "react";
import Button, { ButtonProps } from "./Button";

const IconButton: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={classNames("IconButton", className, "rounded-[50%]")}
      {...props}
    >
      {children}
    </Button>
  );
};

export default IconButton;
