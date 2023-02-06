import axios from "axios";

export const getDoctors = async () => {
    const response = await axios.get(
      "https://citas-medicas-nu.vercel.app/api/v1/doctor"
    );
    const doctors = response.data.data.data;
    return doctors;
  };

