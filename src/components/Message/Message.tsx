import { FC } from "react";

const Message: FC = () => {
  return (
    <div className="Announcement relative w-full h-[44px] flex justify-center bg-primaryGradient font-circularStd p-2.5 z-[999]">
      <p className="text-secondary text-center font-bold text-lg tracking-wide leading-6">
        Free Shipping On All Orders Over £100
      </p>
    </div>
  );
};

export default Message;
