import { View } from "react-native";
import React from "react";
import { Title } from "../../../../style/style";
import { InfoText } from "../../../PokeCard/style";

export type StatsType = [
  {
    base_stat: number;
    stat: { name: string };
  }
];

type Props = {
  stats: StatsType;
};

export default function Stats({ stats }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <Title>Status Base</Title>
      {stats.map((stats) => (
        <InfoText key={stats.stat.name}>
          {stats.stat.name.toUpperCase()}: {stats.base_stat}
        </InfoText>
      ))}
      <InfoText>
        Os Status são resposáveis pelo o comportamento do Pokemon em batalha.
        Com os Status Base você pode verificar o que melhorar no pokemon
      </InfoText>
      <InfoText>
        Se o Pokemon tiver um Status Base de HP baixo, quer dizer que você tem
        que melhorar ou o ATTACK ou SPECIAL-ATTACK
      </InfoText>
    </View>
  );
}
