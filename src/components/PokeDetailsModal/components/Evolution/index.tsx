import { View, FlatList } from "react-native";
import React from "react";
import { Title } from "../../../../style/style";
import useGetEvolutions from "./hooks/useGetEvolutions";
import ItemEvolution from "./components/ItemEvolution";

type Props = {
  evolution_url: string;
  pokeName: string;
};

export default function Evolution({ evolution_url, pokeName }: Props) {
  const evolutions = useGetEvolutions(evolution_url);

  if (!evolutions) return;

  return (
    <View style={{ flex: 1 }}>
      <Title>Evoluções</Title>
      <ItemEvolution pokeName={pokeName} name={evolutions.species.name} />

      <FlatList
        data={evolutions.evolves_to}
        renderItem={(evolution) => (
          <ItemEvolution
            evolutionDetails={evolution.item.evolution_details}
            pokeName={pokeName}
            key={evolution.item.species.name}
            name={evolution.item.species.name}
          />
        )}
      />

      {evolutions.evolves_to.map((evolution) =>
        evolution.evolves_to.map((evolution2) => (
          <ItemEvolution
            evolutionDetails={evolution2.evolution_details}
            pokeName={pokeName}
            key={evolution2.species.name}
            name={evolution2.species.name}
          />
        ))
      )}
    </View>
  );
}
