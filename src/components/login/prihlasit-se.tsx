import { Fragment } from "react";
import Input from "../form-elements/input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../validators/validators";
import { useRouter } from "next/router";
import { useAuth } from "../../context/auth-context";
import { MethodEnum, useHttpClient } from "../../hooks/http-hook";
import { useForm } from "../../hooks/use-form-hook";
import Button from "../ui-elements/button";

const PrihlasitSe: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const LoginFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { token } = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/login`,
        MethodEnum.POST,
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      if (token) {
        login(token);
        router.push("aktuality/new");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="prihlasit-se__container">
        <h2 className="heading-secondary">Přihlašte se</h2>
        <hr />
        <form onSubmit={LoginFormHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Prosím zadejte platný email."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Heslo"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Heslo musí mít mininálně 6 znaků."
            onInput={inputHandler}
          />
          <Button
            className="prihlasit-se__form--button"
            disabled={!formState.isValid}
          >
            Přihlásit se
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default PrihlasitSe;
