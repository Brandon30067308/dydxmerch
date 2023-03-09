import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Showcase from "../shared/Showcase";
import PrimaryButton from "../ui/PrimaryButton";
import { spaceMono } from "@/config/fonts";

import featuredImage1 from "@public/images/BuyHighSellLowt-shirtdYdXHedgiesFront_750x.webp";
import featuredImage2 from "@public/images/xLogoHoodiefront_750x.webp";
import featuredImage3 from "@public/images/dYdXLogocapblackfront_750x.webp";
import featuredCoverImage1 from "@public/images/featured_Dydx1511226619_e0756525-2262-4c72-8ed7-dd3a21bf052e_750x.webp";
import featuredCoverImage2 from "@public/images/featured_Dydx1511226696_c7598c5f-1035-4cc6-816e-14aaa75b0964_750x.webp";
import featuredCoverImage3 from "@public/images/featured_Dydx1511227324_72c6a635-aa1f-492b-9f01-b504b33f1e3d_750x.webp";

const Featured: FC = () => {
  return (
    <div className="Featured w-full flex justify-center font-circularStd px-2.5 pb-10 sm:pb-12">
      <Showcase
        className="bg-darkGrayAlt"
        header={
          <div className="w-full flex flex-col mb-8 sm:mb-12">
            <h2 className="Showcase__heading">Featured Drop</h2>
            <h3 className="Showcase__subheading">The Genesis Collection</h3>
          </div>
        }
        content={
          <div className="custom-scroll w-[140%] max-w-[94vw] md:max-w-[92vw] self-center flex justify-between items-start gap-4 md:gap-8 mb-8 sm:mb-12 overflow-y-hidden md:overflow-y-visible overflow-x-auto md:overflow-x-visible">
            <div className="w-fit md:w-full flex justify-between items-start gap-4 md:gap-8">
              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <div className="relative w-full">
                  <Image
                    src={featuredImage1}
                    alt="featured"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={featuredCoverImage1}
                    alt="featured"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">
                    Buy High Sell Low T-Shirt
                  </p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £29.99
                  </span>
                </div>
              </div>

              <div className={classNames("Showcase__card group")}>
                <div className="relative w-full">
                  <Image
                    src={featuredImage2}
                    alt="featured"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={featuredCoverImage2}
                    alt="featured"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">X Logo Hoodie</p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £54.99
                  </span>
                </div>
              </div>

              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <div className="relative w-full">
                  <Image
                    src={featuredImage3}
                    alt="featured"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={featuredCoverImage3}
                    alt="featured"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">dYdX Logo Cap</p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £19.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
        footer={
          <div className="w-full flex justify-center">
            <PrimaryButton size="lg">
              <span className="text-xl mr-3">Shop The Drop</span>
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

export default Featured;
