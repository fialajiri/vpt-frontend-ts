import { Fragment } from "react";
import { NextPage } from "next";
import KandidatiList from "../../components/kandidati/kandidati-list";
import KandidatiHead from "../../components/meta/members-head";
import { KandidatDoc } from "../../interfaces/models";
import kandidatiData from "../../../public/data/kandidati.json";

interface KandidatiProps {
  kandidati: KandidatDoc[];
}

const KandidatiPage: NextPage<KandidatiProps> = ({ kandidati }) => {
  return (
    <Fragment>
      <KandidatiHead
        title="Kanditádi Volby pro Teplice"
        url="kandidati"
        description="Kandidáti Volby pro Teplice do zastupitelstva města Teplice do komunálních voleb 2022"
        zastupitele={kandidati}
      />
      <KandidatiList kandidati={kandidati} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const kandidati: KandidatDoc[] = kandidatiData;

  return {
    props: {
      kandidati,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default KandidatiPage;
