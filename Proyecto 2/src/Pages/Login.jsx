import { useState } from "react";
function Login() {
  const [form, setForm] = useState({ correo: "", clave: "" });
  const [error, setError] = useState({ correo: "", clave: "" });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
    if (value === "") {
      setError({ ...error, [name]: "El campo es obligatorio" });
    } else {
      setError({ ...error, [name]: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="correo"
          value={form.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>{error.correo}</div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          name="clave"
          value={form.password}
          onChange={handleChange}
        ></input>
      </div>
      <div>{error.clave}</div>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
