import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions, Platform } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

const Registro1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const router = useRouter();

  const clickInicioHandler = () => {
    router.replace("(tabs)/")
  }

  const clickContinuarHandler = () => {
    navigation.navigate("screens/Registro2");
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
    <View style={styles.background}>
      {/* Cabeçalho da página */}
      <View style={[styles.headerWrapper, styles.centralPosition]}>
        <View style={styles.iconFrame}></View>

        {/* Texto central */}
        <View style={styles.headerTextWrapper}>
          <Text style={[styles.headerTextSize, styles.headerTextFont]}>1/3</Text>
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
        <Text style={[styles.regularTextSize, styles.descriptionTextFont]}>
          Para começar, registre o tipo de pet, se ele está desaparecido ou foi encontrado e adicione uma foto dele.
        </Text>
      </View>

      {/* Seção dos campos que recebem input do usuário */}
      <View style={[styles.inputFieldWrapper, styles.centralPosition]}>
        {/* Campo 'Espécie de Pet' */}
        <View>
          <Text style={styles.labelTextLayout}>
            Espécie de pet
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickEspeciePetHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Espécie
            </Text>
            <Image
                style={[styles.inputFieldIconFrame, styles.inputFieldIconPosition]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
          </Pressable>
        </View>

        {/* Campo 'Tipo de registro' */}
        <View style={styles.inputFieldMarginTop}>
          <Text style={styles.labelTextLayout}>
            Tipo de registro
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickTipoRegistroHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Desaparecido/Encontrado
            </Text>
            <Image
                style={[styles.inputFieldIconFrame, styles.inputFieldIconPosition]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidplay.png")}
              />
          </Pressable>
        </View>

        {/* Campo 'Data do registro' */}
        <View style={styles.inputFieldMarginTop}>
          <Text style={styles.labelTextLayout}>
            Data do registro
          </Text>

          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickDataRegistroHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Data de encontro/desaparecimento
            </Text>
              <Image
                style={[styles.inputFieldIconFrame, styles.inputFieldIconPosition]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidcalendardays.png")}
              />
          </Pressable>
        </View>

        {/* Campo 'Imagem do pet' */}
        <View style={[styles.inputFieldMarginTop, styles.inputFieldCenterLayout]}>
          <Text style={[styles.labelTextLayout]}>
            Imagem do pet
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputImageLayout]}>
              <Image
                style={styles.inputImageIconLayout}
                contentFit="cover"
                source={require("../../assets/heroiconssolidusercircle.png")}
              />
          </Pressable>
        </View>
      </View>

      {/* Botão para continuar */}
      <Pressable style={[styles.primaryButtonLayout, styles.centralPosition]} onPress={clickContinuarHandler}>
        <Text style={[styles.primaryButtonTextFont, styles.regularTextSize]}>
          Continuar
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
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

  regularTextSize: {
    fontSize: FontSize.titleRegular_size,
    lineHeight: 21
  },

  descriptionTextFont: {
    fontFamily: FontFamily.loraRegular,
    textAlign: "center",
    color: Color.neutral10,
    flex: 1
  },

  primaryButtonLayout: {
    top: height * 0.90,
    backgroundColor: Color.neutral8,
    height: 60,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    flexDirection: "row"
  },

  primaryButtonTextFont: {
    fontFamily: FontFamily.loraBold,
    fontWeight: "700",
    color: Color.neutralVariant100
  },

  inputFieldWrapper: {
    top: 190,
    height: 440
  },

  inputFieldMarginTop: {
    marginTop: 15
  },

  labelTextLayout: {
    fontSize: FontSize.labelBold_size,
    lineHeight: 18,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    color: Color.neutral10,
    marginBottom: 4
  },

  inputButtonLayout: {
    marginTop: 4,
    padding: Padding.p_xs,
    borderWidth: 0.3,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    borderColor: Color.colorDarkgray_100,
    backgroundColor: Color.neutralVariant100,
    alignSelf: "stretch",
    flexDirection: "row"
  },

  inputFieldLayout: {
    justifyContent: "flex-start",
    alignItems: "center"
  },

  inputFieldTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    color: Color.neutral3
  },

  inputFieldIconFrame: {
    height: 18,
    width: 18
  },

  inputFieldIconPosition: {
    top: 15,
    right: width * 0.03,
    position: "absolute"
  },

  inputFieldCenterLayout: {
    width: width * 0.40,
    left: (width * 0.50)/2,
    alignItems: "center"
  },

  inputImageLayout: {
    height: 130,
    justifyContent: "center",
    alignItems: "center"
  },

  inputImageIconLayout: {
    width: 84,
    height: 84,
    overflow: "hidden"
  }
});

export default Registro1;
