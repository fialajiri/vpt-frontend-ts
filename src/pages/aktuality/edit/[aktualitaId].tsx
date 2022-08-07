import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import AktualitaNew from "../../../components/aktuality/aktualita-new";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { useAuth } from "../../../context/auth-context";
import { AktualitaDoc, IParams } from "../../../interfaces/models";
import { getNewsById, getAllNews } from "../../../utilities/api-utils";

interface EditNewsProps {
    aktualita: AktualitaDoc
}

const EditNewsItem: NextPage<EditNewsProps> = ({aktualita}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/prihlasit-se");
    } else {
      setIsLoading(false);
    }
  }, [router, isAuthenticated]);

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  return <AktualitaNew aktualita={aktualita}/>;
};

export default EditNewsItem;

export const getStaticProps: GetStaticProps = async (context) => {
  const { aktualitaId } = context.params as IParams;

  const aktualita: AktualitaDoc = await getNewsById(aktualitaId);

  return {
    props: {
      aktualita,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const aktuality: AktualitaDoc[] = await getAllNews();
  const ids = aktuality.map((newsItem) => newsItem.id);
  const pathsWithParams = ids.map((id) => ({ params: { aktualitaId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
