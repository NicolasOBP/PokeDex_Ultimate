import axios from "axios";
import { useEffect, useState } from "react";
import { extraDataPoke, pokeType } from "../types/pokeType";
import { useToastDispatch } from "../context/Toast/useToastDispatch";

type Type = {
  type: {};
};

export default function CallOnePoke(url: string) {
  const [singleDataPoke, setSingleDataPoke] = useState<pokeType>();
  const [extraSingleDataPoke, setExtraSingleDataPoke] =
    useState<extraDataPoke>();
  const { showToast } = useToastDispatch();
  let url2: string;

  useEffect(() => {
    get();
  }, []);

  function get() {
    axios
      .get(url)
      .then(function (response) {
        url2 = response.data.species.url;

        setSingleDataPoke({
          id: response.data.id,
          front_img: response.data.sprites.front_default,
          pokeTypes: response.data.types.map((type: Type) => type.type),
          abilities: response.data.abilities,
          stats: response.data.stats,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(get2);
  }

  function get2() {
    axios
      .get(url2)
      .then(function (response) {
        setExtraSingleDataPoke({
          generation: response.data.generation.name,
          habitat: response.data.habitat.name,
          egg_group: response.data.egg_groups,
          evolution_chain: response.data.evolution_chain.url,
          url: url,
          name: response.data.name,
        });
      })
      .catch(function (error) {
        console.log(error);
        showToast({
          message: "Erro ao procurar Pokemon",
          type: "Error",
          duration: 3000,
        });
      });
  }

  return { singleDataPoke, extraSingleDataPoke };
}
