import axios from 'axios';

export const loginmedicoRequest = async (email:string,password:string)=>{
  return axios.post("https://citas-medicas-nu.vercel.app/api/v1/doctor/login_doctor",{
    email,
    password
  })
}