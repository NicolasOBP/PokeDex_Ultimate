import { View } from "react-native";
import React from "react";
import { Details } from "../../../../../../types/pokeType";
import useGetDetails from "./hooks/useGetDetails";
import { InfoText } from "../../../../../PokeCard/style";

type Props = {
  details: Details;
};

export default function EvolutionDetails({ details }: Props) {
  const data = useGetDetails(details);

  if (!data) return;

  return (
    <View
      style={{ flexDirection: "row", flexWrap: "wrap", left: 20, bottom: 10 }}
    >
      <InfoText>Detalhes: </InfoText>
      {data.map((item) => (
        <InfoText key={item.label}>
          {item.label.toUpperCase()}: {item.value};{" "}
        </InfoText>
      ))}
    </View>
  );
}
