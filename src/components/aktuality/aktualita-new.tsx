import React, { Fragment, useEffect, useState } from "react";
import {useRouter} from "next/router";
import { useForm } from "../../hooks/use-form-hook";
import Input from "../form-elements/input";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import Button from "../ui-elements/button";
import Editor from "../editor/Editor";
import { MethodEnum, useHttpClient } from "../../hooks/http-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../validators/validators";
import { useAuth } from "../../context/auth-context";

const AktualitaNew: React.FC = () => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState<boolean>(false);
  const { token } = useAuth();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      subtitle: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  console.log(editorData);

  const submitNewNewsHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("subtitle", formState.inputs.subtitle.value);
      formData.append("message", editorData);
      formData.append("image", selectedFiles[0]);
      console.log(formData);
      //   await sendRequest(
      //     process.env.REACT_APP_BACKEND_URL + "/news",
      //     MethodEnum.POST,
      //     formData,
      //     {
      //       Authorization: "Bearer " + token,
      //     }
      //   );

      router.push("/aktuality");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="aktualita-new__container">
        <h2 className="heading-secondary">Přidej aktualitu</h2>
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
          />
          <Input
            id="subtitle"
            element="input"
            label="Podtitulek"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(75)]}
            errorText="Podtitulek musí mít minimálně 10 a maximálně 75 znaků."
            onInput={inputHandler}
          />
          <Editor
            value="hello"
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
          />
          <Button
            className="aktaualita-new__form--button"
            disabled={!formState.isValid}
          >
            Uložit
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AktualitaNew;
