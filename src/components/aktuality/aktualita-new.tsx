import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "../../hooks/use-form-hook";
import Input from "../form-elements/input";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import Button from "../ui-elements/button";
import Editor from "../editor/Editor";
import { MethodEnum, useHttpClient } from "../../hooks/http-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH } from "../../validators/validators";
import { useAuth } from "../../context/auth-context";
import ErrorModal from "../ui-elements/error-modal";
import LoadingSpinner from "../ui-elements/loading-spinner";
import { AktualitaDoc } from "../../interfaces/models";

interface AktualitaNewProps {
  aktualita?: AktualitaDoc;
}

const AktualitaNew: React.FC<AktualitaNewProps> = ({ aktualita }) => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<string>(aktualita?.message || "");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState<boolean>(false);
  const { token } = useAuth();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: aktualita?.title || "",
        isValid: aktualita?.title ? true : false,
      },
      subtitle: {
        value: aktualita?.subtitle || "",
        isValid: aktualita?.subtitle ? true : false,
      },
    },
    false
  );

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const submitNewNewsHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("subtitle", formState.inputs.subtitle.value);
      formData.append("message", editorData);
      formData.append("image", selectedFiles[0]);

      let url = `${process.env.REACT_APP_BACKEND_URL}/news`;
      let method = MethodEnum.POST;

      if (aktualita) {
        url = `${process.env.REACT_APP_BACKEND_URL}/news/${aktualita.id}`;
        method = MethodEnum.PATCH;
      }

      await sendRequest(url, method, formData, {
        Authorization: "Bearer " + token,
      });

      router.push("/aktuality");
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} modalProps={{ header: error }} />
      <div className="aktualita-new__container">
        <h2 className="heading-secondary">Přidat aktualitu</h2>
        <hr />
        <form onSubmit={submitNewNewsHandler}>
          <Input
            id="title"
            element="input"
            label="Titulek"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(75)]}
            errorText="Titulek musí mít minimálně 10 a maximálně 75 znaků."
            onInput={inputHandler}
            initialValue={aktualita?.title}
            initialValid={aktualita?.title ? true : false}
          />
          <Input
            id="subtitle"
            element="input"
            label="Podtitulek"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(75)]}
            errorText="Podtitulek musí mít minimálně 10 a maximálně 75 znaků."
            onInput={inputHandler}
            initialValue={aktualita?.subtitle}
            initialValid={aktualita?.subtitle ? true : false}
          />
          <Editor
            value={aktualita?.message || ""}
            name="zpráva"
            onChange={(data) => {
              setEditorData(data);
            }}
            editorLoaded={editorLoaded}
          />

          <MultipleImageUpload
            inputId="image"
            maxFiles={1}
            setImages={setSelectedFiles}
            isValid={imageIsValid}
            setIsValid={setImageIsValid}
            buttonLabel={"Prosím vyberte obrázek"}
            initialFilesUrl={aktualita?.image ? [aktualita?.image.imageUrl] : []}
          />
          <Button className="aktaualita-new__form--button" disabled={!formState.isValid}>
            Uložit
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AktualitaNew;
