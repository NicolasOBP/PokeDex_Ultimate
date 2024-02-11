import styled from "styled-components/native";

export const ModalContainer = styled.View`
  background-color: ${(props) => props.theme.colors.pokemon_card};
  width: 80%;
  height: 80%;
  border-radius: 20px;
  padding: 15px;
  flex-direction: column-reverse;
`;
