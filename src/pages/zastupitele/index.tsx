import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { ZastupitelDoc } from "../../interfaces/models";
import ZastupiteleList from "../../components/zastupitele/zastupitele-list";
import { getAllMembers } from "../../utilities/api-utils";

interface ZastupiteleProps {
  zastupitele: ZastupitelDoc[];
}

const Zastupitele: NextPage<ZastupiteleProps> = ({ zastupitele }) => {
  let loadedMemberNames: string = "";
  zastupitele.map((element) => {
    loadedMemberNames += `${element.name}, `;
  });

  return (
    <Fragment>
      <Head>
        <title>Zastupitelé</title>
        <meta name="keywords" content={loadedMemberNames} />
        <meta name="description" content="Seznam zastupitelů Volby pro Teplice" />
      </Head>
      <ZastupiteleList zastupitele={zastupitele} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const zastupitele: ZastupitelDoc[] = await getAllMembers();

  return {
    props: {
      zastupitele,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Zastupitele;
