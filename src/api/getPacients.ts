import axios from "axios";

export const getPacients = async () => {
    const response = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/patient"
    );
    const patients = response.data.data;
    return patients
  };