import axios from "../libs/axios";

interface RegisterData {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  phone: string;
}

export const registerRequest =async (data:RegisterData) => {
    return axios.post("/patient",data)
  }