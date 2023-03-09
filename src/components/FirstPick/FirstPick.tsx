import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Showcase from "@components/shared/Showcase";
import PrimaryButton from "../ui/PrimaryButton";

import firstPickImage1 from "@public/images/Hedgies_Logo_650x.webp";
import firstPickImage2 from "@public/images/Ledger_650x.webp";
import firstPickImage3 from "@public/images/T-Shirt_650x.webp";

const FirstPick: FC = () => {
  return (
    <div className="FirstPick w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
      <Showcase
        className="bg-radialGradient backdrop-blur-[4px]"
        header={
          <div className="w-full flex flex-col mb-8 sm:mb-12">
            <h2 className="Showcase__heading">Want First Pick?</h2>
            <h3 className="Showcase__subheading">Follow These Steps</h3>
          </div>
        }
        content={
          <div className="w-[140%] max-w-[94vw] md:max-w-[92vw] self-center flex flex-col lg:flex-row justify-between items-start gap-y-12 gap-x-8 mb-8 sm:mb-12 mt-6 lg:mt-10">
            <div className="relative w-full lg:w-auto lg:min-h-[432px] flex-1 lg:flex-[calc(1/3)] flex flex-row lg:flex-col items-center justify-center bg-darkGray border border-[#ffffff1f] rounded-[32px] shadow py-12 px-6">
              <div className="absolute left-1/2 lg:-left-4 -top-6 w-max bg-primaryGradient font-bold text-xl text-secondary leading-[32px] py-4 px-6 rounded-lg shadow-sm z-10 -translate-x-1/2 lg:translate-x-0 lg:-rotate-[8deg]">
                1. Own a Hedgies NFT
              </div>

              <Image
                src={firstPickImage1}
                alt="first pick image"
                className="w-full max-w-[40%] md:max-w-[30%] lg:max-w-[204px] lg:mb-12 py-[5%] mr-4"
              />
              <p className="w-full max-w-sm lg:max-w-full text-secondary font-medium text-lg text-center leading-6 tracking-tight">
                You will need to own a Hedgies NFT.
              </p>
            </div>

            <div className="relative w-full lg:w-auto lg:min-h-[432px] flex-1 lg:flex-[calc(1/3)] flex flex-row lg:flex-col items-center justify-center bg-darkGray border border-[#ffffff1f] rounded-[32px] lg:mt-12 shadow py-12 px-6">
              <div className="absolute left-1/2 lg:-left-4 -top-6 w-max bg-primaryGradient font-bold text-xl text-secondary leading-[32px] py-4 px-6 rounded-lg shadow-sm z-10 -translate-x-1/2 lg:translate-x-0 lg:-rotate-[8deg]">
                2. Connect Your Wallet
              </div>

              <Image
                src={firstPickImage2}
                alt="first pick image"
                className="w-full max-w-[40%] md:max-w-[30%] lg:max-w-[204px] lg:mb-12 py-[5%] mr-4"
              />
              <p className="w-full max-w-sm lg:max-w-full text-secondary font-medium text-lg text-center leading-6 tracking-tight">
                Make sure to connect the wallet holding your Hedgies NFT.
              </p>
            </div>

            <div className="relative w-full lg:w-auto lg:min-h-[432px] flex-1 lg:flex-[calc(1/3)] flex flex-row lg:flex-col items-center justify-center bg-darkGray border border-[#ffffff1f] rounded-[32px] shadow py-12 px-6">
              <div className="absolute left-1/2 lg:-left-4 -top-6 w-max bg-primaryGradient font-bold text-xl text-secondary leading-[32px] py-4 px-6 rounded-lg shadow-sm z-10 -translate-x-1/2 lg:translate-x-0 lg:-rotate-[8deg]">
                3. Shop Exclusive Merch
              </div>

              <Image
                src={firstPickImage3}
                alt="first pick image"
                className="w-full max-w-[40%] md:max-w-[30%] lg:max-w-[204px] lg:mb-12 py-[5%] mr-4"
              />
              <p className="w-full max-w-sm lg:max-w-full text-secondary font-medium text-lg text-center leading-6 tracking-tight">
                You&apos;re a VIP! You now have access to special products and
                discounts.
              </p>
            </div>
          </div>
        }
        footer={
          <div className="w-full flex justify-center">
            <PrimaryButton size="lg">
              <span className="text-xl mr-3">Shop Exclusive Merch</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
              </span>
            </PrimaryButton>
          </div>
        }
      />
    </div>
  );
};

export default FirstPick;
