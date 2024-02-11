import styled from "styled-components/native";

export const Card = styled.View`
  background-color: ${(props) => props.theme.colors.pokemon_card};
  height: 165px;
  width: 100%;
  border: ${(props) => props.theme.border_card_Width} solid
    ${(props) => props.theme.colors.card_border_color};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IMGContainer = styled.View`
  background-color: ${(props) => props.theme.colors.pokemon_image_background};
  border-radius: 30px;
  flex-direction: row;
`;

export const ListTypeContainer = styled.View`
  flex-direction: row;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.colors.card_text_color};
  font-size: 16px;
  font-weight: bold;
`;
