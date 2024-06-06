import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.onboardingChild}
        contentFit="cover"
        source={require("../../assets/rectangle-2.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcome}>Bem-vindo ao LocalizaPet</Text>
          </View>
          <View style={styles.ajudandoAUnirPetsComSeusWrapper}>
            <Text style={[styles.ajudandoAUnir, styles.registrarPetLayout]}>
              Ajudando a unir pets com seus tutores
            </Text>
          </View>
        </View>
        <View style={styles.groupWrapper}>
          <View style={styles.frameContainer}>
            <View style={[styles.registrarPetWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.registrarPet, styles.procurarTypo]}>
                Registrar pet
              </Text>
            </View>
            <View style={[styles.procurarWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.procurar, styles.procurarTypo]}>
                Procurar
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.unsplashisg37ai2aSParent,
          styles.unsplashisg37ai2aLayout,
        ]}
      >
        <Image
          style={[
            styles.unsplashisg37ai2aSIcon,
            styles.unsplashisg37ai2aIconLayout,
          ]}
          contentFit="contain"
          source={require("../../assets/unsplashisg37ai2as.png")}
        />
        <Image
          style={[
            styles.unsplashisg37ai2aSIcon1,
            styles.unsplashisg37ai2aIconLayout,
          ]}
          contentFit="contain"
          source={require("../../assets/unsplashisg37ai2as1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registrarPetLayout: {
    lineHeight: 21,
    color: Color.bgCOLOUR,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: "47.42%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  procurarTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.loraBold,
    fontWeight: "700",
  },
  unsplashisg37ai2aLayout: {
    height: height * 0.4,
    left: 18,
  },
  unsplashisg37ai2aIconLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  onboardingChild: {
    width: width,
    height: height * 0.6,
    left: 0,
    top: 0,
    position: "absolute",
  },
  welcome: {
    fontSize: 32,
    lineHeight: 38,
    textAlign: "center",
    color: Color.bgCOLOUR,
    fontFamily: FontFamily.loraBold,
    fontWeight: "700",
    flex: 1,
  },
  welcomeWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  ajudandoAUnir: {
    fontSize: FontSize.titleRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.titleMedium1,
    textAlign: "left",
  },
  ajudandoAUnirPetsComSeusWrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameGroup: {
    width: width * 0.9,
    alignItems: "center",
  },
  registrarPet: {
    lineHeight: 21,
    color: Color.bgCOLOUR,
  },
  registrarPetWrapper: {
    right: "52.58%",
    borderStyle: "solid",
    borderColor: Color.bgCOLOUR,
    borderWidth: 1,
    left: "0%",
  },
  procurar: {
    color: Color.neutral8,
  },
  procurarWrapper: {
    left: "52.58%",
    backgroundColor: Color.bgCOLOUR,
    right: "0%",
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: "47.42%",
  },
  frameContainer: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: 56,
    marginTop: 24,
    width: width * 0.9,
  },
  frameParent: {
    top: height * 0.65,
    left: 21,
    alignItems: "center",
    position: "absolute",
  },
  unsplashisg37ai2aSIcon: {
    top: 23,
    width: width * 0.9,
    height: height * 0.4,
    left: 0,
  },
  unsplashisg37ai2aSIcon1: {
    width: width * 0.9,
    height: height * 0.4,
    left: 18,
    top: 0,
  },
  unsplashisg37ai2aSParent: {
    top: 38,
    width: width * 0.9,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: Color.neutral8,
    height: height,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Onboarding;