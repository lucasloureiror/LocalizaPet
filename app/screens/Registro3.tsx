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

  const clickEmailHandler = () => {

  }

  const clickTelefoneHandler = () => {

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
          <Text style={[styles.headerTextSize, styles.headerTextFont]}>3/3</Text>
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
          Agora deixe seu contato para auxiliar o encontro do pet ou do dono.
        </Text>
      </View>

      {/* Seção dos campos que recebem input do usuário */}
      <View style={[styles.inputFieldWrapper, styles.centralPosition]}>
        {/* Campo 'E-mail' */}
        <View>
          <Text style={styles.labelTextLayout}>
            E-mail
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickEmailHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>
              Endereço de e-mail
            </Text>
          </Pressable>
        </View>

        {/* Campo 'Telefone ou Whatsapp' */}
        <View style={styles.inputFieldMarginTop}>
          <Text style={styles.labelTextLayout}>
            Telefone ou WhatsApp
          </Text>
          <Pressable style={[styles.inputButtonLayout, styles.inputFieldLayout]} onPress={clickTelefoneHandler}>
            <Text style={[styles.inputFieldTextFont, styles.regularTextSize]}>(55)9xxxx-xxxx</Text>
          </Pressable>
        </View>
      </View>

      {/* Botão para finalizar */}
      <Pressable style={[styles.primaryButtonLayout, styles.centralPosition]} onPress={clickFinalizarHandler}>
        <Text style={[styles.primaryButtonTextFont, styles.regularTextSize]}>
          Finalizar
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
  }
});

export default Registro3;
