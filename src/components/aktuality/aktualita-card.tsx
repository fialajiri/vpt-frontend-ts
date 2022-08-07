import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { MethodEnum, useHttpClient } from "../../hooks/http-hook";
import { AktualitaDoc } from "../../interfaces/models";
import ErrorModal from "../ui-elements/error-modal";
import Modal from "../ui-elements/modal";
import LoadingSpinner from "../ui-elements/loading-spinner";
import Button from "../ui-elements/button";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita }) => {
  const router = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isAuthenticated, token } = useAuth();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  const editAktualitaHandler = () => {
    router.push(`/aktuality/edit/${aktualita.id}`)
  }

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const deleteAktualitaHandler = async () => {
    await sendRequest(
      `${process.env.REACT_APP_BACKEND_URL}/news/${aktualita.id}`,
      MethodEnum.DELETE,
      {},
      {
        Authorization: "Bearer " + token,
      }
    );

    setShowConfirmModal(false);
    router.reload()
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={clearError} modalProps={{ header: error }} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        modalProps={{
          header: "Opravdu chcete aktualitu smazat",
          footer: (
            <Fragment>
              <Button onClick={cancelDeleteHandler}>Zrušit</Button>
              <Button danger onClick={deleteAktualitaHandler}>
                Smazat
              </Button>
            </Fragment>
          ),
        }}
      />
      <div className="aktualita-card__text-container">
        <h2 className="heading-secondary aktualita-card__heading">{aktualita.title}</h2>
        <time className="aktualita-card__date">
          {new Date(aktualita.date).toLocaleDateString("cs-CZ")}
        </time>
        <h3 className="aktualita-card__perex">{aktualita.subtitle}</h3>
        <div
          className="aktualita-card__message"
          dangerouslySetInnerHTML={{ __html: aktualita.message }}
        ></div>
      </div>
      <figure className="aktualita-card__image">
        <Image
          src={aktualita.image.imageUrl}
          alt={aktualita.title}
          layout="fill"
          objectFit="contain"
        />
      </figure>
      {isAuthenticated && (
        <div className="aktualita-card__buttons">
          <Button inverse onClick={editAktualitaHandler}>Editovat</Button>
          <Button inverse onClick={showDeleteWarningHandler}>Smazat</Button>
        </div>
      )}
    </Fragment>
  );
};

export default AktualitaCard;
