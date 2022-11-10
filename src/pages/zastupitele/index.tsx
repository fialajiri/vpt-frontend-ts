import type { NextPage } from "next";
import { Fragment } from "react";
import { ZastupitelDoc } from "../../interfaces/models";
import ZastupiteleList from "../../components/zastupitele/zastupitele-list";
import ZastupiteleHead from "../../components/meta/members-head";
import zastupiteleData from '../../../public/data/zastupitele.json'
import { getAllMembers } from "../../utilities/api-utils";

interface ZastupiteleProps {
  zastupitele: ZastupitelDoc[];
}

const Zastupitele: NextPage<ZastupiteleProps> = ({ zastupitele }) => {
  return (
    <Fragment>
      <ZastupiteleHead
        title="Naši zastupitelé"
        url="/zastupitele"
        description="Zastupitelé strany Volba pro Teplice v městském zastupitelstvu"
        zastupitele={zastupitele}
      />
      <ZastupiteleList zastupitele={zastupitele} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const zastupitele: ZastupitelDoc[] = zastupiteleData;

  return {
    props: {
      zastupitele,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Zastupitele;
