import { useNavigation } from "@react-navigation/native";
import { NavStack } from "../../../routes/StackNavigator";
import { extraDataPoke, pokeType } from "../../../types/pokeType";

export default function useNavigate() {
  const navigation = useNavigation<NavStack>();

  function navigateTo(item: extraDataPoke, item2: pokeType) {
    navigation.navigate("MainPokemonScreen", { item: item, item2: item2 });
  }
  return navigateTo;
}
