import styled from "styled-components/native";

export const EvolutionContainer = styled.View<{
  $name: string;
  $pokeName: string;
}>`
  justify-content: center;
  background-color: ${(props) =>
    props.$name == props.$pokeName
      ? props.theme.colors.background_title_color
      : ""};
  border-radius: 40px;
`;
