const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import Registro1 from "./screens/Registro1";
import Registro2 from "./screens/Registro2";
import Registro3 from "./screens/Registro3";
import Perfil from "./screens/Perfil";
import Desaparecidos from "./screens/Desaparecidos";
import Encontrados from "./screens/Encontrados";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lora-Regular": require("../assets/fonts/Lora-Regular.ttf"),
    "Lora-Medium": require("../assets/fonts/Lora-Medium.ttf"),
    "Lora-Bold": require("../assets/fonts/Lora-Bold.ttf"),
    "Lora-BoldItalic": require("../assets/fonts/Lora-BoldItalic.ttf"),
    "Mulish-Regular": require("../assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Medium": require("../assets/fonts/Mulish-Medium.ttf"),
    "Mulish-SemiBold": require("../assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-Bold": require("../assets/fonts/Mulish-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registro1"
              component={Registro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registro2"
              component={Registro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registro3"
              component={Registro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Desaparecidos"
              component={Desaparecidos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Encontrados"
              component={Encontrados}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
    </>
  );
};
export default App;
