import { FC, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faTimes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../shared/Modal";
import NavMobile from "./NavMobile";
import NavOptions from "./NavOptions";
import NavRoutes from "./NavRoutes";
import Input from "../ui/Input";
import IconButton from "../ui/IconButton";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { breakpoints } from "@/utils";

import dydxLogo from "@public/images/dydx_logo.png";

const Nav: FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isFocused, setISFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [navMobileOpen, setNavMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  const { width } = useWindowDimensions();

  return (
    <nav className="Nav relative grid h-auto md:h-[var(--nav-height)] w-full z-[499]">
      <div
        ref={navRef}
        className="fade-in !sticky w-full h-[80px] md:h-[var(--nav-height)] flex bg-[#1c1c2833] py-4 md:py-6 px-3 sm:px-4 transition-all duration-100"
        style={{
          gridArea: "1 / 1 / span 1 / span 1",
        }}
      >
        <div className="relative w-full flex justify-between items-center">
          <IconButton
            className="w-12 md:w-14 h-12 md:h-14 flex lg:hidden bg-darkGray brightness-[0.85] text-secondary hover:brightness-105 hover:scale-[1.025] transition-all mr-4 z-50"
            onClick={() => {
              searchOpen
                ? document.body.classList.remove("nav-mobile-open")
                : document.body.classList.add("nav-mobile-open");

              setNavMobileOpen(!navMobileOpen);
            }}
          >
            <FontAwesomeIcon
              icon={navMobileOpen ? faTimes : faBars}
              className="text-xl"
            />
          </IconButton>

          <Image
            src={dydxLogo}
            alt="dydx logo"
            width={180}
            className="hidden lg:block"
          />

          <NavRoutes />

          <NavOptions
            handleSearch={() => {
              searchOpen
                ? document.body.classList.remove("nav-search-open")
                : document.body.classList.add("nav-search-open");
              setSearchOpen(!searchOpen);
            }}
          />

          {/* mobile navigation */}
          {width < breakpoints.lg && (
            <NavMobile open={navMobileOpen} setOpen={setNavMobileOpen} />
          )}

          {/* search */}
          <Modal
            open={searchOpen}
            setOpen={setSearchOpen}
            onAfterClose={() => {
              document.body.classList.remove("nav-search-open");
            }}
            className="top-[44px] !p-0 z-[500]"
          >
            <div className="w-full h-fit flex flex-col items-center justify-start font-circularStd">
              <div className="min-h-[var(--nav-height)] w-full flex justify-center items-center bg-dark py-4 md:py-6">
                <div className="relative w-full md:w-[calc(0.35*100vw)] max-w-[75vw] sm:max-w-[350px] md:max-w-[500px] min-w-[200px] flex items-center border-2 border-white rounded-xl pt-5 pb-1 md:pb-3 px-4 mr-4 md:mr-6">
                  <span
                    className={classNames(
                      "absolute top-1/2 text-white tracking-widest pointer-events-none transition-transform",
                      isFocused || searchTerm !== ""
                        ? "text-[10px] -translate-y-[calc(25%+16px)]"
                        : "text-base -translate-y-1/2"
                    )}
                  >
                    Search
                  </span>
                  <Input
                    onFocus={() => setISFocused(true)}
                    onBlur={() => setISFocused(false)}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-secondary text-base tracking-widest border-none pr-10"
                  />
                  <IconButton className="absolute top-1/2 right-0 text-base text-secondary -translate-y-1/2 px-4 py-3">
                    <FontAwesomeIcon icon={faSearch} />
                  </IconButton>
                </div>

                <IconButton
                  onClick={() => setSearchOpen(false)}
                  className={classNames(
                    "w-10 h-10 bg-darkGray brightness-[0.85] flex items-center justify-center text-secondary hover:brightness-105 transition-all duration-300",
                    "hover:rotate-[360deg]"
                  )}
                >
                  <FontAwesomeIcon icon={faXmark} className="text-lg" />
                </IconButton>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <div
        className="w-0 h-full pointer-events-none"
        style={{
          gridArea: "1 / 1 / span 1 / span 1",
        }}
      />
    </nav>
  );
};

export default Nav;
