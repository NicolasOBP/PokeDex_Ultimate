import styled from "styled-components/native";

export const ModalContainer = styled.View`
  background-color: ${(props) => props.theme.colors.pokemon_card};
  width: 82%;
  height: 80%;
  border-radius: 20px;
  padding: 13px;
  flex-direction: column-reverse;
`;
