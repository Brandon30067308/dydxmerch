import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classNames from "classnames";

type BannerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
};

const Banner: FC<BannerProps> = ({
  className,
  leftContent,
  rightContent,
  ...props
}) => {
  return (
    <div
      className={classNames(
        className,
        "Banner w-full max-w-[92vw] md:max-w-[88vw] xl:max-w-[975px] grid grid-cols-1 md:grid-cols-2 items-center rounded-[2rem] border border-[#ffffff1f] mx-auto overflow-hidden"
      )}
      {...props}
    >
      {leftContent}

      {rightContent}
    </div>
  );
};

export default Banner;
