import * as React from "react";
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const router = useRouter();

  const clickRegistrarPetHandler = () => {
    navigation.navigate("screens/Registro1")
  }

  const clickProcurarHandler = () => {
    router.replace("(tabs)")
  }

  return (
    <View style={styles.background}>
      {/* Imagem da capa de fundo */}
      <Image
        style={styles.coverBackgroundImageLayout}
        contentFit="cover"
        source={require("../../assets/rectangle-2.png")}
      />

      {/* Imagens da capa */}
      <View style={styles.coverImageWrapper}>
        <Image
          style={[styles.coverBackImageLayout, styles.coverImageBorderLayout]}
          contentFit="contain"
          source={require("../../assets/unsplashisg37ai2as.png")}
        />
        <Image
          style={[styles.coverFrontImageLayout, styles.coverImageBorderLayout]}
          contentFit="contain"
          source={require("../../assets/unsplashisg37ai2as1.png")}
        />
      </View>

      {/* Conteúdo da página */}
      <View style={[styles.contentWrapper, styles.centralPosition]}>
        {/* Mensagem de boas vindas */}
        <View>
          <View style={styles.titleTextWrapper}>
            <Text style={[styles.titleTextSize, styles.titleTextFont]}>Bem-vindo ao LocalizaPet</Text>
          </View>
          <View>
            <Text style={[styles.regularTextSize, styles.descriptionTextFont]}>
              Ajudando a unir pets com seus tutores
            </Text>
          </View>
        </View>
        {/* Botões */}
        <View style={styles.buttonSectionWrapper}>
          {/* Botão 'Registrar pet' */}
          <Pressable style={[styles.buttonLayout, styles.leftButtonLayout]} onPress={clickRegistrarPetHandler}>
            <Text style={[styles.buttonTextLayout, styles.leftButtonTextColor]}>
              Registrar pet
            </Text>
          </Pressable>
          {/* Botão 'Procurar' */}
          <View style={[styles.rightButtonLayout, styles.buttonLayout]}>
            <Pressable onPress={clickProcurarHandler}>
              <Text style={[styles.buttonTextLayout, styles.rightButtonTextColor]}>
                Procurar
              </Text>
            </Pressable>
          </View>

        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.neutral8,
    height: height,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },

  centralPosition: {
    width: width * 0.9,
    left: (width * 0.1)/2
  },

  coverBackgroundImageLayout: {
    width: width,
    height: height * 0.6,
    left: 0,
    top: 0,
    position: "absolute",
  },

  coverImageWrapper: {
    top: 38,
    width: width * 0.9,
    position: "absolute",
    height: height * 0.4,
    left: 18,
  },

  coverImageBorderLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },

  coverBackImageLayout: {
    top: 23,
    width: width * 0.9,
    height: height * 0.4,
    left: 0,
  },

  coverFrontImageLayout: {
    width: width * 0.9,
    height: height * 0.4,
    left: 18,
    top: 0,
  },

  contentWrapper: {
    top: height * 0.65,
    alignItems: "center",
    position: "absolute",
  },

  titleTextWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    marginBottom: 10
  },

  titleTextSize: {
    fontSize: 32,
    lineHeight: 38
  },

  titleTextFont: {
    textAlign: "center",
    color: Color.bgCOLOUR,
    fontFamily: FontFamily.loraBold,
    fontWeight: "700",
    flex: 1,
  },

  regularTextSize: {
    fontSize: FontSize.titleRegular_size,
    lineHeight: 21,
  },

  descriptionTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "center",
    color: Color.bgCOLOUR,
  },

  buttonSectionWrapper: {
    height: 56,
    marginTop: 24,
    width: width * 0.9,
  },

  buttonLayout: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: "47.42%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },

  leftButtonLayout: {
    right: "52.58%",
    borderStyle: "solid",
    borderColor: Color.bgCOLOUR,
    borderWidth: 1,
    left: "0%",
  },

  rightButtonLayout: {
    left: "52.58%",
    backgroundColor: Color.bgCOLOUR,
    right: "0%",
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: "47.42%",
  },

  buttonTextLayout: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    textAlign: "center",
    fontFamily: FontFamily.loraBold,
    fontWeight: "700",
  },

  leftButtonTextColor: {
    color: Color.bgCOLOUR,
  },

  rightButtonTextColor: {
    color: Color.neutral8,
  }
});

export default Onboarding;