import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
import KandidatiList from "../../components/kandidati/kandidati-list";
import { KandidatDoc } from "../../interfaces/models";
import kandidatiData from "../../../public/data/kandidati.json";

interface KandidatiProps {
  kandidati: KandidatDoc[];
}

const KandidatiPage: NextPage<KandidatiProps> = ({ kandidati }) => {
  const loadedCandidatesNames: string = "";

  console.log(kandidati);

  return (
    <Fragment>
      <Head>
        <title>Zastupitelé</title>
        <meta name="keywords" content={loadedCandidatesNames} />
        <meta name="description" content="Seznam zastupitelů Volby pro Teplice" />
      </Head>
      <KandidatiList kandidati={kandidati} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const kandidati: KandidatDoc[] = kandidatiData;

  return {
    props: {
        kandidati
    },
    revalidate: 60 * 60 * 24,
  };
};

export default KandidatiPage;
