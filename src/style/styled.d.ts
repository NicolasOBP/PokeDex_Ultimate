import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    border_card_Width: string;

    colors: {
      background: string;
      secondary_background: string;
      background_title_color: string;
      title_color: string;
      pokemon_card: string;
      card_title_color: string;
      card_text_color: string;
      secondary_title_color: string;
      card_border_color: string;
      pokemon_image_background: string;
      search_bar_color: string;
    };
    typeColors: {
      normal: string;
      fire: string;
      water: string;
      electric: string;
      grass: string;
      ice: string;
      fighting: string;
      poison: string;
      ground: string;
      flying: string;
      psychic: string;
      bug: string;
      rock: string;
      ghost: string;
      dragon: string;
      dark: string;
      steel: string;
      fairy: string;
      stellar: string;
    };
  }
}
