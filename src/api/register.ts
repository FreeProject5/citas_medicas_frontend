import axios from "../libs/axios";
import { redirect } from "react-router-dom";

interface RegisterData {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  phone: string;
}

export const registerRequest = async (data: RegisterData) => {
  return axios
    .post("https://citas-medicas-nu.vercel.app/api/v1/pacient", data)
    .then(function (response) {
      console.log(response);
      redirect("/login");
    })
    .catch(function (error) {
      console.log(error);
    });
};
