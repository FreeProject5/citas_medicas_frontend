import axios from 'axios';

export const loginRequest = async (email:string,password:string)=>{
  return axios.post("https://citas-medicas-nu.vercel.app/api/v1/patient/login",{
    email,
    password
  })
}