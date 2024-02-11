import { Image, View } from "react-native";
import React from "react";
import { Card, IMGContainer, InfoText, ListTypeContainer } from "./style";
import CallOnePoke from "../../hooks/getPoke";
import { TitleCard } from "../../style/style";
import TypeCard from "./components/TypeCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import useNavigate from "./hooks/useNavigate";

type Props = {
  name: string;
  url: string;
};

export default function PokeCard({ name, url }: Props) {
  const { singleDataPoke, extraSingleDataPoke } = CallOnePoke(url);
  const navigateTo = useNavigate();

  if (!singleDataPoke || !extraSingleDataPoke) return;

  return (
    <TouchableOpacity
      onPress={() => navigateTo(extraSingleDataPoke, singleDataPoke)}
    >
      <Card>
        <View style={{ maxWidth: "55%", justifyContent: "space-between" }}>
          <TitleCard>{name.toUpperCase()}</TitleCard>
          <InfoText>{extraSingleDataPoke.generation.toUpperCase()}</InfoText>
          <InfoText>
            Habitate: {extraSingleDataPoke.habitat.toUpperCase()}
          </InfoText>

          <ListTypeContainer>
            {singleDataPoke.pokeTypes.map((item) => (
              <TypeCard key={item.name} name={item.name} />
            ))}
          </ListTypeContainer>
        </View>

        <IMGContainer>
          <Image
            style={{ width: 130, height: 130 }}
            source={{ uri: singleDataPoke.front_img }}
          />
        </IMGContainer>
      </Card>
    </TouchableOpacity>
  );
}
