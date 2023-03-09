import { FC } from "react";
import Image from "next/image";
import Showcase from "../shared/Showcase";

import hatImage from "@public/images/category_hats_650x.webp";
import hoodieImage from "@public/images/category_hoodies_650x.webp";
import shirtImage from "@public/images/category_tshirts_650x.webp";
import accessoryImage from "@public/images/category_accessories1_650x.webp";

const ShopByCategory: FC = () => {
  return (
    <div className="ShopByCategory w-full flex justify-center font-circularStd px-2.5 sm:px-4 py-10 sm:py-12">
      <Showcase
        className="bg-darkGrayAlt"
        header={
          <div className="w-full flex flex-col mb-12">
            <h2 className="Showcase__heading">Build Your Wardrobe</h2>
            <h3 className="Showcase__subheading">Shop by Product Category</h3>
          </div>
        }
        content={
          <div className="w-[140%] max-w-[94vw] md:max-w-[92vw] self-center flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-8 md:mb-12">
            <div className="cards-container md:translate-y-12">
              <div className="collection-card">
                <Image
                  src={shirtImage}
                  alt="t-shirts"
                  className="w-[75%] md:w-1/2 rounded-[2rem]"
                />
                <span className="tag">T-Shirts</span>
              </div>

              <div className="collection-card">
                <Image
                  src={hoodieImage}
                  alt="hoodies"
                  className="w-[75%] md:w-1/2 rounded-[2rem]"
                />
                <span className="tag">Hoodies</span>
              </div>
            </div>

            <div className="cards-container">
              <div className="collection-card">
                <Image
                  src={hatImage}
                  alt="headwear"
                  className="w-[75%] md:w-1/2 rounded-[2rem]"
                />
                <span className="tag">Headwear</span>
              </div>

              <div className="collection-card">
                <Image
                  src={accessoryImage}
                  alt="accessories"
                  className="w-[75%] md:w-1/2 rounded-[2rem]"
                />
                <span className="tag">Accessories</span>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ShopByCategory;
