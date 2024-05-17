import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import login from "./Registro.module.css";
import { create } from "../Services/authServices";
import Input from "../Components/Input";
import ButtonSpinner from "../Components/ButtonSpinner";
import { useState } from "react";
import AlertNavigation from "../Components/AlertNavigation";
import { registroErrorMessage } from "../Utils/errorMessages";

function Registro() {
  const [loading, setLoading] = useState(false);
  const [alertNavigation, setAlertNavigation] = useState({
    message: "",
    variant: "",
  });
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const responseUser = await create(data);
      setLoading(false);
      setAlertNavigation({
        message: "Tu usuario ha sido registrado",
        variant: "success",
        duration: 2000,
        link: "/ingresar",
      });
      console.log("🚀 ~ onSubmit ~ responseUser:", responseUser);
    } catch (e) {
      console.log("🚀 ~ onSubmit ~ e:", e.code);
      setLoading(false);
      setAlertNavigation({
        message: registroErrorMessage[e.code] || "Ha ocurrido un error",
        variant: "danger",
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          name="name"
          placeholder="Ingresar nombre"
          register={{ ...register("name") }}
        />

        <Input
          label="Apellido"
          name="lastname"
          placeholder="Ingresar apellido"
          register={{ ...register("lastname") }}
        />

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
              minLength: 4,
              maxLength: 12,
            }),
          }}
          errors={errors}
        >
          {errors?.password?.type === "minLength" && (
            <Form.Text className="text-danger">
              Debe escribir al menos 4 caractres
            </Form.Text>
          )}
          {errors?.password?.type === "maxLength" && (
            <Form.Text className="text-danger">
              Debe escribir como maximo 12 caractres
            </Form.Text>
          )}
        </Input>
        <ButtonSpinner label="Registrarse" loading={loading} />
        <AlertNavigation {...alertNavigation} />
      </Form>
    </>
  );
}

export default Registro;