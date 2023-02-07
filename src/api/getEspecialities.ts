import axios from "axios";

interface IEspecialidad {
  id: number;
  name: string;
}

export const getSpecialities = async (): Promise<IEspecialidad[]> => {
  const response = await axios.get(
    "https://citas-medicas-nu.vercel.app/api/v1/specialties"
  );

  return response.data.data;
};
