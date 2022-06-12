import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/home-page/home-page";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Volba pro Teplice</title>
        <meta
          name="keywords"
          content="Volba pro Teplice, Teplice, politika, politická strana, volby 2022, program"
        />
        <meta
          name="description"
          content="Domovská stránka teplické politické strany - Volba pro Teplice"
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
