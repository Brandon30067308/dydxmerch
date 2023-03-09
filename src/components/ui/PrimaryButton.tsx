import { FC } from "react";
import classNames from "classnames";
import Button, { ButtonProps } from "@components/ui/Button";

const PrimaryButton: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={classNames("PrimaryButton", className, [
        "bg-primaryGradient text-white brightness-[0.85]",
        "hover:brightness-[1.05] hover:scale-[1.025]",
      ])}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
