import axios from "axios";
import { useEffect, useState } from "react";
type Type = {
  type: {};
};

type Pokemon = {
  img: string;
  type: [{ name: string; url: string }];
  name: string;
};

export default function useGetPokeFromEvolution(name: string) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => getPokeFromEvolution(), []);
  function getPokeFromEvolution() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => {
        setPokemon({
          img: response.data.sprites.front_default,
          type: response.data.types.map((type: Type) => type.type),
          name: response.data.name,
        });
      })
      .catch((error) => console.log(error));
  }

  return pokemon;
}
