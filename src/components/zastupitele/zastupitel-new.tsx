import { Fragment, useState } from "react";

import { useForm } from "../../hooks/use-form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../validators/validators";
import Input from "../form-elements/input";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import Button from "../ui-elements/button";

const NewZastupitel: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState<boolean>(false);
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      occupation: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      bio: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <Fragment>
      <div className="zastupitel-new__container">
        <h2 className="heading-secondary">Přidej zastupitele</h2>
        <hr />
        <form className="zastupitel-new__form">
          <Input
            id="name"
            element="input"
            label="jméno"
            type="text"
            validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(30)]}
            errorText="Jméno musí mít minimálně 5 a maximálně 30 znaků."
            onInput={inputHandler}
          />
          <Input
            id="occupation"
            element="input"
            label="Povolání"
            type="text"
            validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(100)]}
            errorText="Povolání musí mít minimálně 3 a maximálně 100 znaků."
            onInput={inputHandler}
          />
          <Input
            id="email"
            element="input"
            label="Email"
            type="text"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Prosím zadejte platný email."
            onInput={inputHandler}
          />
          <Input
            id="bio"
            element="textarea"
            label="Medajlonek"
            type="text"
            rows={10}
            validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(30)]}
            errorText="Medajlonek musí mít minimálně 50 a maximálně 600 znaků."
            onInput={inputHandler}
          />
          <MultipleImageUpload
            inputId="image"
            maxFiles={1}
            errorText={"Vyberte fotografii"}
            setImages={setSelectedFiles}
            isValid={imageIsValid}
            setIsValid={setImageIsValid}
            buttonLabel={"Vyberte fotografii"}
          />
          <Button>Uložit</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewZastupitel;
