import type { NextPage } from "next";
import Head from "next/head";
import SimpleHead from "../components/meta/simple-head";
import { Fragment } from "react";
import HomePage from "../components/home-page/home-page";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SimpleHead
        title="Volba pro Teplice"
        description="Domovská stránka teplické politické strany - Volba pro Teplice"
        url=""
      />
      <HomePage />
    </Fragment>
  );
};

export default Home;
