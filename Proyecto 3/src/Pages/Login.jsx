import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import login from "./Login.module.css";
import { authenticate } from "../Services/authServices";
import Input from "../Components/Input";
import ButtonSpinner from "../Components/ButtonSpinner";
import { useState } from "react";
import AlertNavigation from "../Components/AlertNavigation";
import { useAuthContext } from "../Context/AuthContext";

function Login() {
  const [loading, setLoading] = useState(false);
  const [alertNavigation, setAlertNavigation] = useState({
    message: "",
    variant: "",
  });
  const { handleLogin } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      const responseUser = await authenticate(data.email, data.password);
      setLoading(false);
      console.log("🚀 ~ onSubmit ~ responseUser:", responseUser);
      setAlertNavigation({
        message: "Bienvenido/a",
        variant: "success",
        duration: 2000,
        link: "/",
      });
      handleLogin(responseUser);
    } catch (e) {
      console.log("🚀 ~ onSubmit ~ e:", e);
      setLoading(false);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <>
      <h2 className={login.title}>Ingresar</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Ingresar email"
          register={{
            ...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            }),
          }}
          errors={errors}
        />

        <Input
          label="Contraseña"
          type="password"
          name="password"
          placeholder="Ingresar su contraseña"
          register={{
            ...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
            }),
          }}
          errors={errors}
        >
          {errors?.password?.type === "minLength" && (
            <Form.Text className="text-danger">
              Debe escribir al menos 6 caractres
            </Form.Text>
          )}
          {errors?.password?.type === "maxLength" && (
            <Form.Text className="text-danger">
              Debe escribir como maximo 12 caractres
            </Form.Text>
          )}
        </Input>
        <ButtonSpinner label="Ingresar" loading={loading} />
        <AlertNavigation {...alertNavigation} />
      </Form>
    </>
  );
}

export default Login;
