import React from "react";
import { ViewScreen } from "../../style/style";
import PokeCard from "../../components/PokeCard";
import { TouchableOpacity } from "react-native";
import CallAllPokes from "../../hooks/allPokes";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { allPokeType } from "../../types/allPokesType";
import { FlatList } from "react-native-gesture-handler";
import SearchBar from "../../components/SearchBar";
import Toast from "../../components/Toast";
import { useStorage } from "../../context/storage";
import { useToastDispatch } from "../../context/Toast/useToastDispatch";

export default function Home() {
  const data = CallAllPokes();
  const theme = useTheme();

  let listViewRef: FlatList<allPokeType>;

  function backTop() {
    listViewRef.scrollToOffset({ offset: 0, animated: true });
  }

  return (
    <ViewScreen>
      <SearchBar />

      <FlatList
        ref={(ref) => {
          listViewRef = ref;
        }}
        style={{
          width: "90%",
        }}
        data={data}
        renderItem={(data) => (
          <PokeCard name={data.item.name} url={data.item.url} />
        )}
      />

      <TouchableOpacity
        style={{ position: "absolute", top: "93%" }}
        onPress={backTop}
      >
        <AntDesign
          name="upcircle"
          size={50}
          color={theme.colors.card_text_color}
        />
      </TouchableOpacity>
    </ViewScreen>
  );
}
