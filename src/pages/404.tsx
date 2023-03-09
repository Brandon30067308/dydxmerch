import { FC } from "react";
import Head from "next/head";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - dYdX Merch</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="404 - dYdX Merch" />
        <meta name="page-type" content="404" />
      </Head>
      <div
        className={
          "w-full h-screen flex justify-center items-center bg-darkBlue font-circularStd text-secondary text-base md:text-2xl px-2.5"
        }
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-secondary">404</p>
          <div className="h-[50px] w-[1px] bg-secondary mx-6" />
          <p>This page could not be found.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
