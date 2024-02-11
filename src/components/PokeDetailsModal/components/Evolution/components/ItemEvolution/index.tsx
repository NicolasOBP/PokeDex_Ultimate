import { View, Image } from "react-native";
import React from "react";
import useGetPokeFromEvolution from "../../hooks/useGetPokeFromEvolution";
import { InfoText } from "../../../../../PokeCard/style";
import TypeCard from "../../../../../PokeCard/components/TypeCard";
import { EvolutionContainer } from "./style";
import { Details } from "../../../../../../types/pokeType";
import EvolutionDetails from "../Details";

type Props = {
  name: string;
  pokeName: string;
  evolutionDetails?: Details;
};

export default function ItemEvolution({
  name,
  pokeName,
  evolutionDetails,
}: Props) {
  const pokeData = useGetPokeFromEvolution(name);

  if (!pokeData) return;

  return (
    <EvolutionContainer $name={name} $pokeName={pokeName}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfoText>{name.toUpperCase()}</InfoText>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: pokeData.img }}
        />
        <View style={{ alignSelf: "flex-start", right: 10 }}>
          {pokeData.type.map((type) => (
            <TypeCard name={type.name} key={type.name} />
          ))}
        </View>
      </View>

      <EvolutionDetails details={evolutionDetails} />
    </EvolutionContainer>
  );
}
