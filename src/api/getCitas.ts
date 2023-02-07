import axios from "axios";

const citas_pro = async (state:Function) => {
    const peticion = await axios.get("https://citas-medicas-nu.vercel.app/api/v1/doctor/findAll/Schedule")
    state(peticion.data.data.data)
}
export default citas_pro