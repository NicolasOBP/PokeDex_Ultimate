import styled from "styled-components/native";

export const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.search_bar_color};
  width: 70%;
  padding: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-between;
`;
export const STTextInput = styled.TextInput`
  text-decoration: underline;
  left: 5px;
  color: ${(props) => props.theme.colors.secondary_background};
  width: 80%;
`;
