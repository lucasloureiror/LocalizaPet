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

  const clickNomeHandler = () => {
    
  }

  const clickCidadeHandler = () => {
    
  }

  const clickDetalhesHandler = () => {
    
  }

  return (
    <View style={styles.background}>
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
        <Text style={[styles.regularTextSize, styles.descriptionTextFont]}>
          Agora preencha a identificação do Pet, cidade que foi encontrado/desapareceu e forneça mais detalhes que possam ajudar.
        </Text>
      </View>

      {/* Seção dos campos que recebem input do usuário */}
      <View style={[styles.inputFieldWrapper, styles.centralPosition]}>
        {/* Campo 'Nome ou identificação' */}
        <View>
          <Text style={styles.labelTextLayout}>
            Nome ou identificação - se existir
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickNomeHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Nome
            </Text>
          </Pressable>
        </View>

        {/* Campo 'Cidade' */}
        <View style={styles.inputFieldMarginTop}>
          <Text style={styles.labelTextLayout}>
            Cidade
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickCidadeHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Cidade
            </Text>
            <Image
              style={[styles.inputFieldIconFrame, styles.inputFieldIconPosition]}
              contentFit="cover"
              source={require("../../assets/heroiconssolidplay.png")}
            />
          </Pressable>
        </View>

        {/* Campo 'Forneça mais detalhes...' */}
        <View style={styles.inputFieldMarginTop}>
          <Text style={styles.labelTextLayout}>
            Forneça mais detalhes sobre o pet ou o local que foi encontrado
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputLongTextLayout]} onPress={clickDetalhesHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Detalhes
            </Text>
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
    height: 440,
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

  inputLongTextLayout: {
    height: 150
  }
});

export default Registro2;
