import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../ui/IconButton";
import PrimaryButton from "../ui/PrimaryButton";

type NavRoutesProps = {
  handleSearch: () => void;
};

const NavRoutes: FC<NavRoutesProps> = ({ handleSearch }) => {
  return (
    <div className="flex items-center justify-center">
      <IconButton
        className="w-12 md:w-16 h-12 md:h-16 bg-darkGray brightness-[0.85] text-secondary hover:brightness-105 hover:scale-[1.025] transition-all mr-4"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} className="text-xl" />
      </IconButton>
      <PrimaryButton className="min-h-[48px] md:!min-h-[64px] font-bold text-secondary px-3 md:px-5 !py-1">
        <span className="mr-4">
          <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
        </span>
        <span className="font-bold text-xl">0</span>
      </PrimaryButton>
    </div>
  );
};

export default NavRoutes;
