import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Encontrados = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const router = useRouter();

  const clickDesaparecidosHandler = () => {
    router.navigate("(tabs)/")
  }

  const clickEncontradosHandler = () => {
    router.navigate("(tabs)/encontrados")
  }

  const clickPerfilPetHandler = () => {
    navigation.navigate("screens/Perfil")
  }

  return (
    <View style={styles.background}>

      {/* Cabeçalho da página */}
      <View style={[styles.headerWrapper, styles.centralPosition]}>
        <View style={styles.headerTextWrapper}>
          <Text style={[styles.headerTextFont, styles.headerTextSize]}>
            Pets Encontrados
          </Text>
        </View>
      </View>

      {/* Menu 'Desaparecidos' / 'Encontrados' */}
      <View style={styles.navigationMenuLayout}>
        <View style={[styles.navigationMenuTextWrapper]}>
          <View style={[styles.navigationMenuRightPadding]}>
            <Pressable onPress={clickDesaparecidosHandler}>
              <Text style={[styles.navigationMenuTextFont, styles.headerTextSize, styles.navigationMenuWidth]}>
                Desaparecidos
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={clickEncontradosHandler}>
              <Text style={[styles.navigationMenuTextFont, styles.headerTextSize, styles.navigationMenuWidth]}>
                Encontrados
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.navigationMenuLineWrapper}>
            <View style={styles.navigationMenuRightPadding}>
              <View style={styles.navigationMenuWidth}/>
            </View>
            <View>
              <View style={[styles.selectedMenuLineView, styles.navigationMenuWidth]}/>
            </View>
        </View>
      </View>

      {/* Pets encontrados */}
      <View style={styles.allImagesLayout}>
        <View style={[styles.allImagesWrapper, styles.imageBlockPadding]}>

          <Pressable style={styles.imageBoxShadow} onPress={clickPerfilPetHandler}>
            <Image
              style={styles.imageLayout}
              contentFit="cover"
              source={require("../../assets/frame-10000020993.png")}
            />

            <View style={[styles.imageLabelLayout, styles.imageSpaceBlock]}>
              <View style={styles.imageLabelWrapper}>
                <Text style={styles.petMissingTimeTextLayout}>7 dias</Text>
                <View style={styles.petMissingPlaceWrapper}>
                  <Text style={styles.petMissingPlaceTextLayout}>
                    Fazenda Vilanova
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable style={[styles.imageBoxShadow, styles.imageSpaceBlock]} onPress={clickPerfilPetHandler}>
            <Image
              style={styles.imageLayout}
              contentFit="cover"
              source={require("../../assets/unsplashtdx67igk0vw.png")}
            />

            <View style={[styles.imageLabelLayout, styles.imageSpaceBlock]}>
              <View style={styles.imageLabelWrapper}>
                <Text style={styles.petMissingTimeTextLayout}>2 dias</Text>
                <View style={styles.petMissingPlaceWrapper}>
                  <Text style={styles.petMissingPlaceTextLayout}>
                    Nova Petrópolis
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable style={[styles.imageBoxShadow, styles.imageSpaceBlock]} onPress={clickPerfilPetHandler}>
            <Image
              style={styles.imageLayout}
              contentFit="cover"
              source={require("../../assets/frame-10000020994.png")}
            />

            <View style={[styles.imageLabelLayout, styles.imageSpaceBlock]}>
              <View style={styles.imageLabelWrapper}>
                <Text style={styles.petMissingTimeTextLayout}>5 dias</Text>
                <View style={styles.petMissingPlaceWrapper}>
                  <Text style={styles.petMissingPlaceTextLayout}>
                    Água Santa
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <View style={styles.imageSpaceBlock}/>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 932,
    overflow: "scroll",
    width: "100%",
    backgroundColor: Color.bgCOLOUR,
    flex: 1
  },

  centralPosition: {
    width: width * 0.9,
    left: (width * 0.1)/2
  },

  headerWrapper: {
    top: 53
  },

  headerTextWrapper: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center"
  },

  headerTextSize: {
    lineHeight: 21,
    fontSize: FontSize.size_base
  },

  headerTextFont: {
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    color: Color.neutral10
  },

  regularTextSize: {
    fontSize: FontSize.titleRegular_size,
    lineHeight: 21
  },

  navigationMenuLayout: {
    top: 84,
    height: 33,
    backgroundColor: Color.neutral8,
    width: '100%',
    position: "absolute"
  },

  navigationMenuRightPadding: {
    paddingRight: width*0.1
  },

  navigationMenuWidth: {
    width: width*0.4,
    textAlign: "center"
  },

  navigationMenuTextWrapper: {
    backgroundColor: Color.neutral8,
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  navigationMenuTextFont: {
    fontFamily: FontFamily.titleMedium1,
    color: Color.neutralVariant100
  },

  navigationMenuLineWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },

  selectedMenuLineView: {
    borderTopWidth: 4,
    borderColor: Color.neutralVariant100,
    backgroundColor: Color.neutralVariant100,
    borderStyle: "solid"
  },

  imageBlockPadding: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl
  },

  labelTextLayout: {
    fontSize: FontSize.labelBold_size,
    lineHeight: 18,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    color: Color.neutralVariant00,
    textAlign: "left",
    marginBottom: 4
  },

  recentImageWrapper: {
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row"
  },

  recentImageFrame: {
    height: 154,
    width: 147,
    marginLeft: 8,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs
  },

  allImagesLayout: {
    top: 122,
    width: width,
    position: "absolute"
  },

  allImagesWrapper: {
    marginTop: 8,
    alignSelf: "stretch"
  },

  imageBoxShadow: {
    height: 287,
    backgroundColor: Color.neutralVariant100,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_xs
  },

  imageLayout: {
    maxWidth: "100%",
    alignSelf: "auto",
    overflow: "hidden",
    height: 209,
    borderRadius: Border.br_xs
  },

  imageLabelLayout: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    borderTopWidth: 0.3,
    borderColor: Color.colorDarkgray_200,
    marginTop: 12,
    borderStyle: "solid",
    flexDirection: "row"
  },

  imageSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch"
  },

  imageLabelWrapper: {
    alignItems: "center"
  },

  petMissingTimeTextLayout: {
    fontFamily: FontFamily.loraBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.labelBold_size,
    color: Color.neutral7
  },

  petMissingPlaceWrapper: {
    backgroundColor: Color.neutral7,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 4,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row"
  },

  petMissingPlaceTextLayout: {
    fontSize: FontSize.size_3xs,
    color: Color.neutralVariant100,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
  }

});

export default Encontrados;
