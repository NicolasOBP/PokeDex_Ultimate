import styled from "styled-components/native";

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.title_color};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

export const TitleCard = styled.Text`
  color: ${(props) => props.theme.colors.title_color};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.background_title_color};
  height: 120px;
  justify-content: flex-end;
`;

export const ViewScreen = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 10px;
  align-items: center;
`;
