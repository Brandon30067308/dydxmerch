import { FC } from "react";
import classNames from "classnames";
import Button, { ButtonProps } from "@components/ui/Button";

const SecondaryButton: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button
      className={classNames("SecondaryButton", className, [
        "bg-secondary text-dark brightness-[0.85]",
        "hover:brightness-[1.05] hover:scale-[1.025]",
      ])}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
