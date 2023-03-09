import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import Showcase from "../shared/Showcase";
import PrimaryButton from "../ui/PrimaryButton";

import { spaceMono } from "@/config/fonts";

import newArrivalImage1 from "@public/images/3DHedgiet-shirtdYdXHedgiesFront_750x.webp";
import newArrivalImage2 from "@public/images/HedgieHoodiedYdXHedgiesFront_750x.webp";
import newArrivalImage3 from "@public/images/Hedgieslogocapfrontblack_750x.webp";
import newArrivalCoverImage1 from "@public/images/shop_hedgies_Hedgies_back_750x.webp";
import newArrivalCoverImage2 from "@public/images/shop_hedgies_Dydx1511225545_b3baaa5b-8d60-4b41-b7ef-f3fbb300b210_750x.webp";
import newArrivalCoverImage3 from "@public/images/shop_hedgies_Dydx1511225754_750x.webp";

const NewArrivals: FC = () => {
  return (
    <div className="NewArrivalsHedgies w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
      <Showcase
        className="bg-darkGrayAlt"
        header={
          <div className="w-full flex flex-col mb-8 sm:mb-12">
            <h2 className="Showcase__heading">New Arrivals</h2>
            <h3 className="Showcase__subheading">Hedgies Merch</h3>
          </div>
        }
        content={
          <div className="custom-scroll w-[140%] max-w-[94vw] md:max-w-[92vw] self-center mb-8 sm:mb-12 overflow-y-hidden md:overflow-y-visible overflow-x-auto md:overflow-x-visible">
            <div className="w-fit md:w-full flex justify-between items-start gap-4 md:gap-8">
              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <span className="Showcase__nft-badge">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-white text-base"
                    />
                  </span>
                  <span className="font-bold text-xl text-secondary">NFT</span>
                </span>

                <div className="relative w-full">
                  <Image
                    src={newArrivalImage1}
                    alt="hedgies new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage1}
                    alt="hedgies new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">
                    3D Hedgies T-Shirt
                  </p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £29.99
                  </span>

                  <span className="Showcase__badge">Hedgies</span>
                </div>
              </div>

              <div className={classNames("Showcase__card group")}>
                <span className="Showcase__nft-badge">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-white text-base"
                    />
                  </span>
                  <span className="font-bold text-xl text-secondary">NFT</span>
                </span>

                <div className="relative w-full">
                  <Image
                    src={newArrivalImage2}
                    alt="hedgies new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage2}
                    alt="hedgies new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">
                    Hedgies Outline Hoodie
                  </p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £54.99
                  </span>

                  <span className="Showcase__badge">Hedgies</span>
                </div>
              </div>

              <div className={classNames("Showcase__card group mt-0 md:mt-12")}>
                <span className="Showcase__nft-badge">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-white text-base"
                    />
                  </span>
                  <span className="font-bold text-xl text-secondary">NFT</span>
                </span>

                <div className="relative w-full">
                  <Image
                    src={newArrivalImage3}
                    alt="hedgies new arrival"
                    className="Showcase__overlay-image"
                  />
                  <Image
                    src={newArrivalCoverImage3}
                    alt="hedgies new arrival"
                    className="Showcase__image"
                  />
                </div>

                <div className="Showcase__content">
                  <p className="Showcase__card__item-name">Hedgies Logo Cap</p>
                  <span
                    className={classNames(
                      spaceMono.className,
                      "Showcase__card__item-price"
                    )}
                  >
                    £19.99
                  </span>

                  <span className="Showcase__badge">Hedgies</span>
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
