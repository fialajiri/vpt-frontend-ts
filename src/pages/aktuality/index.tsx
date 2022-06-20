import Head from "next/head";
import { Fragment } from "react";
import { NextPage } from "next";
import { AktualitaDoc } from "../../interfaces/models";
import AktualityHead from "../../components/meta/aktuality-head";
import { getAllNews } from "../../utilities/api-utils";
import AktualityList from "../../components/aktuality/aktuality-list";

interface AktualityProps {
  aktuality: AktualitaDoc[];
}

const AktualityPage: NextPage<AktualityProps> = ({ aktuality }) => {
  let aktualityMetaData = "";

  return (
    <Fragment>
      <AktualityHead
        title="Aktuality"
        description="Aktuality Volby pro Teplice"
        url="aktuality"
        aktuality={aktuality}
      />
      <AktualityList aktuality={aktuality} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const aktuality: AktualitaDoc[] = await getAllNews();
  aktuality.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });

  return {
    props: {
      aktuality,
    },
    revalidate: 60,
  };
};

export default AktualityPage;
