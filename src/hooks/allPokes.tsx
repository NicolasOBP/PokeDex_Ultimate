import axios from "axios";
import { useEffect, useState } from "react";
import { allPokeType } from "../types/allPokesType";
import { useStorage } from "../context/storage";
import { useToastDispatch } from "../context/Toast/useToastDispatch";

export default function CallAllPokes() {
  const [data, setData] = useState<allPokeType[]>();
  const { name } = useStorage();
  const { showToast } = useToastDispatch();

  useEffect(() => {
    setData(null);
    get();
  }, [name]);

  function get() {
    const url = name
      ? "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase()
      : "https://pokeapi.co/api/v2/pokemon?limit=1302";
    axios
      .get(url)
      .then(function (response) {
        if (name) {
          setData([
            {
              name: response.data.name,
              url: "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase(),
            },
          ]);
        } else {
          setData(response.data.results);
        }
      })
      .catch(function (error) {
        console.log(error);
        showToast({
          message: "Pokemon não encontrado",
          type: "Error",
          duration: 3000,
        });
      });
  }

  return data;
}
