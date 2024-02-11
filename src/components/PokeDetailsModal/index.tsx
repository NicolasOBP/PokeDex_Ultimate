import { View, Modal } from "react-native";
import React from "react";
import { ModalContainer } from "./style";
import { AntDesign } from "@expo/vector-icons";
import EggGroup from "./components/EggGroup";
import Stats, { StatsType } from "./components/Status";
import Evolution from "./components/Evolution";
import { extraDataPoke, pokeType } from "../../types/pokeType";
import Abilities from "./components/Abilities";

export type Components = "EggGroup" | "Evolution" | "Status" | "Abilities";

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  component: Components;
  data2: pokeType;
  data: extraDataPoke;
};

export default function PokeDetailsModal({
  setShowModal,
  showModal,
  component,
  data2,
  data,
}: Props) {
  return (
    <Modal visible={showModal} animationType="fade" transparent={true}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ModalContainer>
          <AntDesign
            style={{ bottom: 10 }}
            onPress={() => setShowModal(false)}
            name="closecircle"
            size={44}
            color="red"
          />
          {component == "EggGroup" && <EggGroup />}
          {component == "Status" && <Stats stats={data2.stats} />}
          {component == "Evolution" && (
            <Evolution
              evolution_url={data.evolution_chain}
              pokeName={data.name}
            />
          )}
          {component == "Abilities" && (
            <Abilities abilities={data2.abilities} />
          )}
        </ModalContainer>
      </View>
    </Modal>
  );
}
