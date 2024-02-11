import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "./src/style/theme";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/routes/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "./src/components/Toast";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <NavigationContainer>
          <StatusBar />
          <StackNavigator />
        </NavigationContainer>
        <Toast />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
