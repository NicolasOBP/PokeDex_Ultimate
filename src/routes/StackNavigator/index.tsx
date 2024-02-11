import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../../screens/Home";
import { Header, Title } from "../../style/style";
import { RootStackParamListStack } from "./types/stack";
import MainPokemonScreen from "../../screens/MainPokemonScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator<RootStackParamListStack>();

export type PropsNavStack = StackScreenProps<RootStackParamListStack>;
export type NavStack = NavigationProp<RootStackParamListStack>;

export default function StackNavigator() {
  const navigation = useNavigation<NavStack>();
  function goBack() {
    navigation.goBack();
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => (
            <Header>
              <Title>PokeDex</Title>
            </Header>
          ),
        }}
      />

      <Stack.Screen
        name="MainPokemonScreen"
        component={MainPokemonScreen}
        options={{
          header: ({ route }) => (
            <Header>
              <Title style={{ top: 45 }}>
                {route.params.item.name.toUpperCase()}
              </Title>
              <AntDesign onPress={goBack} name="back" size={40} color="white" />
            </Header>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
