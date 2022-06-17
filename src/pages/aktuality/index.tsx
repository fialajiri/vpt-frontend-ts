import Head from "next/head";
import { Fragment } from "react";
import { NextPage } from "next";
import { AktualitaDoc } from "../../interfaces/models";

import { getAllNews } from "../../utilities/api-utils";
import AktualityList from "../../components/aktuality/aktuality-list";

interface AktualityProps {
  aktuality: AktualitaDoc[];
}

const AktualityPage: NextPage<AktualityProps> = ({ aktuality }) => {
  let aktualityMetaData = "";

  return (
    <Fragment>
      <Head>
        <title>Aktuality</title>
        <meta name="keywords" content={aktualityMetaData} />
        <meta name="description" content="Aktuality Volby pro Teplice" />
      </Head>
      <AktualityList aktuality={aktuality} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const aktuality: AktualitaDoc[] = await getAllNews();

  return {
    props: {
      aktuality,
    },
    revalidate: 60,
  };
};

export default AktualityPage;
