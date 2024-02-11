import React, { useState } from "react";
import { STTextInput, SearchContainer } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { useStorage } from "../../context/storage";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export default function SearchBar() {
  const { setName, name } = useStorage();
  const [namePoke, setNamePoke] = useState("");
  const theme = useTheme();

  return (
    <SearchContainer>
      <STTextInput
        placeholderTextColor={theme.colors.secondary_background}
        onChangeText={setNamePoke}
        placeholder="Barra de Pesquisa"
      >
        {namePoke}
      </STTextInput>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 50,
        }}
      >
        <FontAwesome
          onPress={() => setName(namePoke)}
          name="search"
          size={24}
          color={theme.colors.secondary_background}
        />

        {name && (
          <FontAwesome
            onPress={() => {
              setName("");
              setNamePoke("");
            }}
            name="close"
            size={24}
            color="red"
          />
        )}
      </View>
    </SearchContainer>
  );
}
