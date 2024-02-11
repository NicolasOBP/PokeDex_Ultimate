import { View } from "react-native";
import React from "react";
import { Title } from "../../../../style/style";
import Ability from "./Ability";

type Props = {
  abilities: [{ is_hidden: boolean; ability: { name: string; url: string } }];
};

export default function Abilities({ abilities }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <Title>Habilidades</Title>
      {abilities.map((item) => (
        <Ability key={item.ability.name} ability={item} />
      ))}
    </View>
  );
}
