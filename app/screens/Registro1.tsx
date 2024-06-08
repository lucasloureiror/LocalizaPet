import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions, Platform } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Registro1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const clickVoltarHandler = () => {
    navigation.goBack();
  }

  const clickInicioHandler = () => {
    navigation.navigate("Onboarding");
  }

  const clickContinuarHandler = () => {
    navigation.navigate("Registro2");
  }

  const clickEspeciePetHandler = () => {
    
  }

  const clickTipoRegistroHandler = () => {

  }

  const clickDataRegistroHandler = () => {

  }

  const clickImagemPetHandler = () => {
    
  }

  return (
    <View style={styles.registro1}>
      <View style={[styles.paraComearRegistreOTipoWrapper, styles.parentPosition]}>
        <Text style={[styles.paraComearRegistre, styles.primaryButton1Typo]}>
          Para começar, registre o tipo de pet, se ele está desaparecido ou foi
          encontrado e adicione uma foto dele.
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Pressable style={styles.frame} onPress={clickVoltarHandler}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/frame.png")}
          />
        </Pressable>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>1/3</Text>
        </View>
        <Pressable style={styles.framePressable} onPress={clickInicioHandler}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/frame-60134.png")}
          />
        </Pressable>
      </View>
      <Pressable style={styles.primaryButton} onPress={clickContinuarHandler}>
        <Text style={[styles.primaryButton1, styles.primaryButton1Typo]}>
          Continuar
        </Text>
      </Pressable>
      <View style={[styles.inputField9Parent, styles.parentPosition]}>
        <View style={styles.inputField9}>
          <Text style={[styles.espcieDePet, styles.textTypo]}>
            Espécie de pet
          </Text>
          <Pressable style={[styles.inputField9Inner, styles.inputField9InnerBorder]} onPress={clickEspeciePetHandler}>
            <Text style={[styles.selectTypeOf, styles.primaryButton1Typo]}>
              Espécie
            </Text>
            <Image
                style={[styles.heroiconsSolidplay, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
          </Pressable>
        </View>
        <View style={styles.inputField12}>
          <Text style={[styles.espcieDePet, styles.textTypo]}>
            Tipo de registro
          </Text>
          <Pressable style={[styles.inputField9Inner, styles.inputField9InnerBorder]} onPress={clickTipoRegistroHandler}>
            <Text style={[styles.selectTypeOf, styles.primaryButton1Typo]}>
              Desaparecido/Encontrado
            </Text>
            <Image
                style={[styles.heroiconsSolidplay, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
          </Pressable>
        </View>
        <View style={styles.inputField12}>
          <Text style={[styles.espcieDePet, styles.textTypo]}>
            Data do registro
          </Text>

          <Pressable style={[styles.inputField9Inner, styles.inputField9InnerBorder]} onPress={clickDataRegistroHandler}>
            <Text style={[styles.selectTypeOf, styles.primaryButton1Typo]}>
              Data de encontro/desaparecimento
            </Text>
              <Image
                style={[styles.heroiconsSolidcalendarDays, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidcalendardays.png")}
              />
          </Pressable>
        </View>
      </View>
      <View style={[styles.inputField91]}>
        <Text style={[styles.espcieDePet, styles.textTypo]}>
          Imagem do pet
        </Text>
        <Pressable style={[styles.heroiconsSoliduserCircleWrapper, styles.inputField9InnerBorder]} onPress={clickImagemPetHandler}>
          <Image
            style={styles.heroiconsSoliduserCircle}
            contentFit="cover"
            source={require("../../assets/heroiconssolidusercircle.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parentPosition: {
    left: (width * 0.1)/2,
    position: "absolute",
  },
  primaryButton1Typo: {
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.titleRegular_size,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "left",
  },
  heroiconsLayout: {
    height: 18,
    width: 18,
  },
  inputField9InnerBorder: {
    marginTop: 4,
    padding: Padding.p_xs,
    borderWidth: 0.3,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  time1: {
    letterSpacing: 0.1,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.labelBold,
    color: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.labelBold_size,
  },
  time: {
    flexDirection: "row",
  },
  batteryIcon: {
    marginTop: -5.75,
    top: "50%",
    right: 0,
    width: 25,
    height: 12,
    position: "absolute",
  },
  combinedShapeIcon: {
    height: 11,
    width: 16,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    width: 67,
    height: 12,
  },
  phoneBar: {
    width: 430,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "space-between",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.bgCOLOUR,
  },
  paraComearRegistre: {
    fontFamily: FontFamily.loraRegular,
    color: Color.neutral10,
    flex: 1,
    textAlign: "left",
  },
  paraComearRegistreOTipoWrapper: {
    top: 102,
    width: width * 0.9,
    flexDirection: "row",
  },
  icon: {
    overflow: "hidden",
  },
  frame: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    width: 55,
    color: Color.neutral10,
  },
  wrapper: {
    width: 37,
    flexDirection: "row",
  },
  framePressable: {
    height: 22,
    width: 24,
  },
  frameParent: {
    top: 60,
    width: width * 0.9,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  primaryButton1: {
    fontWeight: "700",
    fontFamily: FontFamily.loraBold,
    color: Color.neutralVariant100,
  },
  heroiconsSolidarrowLongRig: {
    display: "none",
    marginLeft: 8,
  },
  primaryButton: {
    top: height * 0.85,
    backgroundColor: Color.neutral8,
    height: 60,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: width * 0.9,
    left: (width * 0.1)/2,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  espcieDePet: {
    lineHeight: 18,
    color: Color.neutral10,
    fontSize: FontSize.labelBold_size,
  },
  selectTypeOf: {
    color: Color.neutral3,
    lineHeight: 21,
    fontSize: FontSize.titleRegular_size,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    width: width * 0.9
  },
  selectTypeOfPetWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  heroiconsSolidplay: {
    top: 15,
    right: width * 0.03,
    position: "absolute",
  },
  frameGroup: {
    width: 242,
    height: 24,
  },
  inputField9Inner: {
    justifyContent: "flex-end",
    height: 48,
    marginTop: 4,
  },
  inputField9: {
    width: width * 0.9,
  },
  inputField12: {
    marginTop: 16,
    width: width * 0.9,
  },
  heroiconsSolidcalendarDays: {
    top: 15,
    right: width * 0.03,
    position: "absolute",
    overflow: "hidden",
  },
  frameView: {
    width: 325,
    height: 21,
  },
  inputField11Inner: {
    padding: Padding.p_xs,
    borderWidth: 0.3,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    height: 48,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  inputField9Parent: {
    top: 190,
    height: 440,
  },
  heroiconsSoliduserCircle: {
    width: 84,
    height: 84,
    overflow: "hidden",
  },
  heroiconsSoliduserCircleWrapper: {
    height: 106,
    justifyContent: "center",
  },
  inputField91: {
    top: 456,
    width: width * 0.43,
    left: (width * 0.57)/2,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  registro1: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bgCOLOUR,
    flex: 1,
  },
});

export default Registro1;
