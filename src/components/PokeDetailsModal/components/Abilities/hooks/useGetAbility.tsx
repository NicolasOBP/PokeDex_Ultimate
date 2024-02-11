import axios from "axios";
import { useEffect, useState } from "react";

type Effect = {
  effect: string;
  short_effect: string;
  language: { name: string };
};

export default function useGetAbility(abilityURL: string) {
  const [effect, setEffct] = useState("");

  useEffect(() => getAbility(), []);

  function getAbility() {
    axios
      .get(abilityURL)
      .then(function (response) {
        response.data.effect_entries.map((item: Effect) => {
          if (item.language.name === "en") {
            setEffct(item.short_effect);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return effect;
}
