import { View } from "react-native";
import React from "react";
import { Title } from "../../../../style/style";
import { InfoText } from "../../../PokeCard/style";

export default function EggGroup() {
  return (
    <View style={{ flex: 1 }}>
      <Title>Egg Group</Title>
      <InfoText>
        {" "}
        Eggs Group são usados para a brindagem dos Pokemon, se possui um pokemon
        que o Egg Group dele é mosntro, ele só poderá se bridar com um Pokemon
        que tenha o mesmo Egg Group.
      </InfoText>
      <InfoText> Apenas Pokemon adultos podem ser bridados.</InfoText>
      <InfoText> Pokemon Lendários não podem bridar!</InfoText>
    </View>
  );
}
