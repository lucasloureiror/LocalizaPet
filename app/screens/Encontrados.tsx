import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Encontrados = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.encontrados}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../../assets/frame2.png")}
        />
        <View style={styles.petsEncontradosWrapper}>
          <Text style={[styles.petsEncontrados, styles.desaparecidosTypo1]}>
            Pets Encontrados
          </Text>
        </View>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../../assets/frame2.png")}
        />
        <Image
          style={[styles.heroiconsSolidheart, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../../assets/heroiconssolidheart.png")}
        />
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.frameContainer}>
          <View style={styles.time}>
            <Text style={[styles.desaparecidos, styles.desaparecidosTypo]}>
              Desaparecidos
            </Text>
          </View>
          <View style={styles.encontradosWrapper}>
            <Text style={[styles.desaparecidos, styles.desaparecidosTypo]}>
              Encontrados
            </Text>
          </View>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={[styles.frameParent1, styles.frameParentShadowBox]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/frame-10000020993.png")}
            />
          </Pressable>
          <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
            <View style={styles.diasParent}>
              <Text style={[styles.dias, styles.diasTypo]}>7 dias</Text>
              <View style={styles.fazendaVilanovaWrapper}>
                <Text
                  style={[styles.fazendaVilanova, styles.desaparecidosTypo]}
                >
                  Fazenda Vilanova
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[
            styles.unsplashtdx67igk0vwParent,
            styles.frameWrapperSpaceBlock,
          ]}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Image
            style={styles.unsplashtdx67igk0vwIcon}
            contentFit="cover"
            source={require("../../assets/unsplashtdx67igk0vw.png")}
          />
          <View style={[styles.frameWrapper1, styles.frameWrapperSpaceBlock]}>
            <View style={styles.diasParent}>
              <Text style={[styles.dias, styles.diasTypo]}>2 dias</Text>
              <View style={styles.fazendaVilanovaWrapper}>
                <Text
                  style={[styles.fazendaVilanova, styles.desaparecidosTypo]}
                >
                  Nova Petrópolis
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <View style={[styles.frameParent2, styles.frameWrapperSpaceBlock]}>
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/frame-10000020994.png")}
          />
          <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
            <View>
              <Text style={styles.teaserF}>Teaser , f</Text>
              <Text style={[styles.agege, styles.diasTypo]}>Agege</Text>
            </View>
            <View style={styles.diasParent}>
              <Text style={[styles.dias, styles.diasTypo]}>7 days</Text>
              <View style={styles.fazendaVilanovaWrapper}>
                <Text
                  style={[styles.fazendaVilanova, styles.desaparecidosTypo]}
                >
                  Nigeria
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent4, styles.phoneBarFlexBox]}>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidhome.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.home}>Inicio</Text>
          </View>
        </View>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidmagnifyingglass.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.searchTypo}>Buscar</Text>
          </View>
        </View>
        <View style={styles.heroiconsSolidchatBubbleLeParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidchatbubbleleftright.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.searchTypo}>Messages</Text>
          </View>
        </View>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconsoutlinepluscircle.png")}
          />
          <Text style={[styles.setting, styles.searchTypo]}>Cadastrar</Text>
        </View>
      </View>
      <View style={[styles.frameParent4, styles.phoneBarFlexBox]}>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidhome.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.home}>Inicio</Text>
          </View>
        </View>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidmagnifyingglass.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.searchTypo}>Buscar</Text>
          </View>
        </View>
        <View style={styles.heroiconsSolidchatBubbleLeParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidchatbubbleleftright.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={styles.searchTypo}>Messages</Text>
          </View>
        </View>
        <View style={styles.diasParent}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconsoutlinepluscircle.png")}
          />
          <Text style={[styles.setting, styles.searchTypo]}>Cadastrar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneBarFlexBox: {
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 430,
    left: 0,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    lineHeight: 16,
  },
  framePosition: {
    left: 20,
    position: "absolute",
  },
  frameIconLayout: {
    height: 24,
    width: 24,
  },
  desaparecidosTypo1: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  desaparecidosTypo: {
    color: Color.neutralVariant100,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  frameParentShadowBox: {
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
  iconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  frameWrapperSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  diasTypo: {
    fontFamily: FontFamily.loraBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.labelBold_size,
  },
  searchTypo: {
    color: Color.neutral9,
    fontFamily: FontFamily.titleRegular,
    lineHeight: 20,
    fontSize: FontSize.titleRegular_size,
    textAlign: "left",
  },
  time1: {
    letterSpacing: 0.1,
    fontWeight: "600",
    fontFamily: FontFamily.labelBold,
    color: Color.colorGray_100,
    fontSize: FontSize.labelBold_size,
    textAlign: "center",
    lineHeight: 16,
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
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    backgroundColor: Color.bgCOLOUR,
  },
  frameIcon: {
    overflow: "hidden",
  },
  petsEncontrados: {
    color: Color.neutral10,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  petsEncontradosWrapper: {
    width: 94,
    flexDirection: "row",
  },
  heroiconsSolidheart: {
    display: "none",
  },
  frameParent: {
    top: 53,
    width: 390,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  desaparecidos: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    color: Color.neutralVariant100,
  },
  encontradosWrapper: {
    paddingLeft: Padding.p_3xs,
    flexDirection: "row",
  },
  frameContainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
    backgroundColor: Color.neutral8,
    height: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderColor: Color.neutralVariant100,
    borderTopWidth: 2,
    width: 98,
    height: 2,
    borderStyle: "solid",
    backgroundColor: Color.neutral8,
  },
  frameGroup: {
    top: 86,
    height: 28,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_49xl,
    paddingVertical: 0,
    backgroundColor: Color.neutral8,
    justifyContent: "space-between",
    width: 430,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    height: 209,
    width: "100%",
  },
  dias: {
    color: Color.neutral7,
  },
  fazendaVilanova: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 16,
  },
  fazendaVilanovaWrapper: {
    backgroundColor: Color.neutral7,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 4,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  diasParent: {
    alignItems: "center",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_5xs,
    borderTopWidth: 0.3,
    borderColor: Color.colorDarkgray_200,
    marginTop: 12,
    borderStyle: "solid",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameParent1: {
    alignSelf: "stretch",
    backgroundColor: Color.neutralVariant100,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
  },
  unsplashtdx67igk0vwIcon: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 210,
    width: 391,
  },
  frameWrapper1: {
    padding: Padding.p_5xs,
    borderTopWidth: 0.3,
    borderColor: Color.colorDarkgray_200,
    marginTop: 12,
    borderStyle: "solid",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  unsplashtdx67igk0vwParent: {
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
  frameItem: {
    height: 209,
  },
  teaserF: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    color: Color.neutral8,
    textAlign: "left",
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  agege: {
    color: Color.neutralVariant00,
    marginTop: 4,
  },
  frameParent2: {
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
  frameView: {
    top: 122,
    width: 391,
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
    display: "none",
    alignItems: "center",
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
  encontrados: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bgCOLOUR,
  },
});

export default Encontrados;
