import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import AktualitaNew from "../../components/aktuality/aktualita-new";
import { useAuth } from "../../context/auth-context";
import LoadingSpinner from "../../components/ui-elements/loading-spinner";

const NewAktualitaPage: NextPage = () => {
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

  return <AktualitaNew />;
};

export default NewAktualitaPage;
