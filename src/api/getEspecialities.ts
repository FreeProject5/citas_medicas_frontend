import axios from "axios";

export const getSpecialities = async () => {
    const response = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/specialties"
    );
    const specialialities = response.data.data;
    return specialialities;
  };