import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Input from "../ui/Input";
import IconButton from "../ui/IconButton";

import miniHedgiesLogo from "@public/images/HedgieLogo1_100x.webp";
import applePayImage from "@public/images/applepay.svg";
import googlePayImage from "@public/images/googlepay.svg";
import mastercardImage from "@public/images/mastercard.svg";
import shopPayImage from "@public/images/shoppay.svg";
import visaImage from "@public/images/visa.svg";

const Footer: FC = () => {
  return (
    <footer
      className={classNames(
        "Footer relative w-full flex items-start justify-center bg-[rgba(16,16,34,0.5)] backdrop-blur-[2px] font-circularStd pt-16 pb-20 px-2.5 sm:px-4",
        "after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-1/2 after:w-full after:bg-darkBlue"
      )}
    >
      <div className="relative w-full lg:w-[88vw] max-w-[1200px] flex flex-col z-10">
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-16 mb-20 sm:mb-16">
          {/* 1 */}
          <div className="w-fit lg:w-full max-w-max lg:max-w-md flex flex-col items-start">
            <div className="w-full flex mb-14">
              <Image
                src={miniHedgiesLogo}
                alt="mini hedgies logo"
                className="w-[80px] h-[80px] mr-4"
              />
              <div className="w-full lg:max-w-sm">
                <h2 className="font-bold text-secondary text-2xl tracking-tight leading-[32px] mb-4">
                  Stay in the loop
                </h2>
                <p className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem]">
                  Join our email list to get all the latest dYdX Merch news and
                  first access to offers.
                </p>
              </div>
            </div>

            <div className="w-full flex items-center border border-[#6f6e84] px-2 mb-8 lg:mb-12 rounded-full overflow-hidden">
              <Input
                placeholder="Your email"
                className={classNames(
                  "w-full text-[#6f6e84] font-bold text-xl leading-[24px] tracking-wide px-[32px] py-[27px]",
                  "placeholder:text-[#6f6e84]"
                )}
              />
              <IconButton className="min-w-[64px] min-h-[64px] flex items-center justify-center bg-darkGray brightness-[0.85] text-secondary hover:brightness-105 transition-all duration-300">
                <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
              </IconButton>
            </div>

            {/* socials */}
            <div className="flex items-center gap-x-6 gap-y-3">
              <IconButton className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[#6f6e84] brightness-[0.85] text-secondary hover:brightness-105 transition-all duration-300">
                <svg
                  focusable="false"
                  role="presentation"
                  className="min-w-[24px]"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55016 19.75C16.6045 19.75 21.5583 12.2467 21.5583 5.74186C21.5583 5.53092 21.5536 5.3153 21.5442 5.10436C22.5079 4.40746 23.3395 3.54425 24 2.5553C23.1025 2.9546 22.1496 3.21538 21.1739 3.32874C22.2013 2.71291 22.9705 1.74547 23.3391 0.605767C22.3726 1.17856 21.3156 1.58261 20.2134 1.80061C19.4708 1.01156 18.489 0.489116 17.4197 0.314051C16.3504 0.138986 15.2532 0.32105 14.2977 0.832096C13.3423 1.34314 12.5818 2.15471 12.1338 3.14131C11.6859 4.12792 11.5754 5.23462 11.8195 6.2903C9.86249 6.19209 7.94794 5.6837 6.19998 4.7981C4.45203 3.91249 2.90969 2.66944 1.67297 1.14952C1.0444 2.23324 0.852057 3.51565 1.13503 4.73609C1.418 5.95654 2.15506 7.02345 3.19641 7.71999C2.41463 7.69517 1.64998 7.48468 0.965625 7.10592V7.16686C0.964925 8.30415 1.3581 9.40659 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1931 3.43198 12.222 2.69484 12.0794C3.00945 13.0574 3.62157 13.9129 4.44577 14.5263C5.26997 15.1398 6.26512 15.4806 7.29234 15.5012C5.54842 16.8711 3.39417 17.6141 1.17656 17.6106C0.783287 17.61 0.390399 17.5859 0 17.5384C2.25286 18.9837 4.87353 19.7514 7.55016 19.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </IconButton>
              <IconButton className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[#6f6e84] brightness-[0.85] text-secondary hover:brightness-105 transition-all duration-300">
                <svg
                  focusable="false"
                  role="presentation"
                  className="min-w-[24px]"
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.317 2.15557C18.7873 1.45369 17.147 0.936576 15.4319 0.640403C15.4007 0.634687 15.3695 0.648971 15.3534 0.677541C15.1424 1.05276 14.9087 1.54225 14.7451 1.927C12.9004 1.65083 11.0652 1.65083 9.25832 1.927C9.09465 1.5337 8.85248 1.05276 8.64057 0.677541C8.62449 0.649924 8.59328 0.63564 8.56205 0.640403C6.84791 0.93563 5.20756 1.45275 3.67693 2.15557C3.66368 2.16129 3.65233 2.17082 3.64479 2.18319C0.533392 6.83155 -0.31895 11.3657 0.0991801 15.8436C0.101072 15.8655 0.11337 15.8864 0.130398 15.8997C2.18321 17.4073 4.17171 18.3225 6.12328 18.9291C6.15451 18.9386 6.18761 18.9272 6.20748 18.9015C6.66913 18.2711 7.08064 17.6063 7.43348 16.9073C7.4543 16.8664 7.43442 16.8178 7.39186 16.8016C6.73913 16.554 6.1176 16.2521 5.51973 15.9093C5.47244 15.8816 5.46865 15.814 5.51216 15.7816C5.63797 15.6873 5.76382 15.5893 5.88396 15.4902C5.90569 15.4721 5.93598 15.4683 5.96153 15.4797C9.88928 17.273 14.1415 17.273 18.023 15.4797C18.0485 15.4674 18.0788 15.4712 18.1015 15.4893C18.2216 15.5883 18.3475 15.6873 18.4742 15.7816C18.5177 15.814 18.5149 15.8816 18.4676 15.9093C17.8697 16.2588 17.2482 16.554 16.5945 16.8006C16.552 16.8168 16.533 16.8664 16.5538 16.9073C16.9143 17.6054 17.3258 18.2701 17.7789 18.9005C17.7978 18.9272 17.8319 18.9386 17.8631 18.9291C19.8241 18.3225 21.8126 17.4073 23.8654 15.8997C23.8834 15.8864 23.8948 15.8664 23.8967 15.8445C24.3971 10.6676 23.0585 6.17064 20.3482 2.18414C20.3416 2.17082 20.3303 2.16129 20.317 2.15557ZM8.02002 13.117C6.8375 13.117 5.86313 12.0313 5.86313 10.6981C5.86313 9.36477 6.8186 8.27912 8.02002 8.27912C9.23087 8.27912 10.1958 9.3743 10.1769 10.6981C10.1769 12.0313 9.22141 13.117 8.02002 13.117ZM15.9947 13.117C14.8123 13.117 13.8379 12.0313 13.8379 10.6981C13.8379 9.36477 14.7933 8.27912 15.9947 8.27912C17.2056 8.27912 18.1705 9.3743 18.1516 10.6981C18.1516 12.0313 17.2056 13.117 15.9947 13.117Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </IconButton>
              <IconButton className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[#6f6e84] brightness-[0.85] text-secondary hover:brightness-105 transition-all duration-300">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="min-w-[24px] text-secondary"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="currentColor"
                    d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
                  ></path>
                </svg>
              </IconButton>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row">
            {/* 2 */}
            <div className="w-1/2 lg:w-fit flex flex-col items-start mb-12 sm:mb-0 lg:mx-auto lg:px-12">
              <h2 className="font-bold text-secondary text-2xl tracking-tight leading-[32px] mb-4">
                About
              </h2>
              <ul>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Blog
                  </span>
                </li>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Meet the team
                  </span>
                </li>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    dYdX Exchange
                  </span>
                </li>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    dYdX Foundation
                  </span>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Hedgies NFT
                  </span>
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="w-1/2 lg:w-fit flex flex-col items-start lg:mx-auto lg:px-12">
              <h2 className="font-bold text-secondary text-2xl tracking-tight leading-[32px] mb-4">
                Support
              </h2>
              <ul>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Contact us
                  </span>
                </li>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Shipping
                  </span>
                </li>
                <li className="group mb-4 lg:mb-2 cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    Returns
                  </span>
                </li>
                <li className="group cursor-pointer">
                  <span className="font-medium text-secondary text-lg leading-[24px] underline-offset-[.3rem] group-hover:underline group-hover:text-primary transition-all">
                    FAQs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
          <div className="flex flex-wrap flex-col lg:flex-row font-medium text-[#6f6e84] text-lg leading-[24px] mb-16 lg:mb-0">
            <span className="hover:underline hover:text-primary transition-all mr-8 cursor-pointer mb-8 lg:mb-0">
              © dYdX Merch 2023
            </span>
            <span className="hover:underline hover:text-primary transition-all mr-8 cursor-pointer mb-8 lg:mb-0">
              Privacy policy
            </span>
            <span className="hover:underline hover:text-primary transition-all mr-8 cursor-pointer mb-8 lg:mb-0">
              Terms of service
            </span>
            <span className="hover:underline hover:text-primary transition-all cursor-pointer">
              Powered by Toyoji
            </span>
          </div>

          <div className="flex items-center">
            <span title="Apple Pay" className="mr-3">
              <Image src={applePayImage} alt="Apple Pay" className="w-12" />
            </span>
            <span title="Google Pay" className="mr-3">
              <Image src={googlePayImage} alt="Google Pay" className="w-12" />
            </span>
            <span title="Mastercard" className="mr-3">
              <Image src={mastercardImage} alt="Mastercard" className="w-12" />
            </span>
            <span title="Shop Pay" className="mr-3">
              <Image src={shopPayImage} alt="Shop Pay" className="w-12" />
            </span>
            <span title="Visa">
              <Image src={visaImage} alt="Visa" className="w-12" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
