import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Desaparecidos = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.background}>

      {/* Cabeçalho da página */}
      <View style={[styles.headerWrapper, styles.centralPosition]}>
        <View style={styles.headerTextWrapper}>
          <Text style={[styles.headerTextFont, styles.headerTextSize]}>
            Pets Desaparecidos
          </Text>
        </View>
      </View>

      {/* Menu 'Desaparecidos' / 'Encontrados' */}
      <View style={styles.navigationMenuLayout}>
        <View style={[styles.navigationMenuTextWrapper]}>
          <View style={[styles.navigationMenuRightPadding]}>
            <Text style={[styles.navigationMenuTextFont, styles.headerTextSize, styles.navigationMenuWidth]}>
              Desaparecidos
            </Text>
          </View>
          <View>
            <Text style={[styles.navigationMenuTextFont, styles.headerTextSize, styles.navigationMenuWidth]}>
              Encontrados
            </Text>
          </View>
        </View>

        <View style={styles.navigationMenuLineWrapper}>
            <View style={styles.navigationMenuRightPadding}>
              <View style={[styles.selectedMenuLineView, styles.navigationMenuWidth]}/>
            </View>
            <View>
              <View style={styles.navigationMenuWidth}/>
            </View>
        </View>
      </View>

      {/* Aba 'Recentes' */}
      <View style={[styles.frameParent5, styles.frameParentPosition]}>
        <View style={[styles.todosWrapper, styles.frameParentSpaceBlock1]}>
          <Text style={styles.todos}>Recentes</Text>
        </View>
        <View style={styles.frameParent6}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../../assets/frame-60119.png")}
          />
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/frame-60123.png")}
          />
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../../assets/frame-60125.png")}
          />
        </View>
      </View>

      {/* Aba 'Todos' */}
      <View style={[styles.frameParent, styles.frameParentSpaceBlock1]}>
        <View style={[styles.todosWrapper, styles.frameParentSpaceBlock1]}>
          <Text style={styles.todos}>Todos</Text>
        </View>
        <View style={styles.frameGroup}>
          <Pressable
            style={[styles.frameContainer, styles.frameShadowBox]}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={[styles.frameChild, styles.wrapperLayout]}
              contentFit="cover"
              source={require("../../assets/frame-10000020991.png")}
            />
            <View style={[styles.frameView, styles.frameParentSpaceBlock]}>
              <View style={styles.fattieMParent}>
                <Text style={styles.fattieM}>Fattie , M</Text>
                <Text style={[styles.ogba, styles.ogbaTypo]}>Ogba</Text>
              </View>
              <View style={styles.diasParent}>
                <Text style={[styles.dias, styles.ogbaTypo]}>7 dias</Text>
                <View style={[styles.guabaWrapper, styles.guabaWrapperFlexBox]}>
                  <Text style={[styles.guaba, styles.guabaFlexBox]}>
                    Guaíba
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={[styles.frameParent1, styles.frameParentSpaceBlock]}>
            <Pressable
              style={styles.wrapperLayout}
              onPress={() => navigation.navigate("Perfil")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/frame-10000020992.png")}
              />
            </Pressable>
            <View style={[styles.frameParent2, styles.frameParentSpaceBlock]}>
              <View>
                <Text style={styles.fattieM}>Teaser , f</Text>
                <Text style={[styles.ogba, styles.ogbaTypo]}>Agege</Text>
              </View>
              <View style={styles.diasParent}>
                <Text style={[styles.dias, styles.ogbaTypo]}>7 days</Text>
                <View style={[styles.guabaWrapper, styles.guabaWrapperFlexBox]}>
                  <Text style={[styles.guaba, styles.guabaFlexBox]}>
                    Nigeria
                  </Text>
                </View>
              </View>
              <Image
                style={[
                  styles.heroiconsOutlineplusCircle,
                  styles.heroiconsLayout,
                ]}
                contentFit="cover"
                source={require("../../assets/heroiconsoutlinepluscircle1.png")}
              />
            </View>
          </View>
        </View>
      </View>

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

  frameParentSpaceBlock1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  frameShadowBox: {
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
    borderRadius: Border.br_xs,
  },
  wrapperLayout: {
    height: 209,
    width: "100%",
  },
  frameParentSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  ogbaTypo: {
    fontFamily: FontFamily.loraBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.labelBold_size,
  },
  guabaWrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  guabaFlexBox: {
    textAlign: "center",
    lineHeight: 16,
  },
  iconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  heroiconsLayout: {
    width: 24,
    height: 24,
  },
  phoneBarFlexBox: {
    paddingVertical: Padding.p_base,
    width: 430,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  searchTypo: {
    color: Color.neutral9,
    fontFamily: FontFamily.titleRegular,
    lineHeight: 20,
    fontSize: FontSize.titleRegular_size,
    textAlign: "left",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    marginLeft: 8,
    height: 154,
    width: 147,
  },
  todos: {
    textAlign: "left",
    lineHeight: 18,
    color: Color.neutralVariant00,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    fontSize: FontSize.labelBold_size,
  },
  todosWrapper: {
    flexDirection: "row",
  },
  frameChild: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  fattieM: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    color: Color.neutral8,
    textAlign: "left",
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  ogba: {
    marginTop: 4,
    color: Color.neutralVariant00,
    fontFamily: FontFamily.loraBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  fattieMParent: {
    display: "none",
  },
  dias: {
    color: Color.neutral7,
  },
  guaba: {
    fontSize: FontSize.size_3xs,
    color: Color.neutralVariant100,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 16,
  },
  guabaWrapper: {
    backgroundColor: Color.neutral7,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 4,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_9xs,
  },
  diasParent: {
    alignItems: "center",
  },
  frameView: {
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    borderTopWidth: 0.3,
    borderColor: Color.colorDarkgray_200,
    marginTop: 12,
    borderStyle: "solid",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  heroiconsOutlineplusCircle: {
    height: 24,
    overflow: "hidden",
  },
  frameParent2: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderTopWidth: 0.3,
    borderColor: Color.colorDarkgray_200,
    marginTop: 12,
    borderStyle: "solid",
    flexDirection: "row",
  },
  frameParent1: {
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
    borderRadius: Border.br_xs,
  },
  frameGroup: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 320,
    width: 431,
    left: 0,
    position: "absolute",
  },
  time1: {
    letterSpacing: 0.1,
    fontWeight: "600",
    fontFamily: FontFamily.labelBold,
    color: Color.colorGray_100,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.labelBold_size,
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
    width: 16,
    height: 11,
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
    top: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.bgCOLOUR,
  },
  heroiconsSolidheart: {
    height: 24,
    display: "none",
  },
  home: {
    fontFamily: FontFamily.titleRegular,
    lineHeight: 20,
    fontSize: FontSize.titleRegular_size,
    color: Color.neutral8,
    textAlign: "left",
  },
  homeWrapper: {
    marginTop: 2,
    flexDirection: "row",
  },
  heroiconsSolidchatBubbleLeParent: {
    alignItems: "center",
    display: "none",
  },
  setting: {
    marginTop: 2,
  },
  frameParent4: {
    top: 858,
    backgroundColor: Color.primary1,
    borderColor: Color.neutral9,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_11xl,
    borderStyle: "solid",
  },
  frameItem: {
    height: 154,
    width: 147,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  frameInner: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    marginLeft: 8,
  },
  frameParent6: {
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent5: {
    top: 122,
  },
});

export default Desaparecidos;
