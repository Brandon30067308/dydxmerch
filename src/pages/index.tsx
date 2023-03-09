import { useRef } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Banner from "@/components/shared/Banner";
import Message from "@/components/Message/Message";
import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Featured from "@/components/Featured/Featured";
import FirstPick from "@/components/FirstPick/FirstPick";
import NewArrivalsHedgies from "@/components/NewArrivalsHedgies/NewArrivalsHedgies";
import NewArrivalsDydx from "@/components/NewArrivalsDydx/NewArrivalsDydx";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";
import Footer from "@/components/Footer/Footer";
import shopHedgiesBannerImage from "@public/images/Hedgie1.webp";
import shopDydxBannerImage from "@public/images/dydxToken_fa1c9401-1541-412c-9025-2dd813c74ab1.webp";
import connectBannerImage from "@public/images/Connect_Img_0cdbda49-412f-4255-a3d4-04eefb74e7ad.webp";

const Home: NextPage = () => {
  const rootRef = useRef(null);

  return (
    <>
      <Head>
        <title>
          dYdX Merch | The official shop for all things dYdX and Hedgies
        </title>
        <meta
          name="description"
          content="dYdX Merch | The official shop for all things dYdX and Hedgies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        ref={rootRef}
        className="root relative w-full h-full bg-pageCover bg-center bg-repeat bg-darkBlue"
      >
        {/* message */}
        <Message />

        {/* nav */}
        <Nav />

        {/* hero */}
        <Hero />

        {/* featured */}
        <Featured />

        {/* shop Hedgies */}
        <div className="w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
          <Banner
            className="bg-bannerGradient1 grid-cols-1 md:grid-cols-2"
            leftContent={
              <div className="flex-[calc(1/2)] w-full h-full flex flex-col justify-center p-12 lg:p-16">
                <h2 className="Banner__heading mb-6">Hedgies NFTs</h2>
                <p className="Banner__text mb-10 md:mb-12">
                  Being a part of the Hedgies community comes with VIP perks
                  such as access to exclusive discounts, new merchandise, and
                  much more!
                </p>
                <SecondaryButton size="lg" className="w-fit">
                  <span className="text-xl mr-3">Shop All Hedgies</span>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                  </span>
                </SecondaryButton>
              </div>
            }
            rightContent={
              <div className="Banner__image-container">
                <Image
                  src={shopHedgiesBannerImage}
                  alt="banner image"
                  className="Banner__image"
                />
              </div>
            }
          />
        </div>

        {/* first pick */}
        <FirstPick />

        {/* new arrivals Hedgies */}
        <NewArrivalsHedgies />

        {/* shop dYdX */}
        <div className="w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
          <Banner
            className="bg-bannerGradient2 grid-cols-1 md:grid-cols-2"
            leftContent={
              <div className="Banner__image-container row-start-2 md:row-start-1">
                <Image
                  src={shopDydxBannerImage}
                  alt="banner image"
                  className="Banner__image"
                />
              </div>
            }
            rightContent={
              <div className="flex-[calc(1/2)] w-full h-full flex flex-col justify-center p-12 lg:p-16">
                <h2 className="Banner__heading mb-6">dYdX</h2>
                <p className="Banner__text mb-10 md:mb-12">
                  Aims to be the best exchange!
                  <span className="block py-1.5" />
                  In keeping to this mission, we only offer the best apparel and
                  accessories to help you represent your favourite crypto
                  exchange.
                  <span className="block py-1.5" />
                  Make sure to grab some dYdX Merch whilst stocks last.
                </p>
                <SecondaryButton size="lg" className="w-fit">
                  <span className="text-xl mr-3">Shop All dYdX</span>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                  </span>
                </SecondaryButton>
              </div>
            }
          />
        </div>

        {/* new arrivals dYdX */}
        <NewArrivalsDydx />

        {/* produts by category */}
        <ShopByCategory />

        {/* banner 3 */}
        <div className="w-full flex justify-center font-circularStd px-2.5 py-10 sm:py-12">
          <Banner
            className="bg-bannerGradient3 grid-cols-1 md:grid-cols-2"
            leftContent={
              <div className="flex-[calc(1/2)] w-full h-full flex flex-col justify-center p-12 lg:p-16">
                <h2 className="font-bold text-3xl text-gray tracking-tight leading-[1] mb-6">
                  Connect. See what all the fuss is about!
                </h2>
                <p className="Banner__text mb-10 md:mb-12">
                  We believe the dYdX community is truly special, made up of
                  talented Hedgies constantly sharing alpha and interesting
                  trading ideas.
                  <span className="block py-1.5"></span>
                  Want to join?
                </p>
                <SecondaryButton size="lg" className="w-fit">
                  <span className="text-xl mr-3">dYdX Discord</span>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                  </span>
                </SecondaryButton>
              </div>
            }
            rightContent={
              <div className="Banner__image-container">
                <Image
                  src={connectBannerImage}
                  alt="banner image"
                  className="Banner__image"
                />
              </div>
            }
          />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
