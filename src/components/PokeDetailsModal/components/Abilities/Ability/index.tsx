import { View, Text } from "react-native";
import React from "react";
import useGetAbility from "../hooks/useGetAbility";
import { InfoText } from "../../../../PokeCard/style";

type Props = {
  ability: { is_hidden: boolean; ability: { name: string; url: string } };
};

export default function Ability({ ability }: Props) {
  const effect = useGetAbility(ability.ability.url);
  if (!effect) return;
  return (
    <View style={{ padding: 5, paddingVertical: 10 }}>
      <InfoText>{ability.ability.name.toUpperCase()}</InfoText>
      <InfoText>Secreta: {ability.is_hidden ? "Verdadeiro" : "Falso"}</InfoText>
      <InfoText>Detalhes: {effect}</InfoText>
    </View>
  );
}
