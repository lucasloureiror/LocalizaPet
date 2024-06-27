import { useFonts } from "expo-font";
import { Stack } from 'expo-router';

export default function StackLayout() {
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

  return(
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="screens/Onboarding"/>
        <Stack.Screen name="screens/Registro1"/>
        <Stack.Screen name="screens/Registro2"/>
        <Stack.Screen name="screens/Registro3"/>
    </Stack>
  );

}
