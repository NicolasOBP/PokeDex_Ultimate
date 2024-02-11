import styled from "styled-components/native";

export const CardView = styled.View`
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
`;

export const ItemBox = styled.View`
  flex-direction: row;
  padding: 15px;
  width: 100%;
  justify-content: space-around;
  top: 10px;
  align-items: center;
`;

export const InfoTile = styled.Text`
  color: ${(props) => props.theme.colors.card_text_color};
  font-size: 27px;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.colors.card_text_color};
  font-size: 18px;
  font-weight: bold;
`;
