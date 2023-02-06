import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Navgar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router";

// const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const schema = yup
  .object({
    firstname: yup.string().required("Este campo es requerido."),
    lastname: yup.string().required("Este campo es requerido."),
    email: yup.string().email().required("Ingresa tu email."),
    password: yup
      .string()
      .required("No ingresaste una contraseña.")
      .min(
        8,
        "La contraseña es muy corta - debe tener 8 caracteres como minimo."
      ),
    phone: yup
      .string()
      .min(
        9,
        "El teléfono debe tener como mínimo 9 dígitos"
      )
      .max(
        12,
        "El teléfono debe tener como máximo 12 dígitos"
      )
      // .matches(phoneRegex, "Invalid phone")
      .required("Teléfono es requerido"),
    age: yup.number().positive().integer().required("Ingresa tu edad"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const SignUp = () => {
  const [resStatus, setResStatus] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    axios
      .post("https://citas-medicas-nu.vercel.app/api/v1/patient", data)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          console.log(response)
          setResStatus("Registro exitoso!");
          navigate("/login");
        } else {
          setResStatus("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(resStatus);
  return (
    <>
      <Navgar />
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2 justify-content-center align-items-center vh-130 font-robo">
            <div className="card-heading"></div>
            <div className="card-body2 sign_section">
              <h2 className="title text-center fs-1 text_color"><br></br>REGISTRATE</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                <div className="input-group form">
                  <label className="mt-4 text_color" htmlFor="firstname">NOMBRES:</label>
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Tu nombres aquí"
                    required
                    {...register("firstname")}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors.firstname?.message}
                  </span>
                </div>
                    <div className="input-group form">
                      <label htmlFor="lastname">APELLIDOS:</label>
                      <input
                        className="input--style-2"
                        placeholder="Tus apellidos aquí"
                        {...register("lastname")}
                        required
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.lastname?.message}
                      </span>
                  </div>
                  <div className="input-group form">
                      <label htmlFor="age">EDAD:</label>
                      <input
                        className="input--style-2"
                        placeholder="Ingresa tu edad aquí"
                        required
                        {...register("age")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.age?.message}
                      </span>
                </div>
                  <div className="input-group form">
                      <label htmlFor="email">CORREO ELECTRÓNICO:</label>
                      <input
                        className="input--style-2"
                        placeholder="ejemplo@correo.com"
                        required
                        {...register("email")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.email?.message}
                      </span>

                </div>
                  <div className="input-group form">
                      <label htmlFor="password">CONTRASEÑA:</label>
                      <input
                        className="input--style-2"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        required
                        {...register("password")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.password?.message}
                      </span>
                </div>
                  <div className="input-group form">
                      <label htmlFor="phone">TELÉFONO:</label>
                      <input
                        className="input--style-2"
                        placeholder="Ingresa tu teléfono"
                        required
                        {...register("phone")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.phone?.message}
                      </span>
                </div>
                <div className="p-t-30">
                  <button className="btn btn-primary btn btn-success bg-info mt-4 fw-semibold shadow-sm" type="submit">
                    REGISTRARSE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
