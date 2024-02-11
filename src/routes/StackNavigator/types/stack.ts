import { extraDataPoke, pokeType } from "../../../types/pokeType";

export type RootStackParamListStack = {
  Home: undefined;
  MainPokemonScreen: { item: extraDataPoke; item2: pokeType };
};
