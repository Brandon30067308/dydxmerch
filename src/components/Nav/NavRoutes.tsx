import { FC, useState } from "react";
import classNames from "classnames";
import Button from "../ui/Button";

type NavRoute = "home" | "shop" | "blog";

const routes: NavRoute[] = ["home", "shop", "blog"];

const NavRoutes: FC = () => {
  const [selected, setSelected] = useState<NavRoute>("home");

  return (
    <>
      <ul className="hidden lg:flex bg-dark p-2 rounded-full">
        {routes.map((route, idx) => (
          <li key={`n-r-${idx}`}>
            <Button
              size="sm"
              className={classNames(
                "w-[calc((1/9)*100vw)] min-w-[120px] max-w-[180px] bg-dark font-bold text-white text-xl capitalize hover:bg-darkGray py-2",
                {
                  "bg-primaryGradient": selected === route,
                  "mr-4": idx !== routes.length - 1,
                }
              )}
              onClick={() => {
                setSelected(route);
              }}
            >
              {route}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavRoutes;
