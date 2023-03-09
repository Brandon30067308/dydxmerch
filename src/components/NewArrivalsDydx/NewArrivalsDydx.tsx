import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Showcase from "../shared/Showcase";
import PrimaryButton from "../ui/PrimaryButton";

import { spaceMono } from "@/config/fonts";

import newArrivalImage1 from "@public/images/dYdXLogoHoodiefront_750x.webp";
import newArrivalImage2 from "@public/images/dYdXDSPTCHBackpack1_750x.jpg";
import newArrivalImage3 from "@public/images/dYdXBeanieWinterFront_750x.webp";
import newArrivalCoverImage1 from "@public/images/shop_dydx_Dydx1511226159_97fe35ee-506c-45aa-b6aa-4f63ce3fae25_750x.webp";
import newArrivalCoverImage2 from "@public/images/shop_dydx_Dydx1511226340_750x.webp";
import newArrivalCoverImage3 from "@public/images/shop_dydx_Dydx1511227806_e5f07b99-92b0-4ba3-8c9e-0835e48edb5a_750x.webp";

const NewArrivals: FC = () => {
  return (
    <div className="NewArrivalsDydx w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
      <Showcase
        className="bg-darkGrayAlt"
        header={
          <div className="w-full flex flex-col mb-8 sm:mb-12">
            <h2 className="Showcase__heading">New Arrivals</h2>
            <h3 className="Showcase__subheading">dYdX Merch</h3>
          </div>
        }
        content={
          <div className="custom-scroll w-[140%] max-w-[94vw] md:max-w-[92vw] self-center mb-8 sm:mb-12 overflow-y-hidden md:overflow-y-visible overflow-x-auto md:overflow-x-visible">
            <div className="w-fit md:w-full flex justify-between items-start gap-4 md:gap-8">
              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <div className="relative w-full">
                  <Image
                    src={newArrivalImage1}
                    alt="dydx new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage1}
                    alt="dydx new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">dYdX Logo Hoodie</p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £54.99
                  </span>

                  <span className="Showcase__badge">dYdX</span>
                </div>
              </div>

              <div className={classNames("Showcase__card group")}>
                <div className="relative w-full">
                  <Image
                    src={newArrivalImage2}
                    alt="dydx new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage2}
                    alt="dydx new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name flex flex-wrap gap-x-3 gap-y-1">
                    <span className="line-through">dYdX x DSPTCH Backpack</span>
                    <span className="flex">Sold out</span>
                  </p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £189.99
                  </span>

                  <span className="Showcase__badge">dYdX</span>
                </div>
              </div>

              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <div className="relative w-full">
                  <Image
                    src={newArrivalImage3}
                    alt="dydx new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage3}
                    alt="dydx new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">dYdX Beanie</p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £9.99
                  </span>

                  <span className="Showcase__badge">dYdX</span>
                </div>
              </div>
            </div>
          </div>
        }
        footer={
          <div className="w-full flex justify-center">
            <PrimaryButton size="lg">
              <span className="text-xl mr-3">Shop All Hedgies</span>
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

export default NewArrivals;
