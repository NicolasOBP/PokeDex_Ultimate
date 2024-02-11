import { Text } from "react-native";
import React from "react";
import { TypeContainer } from "./style";
import { useTheme } from "styled-components";

type Props = {
  name: string;
};

export default function TypeCard({ name }: Props) {
  const theme = useTheme();

  return (
    <TypeContainer style={{ backgroundColor: theme.typeColors[name] }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        {name.toUpperCase()}
      </Text>
    </TypeContainer>
  );
}
