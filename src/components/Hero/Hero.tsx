import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../ui/PrimaryButton";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { breakpoints } from "@/utils";

import heroBgImage from "@public/images/DesktopHeroImage_b816aaa6-3290-427a-86d1-d122fce4684d_1980x@2x.webp";
import heroBgMobileImage from "@public/images/Mobile-Hero_750x@2x.webp";

const Hero: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <main className="Hero relative w-full min-h-screen grid overflow-hidden pb-10 sm:pb-12">
      <div className="w-full h-max max-h-full">
        <Image
          src={width < breakpoints.sm ? heroBgMobileImage : heroBgImage}
          alt="hero background"
          className="w-full object-top object-cover"
        />
      </div>

      <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-center mx-auto z-10">
        <div className="w-full max-w-5xl flex flex-col items-center mx-auto p-2.5 sm:p-8 md:p-[50px]">
          <h1 className="font-circularStd font-bold text-[clamp(2.5rem,1rem+6.12vw,5.8rem)] tracking-wide leading-[1.1] text-white text-center mb-10">
            Shop the World of dYdX & Hedgies
          </h1>
          <PrimaryButton size="lg">
            <span className="text-lg mr-3">Shop All Merch</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
            </span>
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
};

export default Hero;
