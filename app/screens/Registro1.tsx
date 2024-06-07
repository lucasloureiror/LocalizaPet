import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Registro1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registro1}>
      <View
        style={[styles.paraComearRegistreOTipoWrapper, styles.parentPosition]}
      >
        <Text style={[styles.paraComearRegistre, styles.primaryButton1Typo]}>
          Para começar, registre o tipo de pet, se ele está desaparecido ou foi
          encontrado e adicione uma foto dele.
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("Registro2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/frame.png")}
          />
        </Pressable>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>1/3</Text>
        </View>
        <Pressable
          style={styles.framePressable}
          onPress={() => navigation.navigate("Desaparecidos")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/frame-60134.png")}
          />
        </Pressable>
      </View>
      <View style={styles.primaryButton}>
        <Text style={[styles.primaryButton1, styles.primaryButton1Typo]}>
          Continuar
        </Text>
        <Image
          style={[styles.heroiconsSolidarrowLongRig, styles.heroiconsLayout]}
          contentFit="cover"
          source={require("../../assets/heroiconssolidarrowlongright.png")}
        />
      </View>
      <View style={[styles.inputField9Parent, styles.parentPosition]}>
        <View style={styles.inputField9}>
          <Text style={[styles.espcieDePet, styles.textTypo]}>
            Espécie de pet
          </Text>
          <View
            style={[styles.inputField9Inner, styles.inputField9InnerBorder]}
          >
            <View style={styles.frameGroup}>
              <View style={styles.selectTypeOfPetWrapper}>
                <Text style={[styles.selectTypeOf, styles.textTypo]}>
                  Espécie
                </Text>
              </View>
              <Image
                style={[styles.heroiconsSolidplay, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputField12}>
          <Text style={[styles.espcieDePet, styles.textTypo]}>
            Tipo de registro
          </Text>
          <View
            style={[styles.inputField9Inner, styles.inputField9InnerBorder]}
          >
            <View style={styles.frameGroup}>
              <View style={styles.selectTypeOfPetWrapper}>
                <Text style={[styles.selectTypeOf, styles.textTypo]}>
                  Desaparecido ou encontrado
                </Text>
              </View>
              <Image
                style={[styles.heroiconsSolidplay, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputField12}>
          <View style={styles.inputField11Inner}>
            <View style={styles.frameView}>
              <View style={styles.selectTypeOfPetWrapper}>
                <Text style={[styles.selectTypeOf, styles.textTypo]}>
                  Data de encontro ou desaparecimento
                </Text>
              </View>
              <Image
                style={[
                  styles.heroiconsSolidcalendarDays,
                  styles.heroiconsLayout,
                ]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidcalendardays.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.inputField91}>
        <Text style={[styles.espcieDePet, styles.textTypo]}>Imagem do pet</Text>
        <View
          style={[
            styles.heroiconsSoliduserCircleWrapper,
            styles.inputField9InnerBorder,
          ]}
        >
          <Image
            style={styles.heroiconsSoliduserCircle}
            contentFit="cover"
            source={require("../../assets/heroiconssolidusercircle.png")}
          />
        </View>
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
    left: 20,
    position: "absolute",
  },
  primaryButton1Typo: {
    textAlign: "left",
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
    height: 16,
    width: 16,
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
    width: 390,
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
    width: 390,
    justifyContent: "space-between",
    flexDirection: "row",
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
    top: 854,
    backgroundColor: Color.neutral8,
    height: 52,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    width: 390,
    left: 20,
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
  },
  selectTypeOfPetWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  heroiconsSolidplay: {
    top: 4,
    left: 226,
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
    width: 390,
  },
  inputField12: {
    marginTop: 16,
    width: 390,
  },
  heroiconsSolidcalendarDays: {
    top: 3,
    left: 309,
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
    top: 438,
    left: 130,
    width: 166,
    height: 128,
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
