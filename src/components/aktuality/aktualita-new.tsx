import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "../../hooks/use-form-hook";
import Input from "../form-elements/input";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import Button from "../ui-elements/button";
import QuillNoSSRWrapper from "../editor/quill-wrapper";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../validators/validators";

const AktualitaNew: React.FC = () => {
  const router = useRouter()
  const [editorValue, setEditorValue] = useState<string>('hello from quill');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState<boolean>(false);
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

  console.log(editorValue)

  const submitNewNewsHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("subtitle", formState.inputs.subtitle.value);
      formData.append("message", editorValue);
      formData.append("image", selectedFiles[0]);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/news",
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );

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
        <form className="" onSubmit={submitNewNewsHandler}>
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
          <QuillNoSSRWrapper theme="snow" value={editorValue} onChange={setEditorValue} />

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
