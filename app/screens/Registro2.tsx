import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

const Registro2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const router = useRouter();

  const clickVoltarHandler = () => {
    navigation.goBack();
  }

  const clickInicioHandler = () => {
    router.replace("(tabs)/")
  }

  const clickContinuarHandler = () => {
    navigation.navigate("screens/Registro3");
  }

  return (
    <View style={styles.backgroud}>

      {/* Cabeçalho da página */}
      <View style={[styles.headerWrapper, styles.centralPosition]}>
        {/* Botão de voltar */}
        <Pressable style={styles.iconFrame} onPress={clickVoltarHandler}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/frame.png")}
          />
        </Pressable>

        {/* Texto central */}
        <View style={styles.headerTextWrapper}>
          <Text style={[styles.headerTextSize, styles.headerTextFont]}>2/3</Text>
        </View>

        {/* Botão de início */}
        <Pressable style={styles.iconFrame} onPress={clickInicioHandler}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/frame-60134.png")}
          />
        </Pressable>
      </View>

      {/* Descrição do registro que será feito */}
      <View style={[styles.descriptionWrapper, styles.centralPosition]}>
        <Text style={[styles.descriptionTextSize, styles.descriptionTextFont]}>
          Agora preencha a identificação do Pet, cidade que foi encontrado/desapareceu e forneça mais detalhes que possam ajudar.
        </Text>
      </View>
  
      <View style={styles.inputField7Parent}>
        <View style={[styles.inputField7, styles.inputLayout]}>
          <Text style={[styles.phoneNumber, styles.text2Typo]}>
            Nome ou identificação - se existir
          </Text>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text, styles.descriptionTextSize]}>Name......</Text>
          </View>
        </View>
        <View style={[styles.inputField7, styles.inputLayout]}>
          <Text style={[styles.phoneNumber, styles.text2Typo]}>
            Nome ou identificação - se existir
          </Text>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text, styles.descriptionTextSize]}>Nome</Text>
          </View>
        </View>
        <Text style={[styles.nomeOuIdentificao, styles.text2Typo]}>
          Nome ou identificação - se existir
        </Text>
        <View style={[styles.inputField8, styles.inputLayout]}>
          <Text style={[styles.phoneNumber, styles.text2Typo]}>
            Forneça mais detalhes sobre o pet ou o local que foi encontrado
          </Text>
          <View style={[styles.detalhesWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text, styles.descriptionTextSize]}>Detalhes</Text>
          </View>
        </View>
        <View style={[styles.inputField12, styles.inputLayout]}>
          <Text style={[styles.phoneNumber, styles.text2Typo]}>Cidade</Text>
          <View style={[styles.inputField12Inner, styles.wrapperFlexBox]}>
            <View style={styles.frameParent}>
              <View
                style={[
                  styles.selectTypeOfPetWrapper,
                  styles.primaryButtonFlexBox,
                ]}
              >
              <Text style={[styles.text, styles.descriptionTextSize]}>Cidade</Text>
              </View>
              <Image
                style={[styles.heroiconsSolidplay, styles.heroiconsLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <Pressable style={[styles.primaryButton, styles.primaryButtonFlexBox]} onPress={clickContinuarHandler}>
        <Text style={[styles.primaryButton1, styles.descriptionTextSize]}>
          Continuar
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bgCOLOUR,
    flex: 1
  },

  centralPosition: {
    width: width * 0.9,
    left: (width * 0.1)/2,
    position: "absolute"
  },

  iconFrame: {
    height: 24,
    width: 24
  },

  iconLayout: {
    height: "100%",
    width: "100%"
  },

  headerWrapper: {
    top: 60,
    justifyContent: "space-between",
    flexDirection: "row"
  },

  headerTextWrapper: {
    width: 49,
    flexDirection: "row"
  },

  headerTextSize: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    width: 55
  },

  headerTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral10
  },

  descriptionWrapper: {
    top: 102,
    flexDirection: "row"
  },

  descriptionTextSize: {
    fontSize: FontSize.titleRegular_size,
    lineHeight: 21
  },

  descriptionTextFont: {
    fontFamily: FontFamily.loraRegular,
    textAlign: "center",
    color: Color.neutral10,
    flex: 1
  },


  phoneBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputLayout: {
    width: width * 0.9,
    position: "absolute",
  },
  text2Typo: {
    textAlign: "left",
    color: Color.neutral10,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  wrapperFlexBox: {
    marginTop: 4,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  primaryButtonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  heroiconsLayout: {
    height: 16,
    width: 16,
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
  phoneNumber: {
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.labelBold_size,
  },
  text: {
    color: Color.neutral3,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.titleRegular_size,
  },
  wrapper: {
    borderColor: Color.neutral3,
    borderWidth: 1,
    padding: Padding.p_xs,
    height: 48,
    marginTop: 4,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputField7: {
    left: 0,
    top: 0,
  },
  nomeOuIdentificao: {
    top: "0%",
    left: "0%",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.labelBold_size,
    position: "absolute",
  },
  detalhesWrapper: {
    borderColor: "#d6d6d6",
    borderWidth: 0.5,
    height: 150,
    padding: Padding.p_3xs,
    marginTop: 4,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    alignSelf: "stretch",
  },
  inputField8: {
    top: 184,
    left: 4,
  },
  selectTypeOfPetWrapper: {
    left: 0,
    top: 0,
  },
  heroiconsSolidplay: {
    top: 4,
    left: 226,
    position: "absolute",
  },
  frameParent: {
    width: 242,
    height: 24,
  },
  inputField12Inner: {
    borderColor: Color.colorDarkgray_100,
    borderWidth: 0.3,
    justifyContent: "flex-end",
    padding: Padding.p_xs,
    height: 48,
    marginTop: 4,
    borderStyle: "solid",
    backgroundColor: Color.neutralVariant100,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputField12: {
    top: 88,
    left: 0,
  },
  inputField7Parent: {
    top: 214,
    width: 394,
    height: 356,
    left: 20,
    position: "absolute",
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
    position: "absolute"
  },

});

export default Registro2;
