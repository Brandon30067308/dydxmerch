import classNames from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type ShowcaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header: JSX.Element;
  content: JSX.Element;
  footer?: JSX.Element;
};

const Showcase: FC<ShowcaseProps> = ({
  className,
  header,
  content,
  footer,
  ...props
}) => {
  return (
    <div
      className={classNames(
        className,
        "Showcase w-full max-w-[92vw] md:max-w-[88vw] xl:max-w-[975px] min-h-[300px] flex flex-col border border-[#ffffff1f] rounded-[2rem] px-4 md:px-12 py-6 md:py-12 overflow-x-visible"
      )}
      {...props}
    >
      {header}

      {content}

      {footer}
    </div>
  );
};

export default Showcase;
