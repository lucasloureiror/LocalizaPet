import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Registro3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const router = useRouter();

  const clickVoltarHandler = () => {
    navigation.goBack();
  }

  const clickInicioHandler = () => {
    router.replace("(tabs)/")
  }

  const clickFinalizarHandler = () => {
    router.replace("(tabs)/")
  }

  return (
    <View style={styles.registro3}>

      <View style={[styles.registro3Inner, styles.primaryButtonPosition]}>
        <View style={[styles.frameParent, styles.phoneBarPosition]}>
          <Pressable style={styles.frame} onPress={clickVoltarHandler}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>3/3</Text>
          </View>

          <Pressable style={styles.framePressable} onPress={clickInicioHandler}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/frame-60134.png")}
            />
          </Pressable>

        </View>
      </View>
      
      <View style={[styles.agoraDeixeSeuContatoParaAWrapper, styles.primaryButtonPosition]}>
        <Text style={[styles.agoraDeixeSeu, styles.agoraDeixeSeuTypo]}>
          Agora deixe seu contato para auxiliar o encontro do pet ou do dono
        </Text>
      </View>

      <View style={[styles.inputField7Parent, styles.primaryButtonPosition]}>
        <View style={styles.inputField7}>
          <Text style={[styles.phoneNumber, styles.textTypo]}>E-mail</Text>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>
              Endereço de e-mail
            </Text>
          </View>
        </View>
        <View style={styles.inputField8}>
          <Text style={[styles.phoneNumber, styles.textTypo]}>
            Telefone ou WhatsApp
          </Text>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>(55)9xxxx-xxxx</Text>
          </View>
        </View>
      </View>

      <View style={[styles.primaryButton, styles.frameViewFlexBox]}>
        <Pressable onPress={clickFinalizarHandler}>
          <Text style={[styles.primaryButton1, styles.agoraDeixeSeuTypo]}>
            Finalizar
          </Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  phoneBarPosition: {
    justifyContent: "space-between",
    left: 0,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  primaryButtonPosition: {
    left: (width * 0.1)/2,
    position: "absolute",
  },
  agoraDeixeSeuTypo: {
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
  frameViewFlexBox: {
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
    backgroundColor: Color.bgCOLOUR,
  },
  agoraDeixeSeu: {
    fontFamily: FontFamily.loraRegular,
    color: Color.neutral10,
    flex: 1,
    textAlign: "center",
  },
  agoraDeixeSeuContatoParaAWrapper: {
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
    color: Color.neutral10,
  },
  wrapper: {
    width: 49,
    flexDirection: "row",
  },
  framePressable: {
    height: 22,
    width: 24,
  },
  frameParent: {
    width: width * 0.9,
    justifyContent: "space-between",
    left: 0,
    top: 0,
  },
  registro3Inner: {
    top: 60,
    height: 28,
    width: width * 0.9,
  },
  primaryButton1: {
    fontWeight: "700",
    fontFamily: FontFamily.loraBold,
    color: Color.neutralVariant100,
  },
  heroiconsSolidarrowLongRig: {
    height: 16,
    display: "none",
    marginLeft: 8,
    width: 16,
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
    position: "absolute"
  },
  phoneNumber: {
    lineHeight: 18,
    color: Color.neutral10,
    fontSize: FontSize.labelBold_size,
  },
  text1: {
    color: Color.neutral3,
    lineHeight: 21,
    fontSize: FontSize.titleRegular_size,
    fontWeight: "500",
  },
  frameView: {
    alignSelf: "stretch",
    backgroundColor: Color.neutralVariant100,
    borderStyle: "solid",
    borderColor: Color.neutral3,
    borderWidth: 1,
    height: 48,
    padding: Padding.p_xs,
    marginTop: 4,
  },
  inputField7: {
    width: 390,
  },
  inputField8: {
    marginTop: 16,
    width: 390,
  },
  inputField7Parent: {
    top: 184,
  },
  registro3: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bgCOLOUR,
    flex: 1,
  },
});

export default Registro3;
