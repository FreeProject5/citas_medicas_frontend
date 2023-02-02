import { json } from "react-router-dom";
import { PokedexScreen, PokemonForm } from "../../components";
import * as SERVICE from "../../services/supabase";

export default function Pokedex() {
//   const [pokemon, setPokemon] = useState<any>(null);

//   const [name, setName] = useState<string>("pikachu");

  const fetchPatient = async () => {
    // if (!name) return;

    const response = await fetch(
      "http://127.0.0.1:6005/api/v1/patient",
      {method:"post",
        body: JSON.stringify(body),
    }
    );
    const data = await response.json();
    setPokemon(data);
    const user = await SERVICE.getCurrentUser();
    await SERVICE.store({
      data,
      name,
      user_id: user?.user.id as string,
    });
    setName("");
  };

  const handleInpuChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return ()
};