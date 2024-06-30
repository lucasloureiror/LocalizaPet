import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Perfil = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const clickVoltarHandler = () => {
    navigation.navigate("screens/Desaparecidos");
  }

  const clickRegistrarAvistamentoHandler = () => {

  }

  const clickContatoHandler = () => {

  }

  return (
    <View style={styles.background}>

      {/* Cabeçalho da página */}
      <View style={styles.headerLayout}/>
      <View style={[styles.headerWrapper, styles.centralPosition]}>
        {/* Botão de início */}
        <Pressable style={styles.iconFrame} onPress={clickVoltarHandler}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/frame1.png")}
          />
        </Pressable>

        {/* Texto central */}
        <View style={styles.headerTextWrapper}>
          <Text style={[styles.headerTextSize, styles.headerTextFont]}>Maria Bertolina</Text>
        </View>

        <View style={styles.iconFrame}></View>
      </View>

      {/* Status do animal */}
      <View style={[styles.petStatusWrapper, styles.centralPosition]}>
        <Text style={styles.petStatusTextLayout}>Animal Desaparecido</Text>
      </View>

      {/* Imagem do pet */}
      <View style={styles.profileImageWrapper}>
        <Image
          style={[styles.profileImageFrame, styles.centralPosition]}
          contentFit="cover"
          source={require("../../assets/frame-1000002099.png")}
        />
      </View>

      {/* Botões */}
      <View style={styles.buttonSectionWrapper}>
        {/* Botão 'Registrar avistamento' */}
        <Pressable style={styles.buttonBorderWrapper} onPress={clickRegistrarAvistamentoHandler}>
          <Text style={[styles.regularTextSize, styles.buttonTextFont]}>
            Registrar avistamento
          </Text>
          <Image
              style={[styles.buttonIconFrame, styles.buttonIconPosition]}
              contentFit="cover"
              source={require("../../assets/heroiconssolidmappin.png")}
            />
        </Pressable>
        
        {/* Botão 'Contato' */}
        <Pressable style={[styles.buttonBorderWrapper, styles.buttonMarginTop]} onPress={clickContatoHandler}>
          <Text style={[styles.regularTextSize, styles.buttonTextFont]}>
            Contato
          </Text>
          <Image
              style={[styles.buttonIconFrame, styles.buttonIconPosition]}
              contentFit="cover"
              source={require("../../assets/subtract.png")}
            />
        </Pressable>
      </View>

      {/* Informações sobre o pet */}
      <View style={styles.infoSectionWrapper}>
        <View style={styles.infoBoxLayout}>
          <View style={styles.infoBoxLineWrapper}>
            <Text style={[styles.regularTextSize, styles.infoFieldTextFont]}>ID:</Text>
            <Text style={[styles.labelTextSize, styles.infoContentTextFont]}>291023</Text>
          </View>
          <View style={styles.infoBoxLineWrapper}>
            <Text style={[styles.regularTextSize, styles.infoFieldTextFont]}>Nome:</Text>
            <Text style={[styles.labelTextSize, styles.infoContentTextFont]}>Maria Bertolina</Text>
          </View>
          <View style={styles.infoBoxLineWrapper}>
            <Text style={[styles.regularTextSize, styles.infoFieldTextFont]}>Espécie:</Text>
            <Text style={[styles.labelTextSize, styles.infoContentTextFont]}>Cachorro</Text>
          </View>
          <View style={styles.infoBoxLineWrapper}>
            <Text style={[styles.regularTextSize, styles.infoFieldTextFont]}>Cidade:</Text>
            <Text style={[styles.labelTextSize, styles.infoContentTextFont]}>Guaíba</Text>
          </View>
          <Text style={[styles.regularTextSize, styles.infoFieldTextFont]}>Detalhes:</Text>
          <Text style={[styles.labelTextSize, styles.infoContentTextFont]}>Cachorra idosa muito querida por minha família, caso encontre ela favor oferecer comida.</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.bgCOLOUR,
    width: "100%",
    height: 932,
    overflow: "scroll",
    flex: 1,
  },

  centralPosition: {
    width: width * 0.9,
    left: (width * 0.1)/2
  },

  regularTextSize: {
    lineHeight: 21,
    fontSize: FontSize.titleRegular_size,
  },

  labelTextSize: {
    lineHeight: 16,
    fontSize: FontSize.labelBold_size,
  },

  headerLayout: {
    top: 0,
    height: 96,
    width: "100%",
    backgroundColor: Color.neutral8
  },

  iconFrame: {
    height: 28,
    width: 28
  },

  iconLayout: {
    height: "100%",
    width: "100%"
  },

  headerWrapper: {
    top: 48,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute"
  },

  headerTextWrapper: {
    flexDirection: "row"
  },

  headerTextSize: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28
  },

  headerTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutralVariant100
  },

  petStatusWrapper: {
    top: 111,
    flexDirection: "row",
    position: "absolute",
  },

  petStatusTextLayout: {
    lineHeight: 18,
    color: Color.neutral10,
    textAlign: "center",
    fontSize: FontSize.labelBold_size,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    flex: 1,
  },

  profileImageWrapper: {
    top: 146,
    height: 287,
    flexDirection: "row",
    position: "absolute",
  },

  profileImageFrame: {
    maxHeight: "100%",
    alignSelf: "stretch",
  },

  buttonSectionWrapper: {
    top: 360,
    alignItems: "center"
  },

  buttonBorderWrapper: {
    padding: Padding.p_xs,
    justifyContent: "center",
    borderWidth: 0.3,
    borderColor: Color.colorDarkgray_100,
    backgroundColor: Color.neutralVariant100,
    borderRadius: Border.br_xs,
    width: 390,
    maxWidth: width * 0.9,
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
  },

  buttonTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    color: Color.neutral9
  },

  buttonIconFrame: {
    height: 18,
    width: 18
  },

  buttonIconPosition: {
    top: 15,
    right: width * 0.03,
    position: "absolute"
  },

  buttonContentWrapper: {
    width: 258,
    height: 24,
  },

  buttonMarginTop: {
    marginTop: 16,
  },

  infoSectionWrapper: {
    top: 360,
    alignItems: "center",
  },

  infoBoxLayout: {
    backgroundColor: Color.neutral7,
    padding: 24,
    marginTop: 24,
    borderRadius: Border.br_xs,
    width: 390,
    maxWidth: width * 0.9,
    marginBottom: 20
  },

  infoBoxLineWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 3
  },

  infoTextColor: {
    color: Color.neutralVariant100,
  },

  infoFieldTextFont: {
    color: Color.neutralVariant100,
    fontFamily: FontFamily.loraBold,
    fontWeight: "500",
    marginRight: 8
  },

  infoContentTextFont: {
    color: Color.neutralVariant100,
    fontFamily: FontFamily.titleMedium,
    fontWeight: "500",
    letterSpacing: 0.1
  }
});

export default Perfil;
