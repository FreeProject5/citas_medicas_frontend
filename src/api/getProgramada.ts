import axios from "axios";

const confirmadas = async (state:Function) => {
    const peticion = await axios.get("https://citas-medicas-nu.vercel.app/api/v1/checkup/bydoctor/2")
    state(peticion.data.data)
}
export default confirmadas