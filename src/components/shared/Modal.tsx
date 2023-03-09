import { DetailedHTMLProps, Dispatch, FC, HTMLAttributes } from "react";
import ReactModal from "react-modal";
import classNames from "classnames";

type ModalProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  open: boolean;
  setOpen: Dispatch<boolean>;
  onAfterClose?: () => void;
  overlayClassName?: string;
};

const Modal: FC<ModalProps> = ({
  children,
  open,
  setOpen,
  onAfterClose,
  overlayClassName = "",
  className,
}) => {
  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={() => setOpen(false)}
      closeTimeoutMS={600}
      onAfterClose={() => onAfterClose && onAfterClose()}
      overlayClassName={overlayClassName}
      className={classNames("Modal", className)}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
