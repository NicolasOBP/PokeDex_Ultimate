import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ViewScreen } from "../../style/style";
import { PropsNavStack } from "../../routes/StackNavigator";
import { IMGContainer } from "../../components/PokeCard/style";
import TypeCard from "../../components/PokeCard/components/TypeCard";
import { CardView, InfoTile, ItemBox, InfoText } from "./style";
import PokeDetailsModal, {
  Components,
} from "../../components/PokeDetailsModal";

export default function MainPokemonScreen({ route }: PropsNavStack) {
  const data = route.params.item;
  const data2 = route.params.item2;
  const [showModal, setShowModal] = useState(false);
  const [componentModal, setComponentModal] = useState<Components>();

  function CallModal(item: Components) {
    setComponentModal(item);
    setShowModal(true);
  }

  return (
    <ViewScreen>
      <IMGContainer>
        <CardView>
          <View style={{ flexDirection: "row" }}>
            {data2.pokeTypes.map((item) => (
              <TypeCard key={item.name} name={item.name} />
            ))}
          </View>

          <InfoText style={{ fontSize: 20 }}>
            {data.generation.toUpperCase()}
          </InfoText>
        </CardView>

        <Image
          style={{ width: 190, height: 190 }}
          source={{ uri: data2.front_img }}
        />
      </IMGContainer>

      <ItemBox>
        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 5, borderRadius: 10 }}
          onPress={() => CallModal("EggGroup")}
        >
          <InfoTile>Egg Group</InfoTile>
          <View style={{ flexDirection: "row", padding: 7 }}>
            {data.egg_group.map((group) => (
              <InfoText key={group.name}>{group.name.toUpperCase()}; </InfoText>
            ))}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 5, borderRadius: 10 }}
          onPress={() => CallModal("Status")}
        >
          <InfoTile>Status</InfoTile>
        </TouchableOpacity>
      </ItemBox>

      <ItemBox>
        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 5, borderRadius: 10 }}
          onPress={() => CallModal("Evolution")}
        >
          <InfoTile>Evoluções</InfoTile>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "blue", padding: 5, borderRadius: 10 }}
          onPress={() => CallModal("Abilities")}
        >
          <InfoTile>Habilidades</InfoTile>
        </TouchableOpacity>
      </ItemBox>

      <PokeDetailsModal
        component={componentModal}
        setShowModal={setShowModal}
        showModal={showModal}
        data2={data2}
        data={data}
      />
    </ViewScreen>
  );
}
