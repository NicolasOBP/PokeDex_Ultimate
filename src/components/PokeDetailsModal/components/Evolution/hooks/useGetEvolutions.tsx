import axios from "axios";
import { useEffect, useState } from "react";
import { evolutionType } from "../../../../../types/pokeType";

export default function useGetEvolutions(url: string) {
  const [evolutions, setEvolutions] = useState<evolutionType>();

  useEffect(() => getEvolutions(), []);

  function getEvolutions() {
    axios
      .get(url)
      .then((response) => {
        setEvolutions({
          species: response.data.chain.species,
          evolves_to: response.data.chain.evolves_to,
        });
      })
      .catch((error) => console.log(error));
  }
  return evolutions;
}
