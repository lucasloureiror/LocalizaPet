import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Perfil = () => {
  return (
    <View style={styles.perfil}>
      <View style={styles.animalDesaparecidoWrapper}>
        <Text style={styles.animalDesaparecido}>Animal Desaparecido</Text>
      </View>
      <View style={[styles.frameParent, styles.phoneBarFlexBox]}>
        <View style={styles.heroiconsSolidhomeParent}>
          <Image
            style={[styles.heroiconsSolidhome, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidhome.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={[styles.home, styles.homeTypo]}>Inicio</Text>
          </View>
        </View>
        <View style={styles.heroiconsSolidhomeParent}>
          <Image
            style={[styles.heroiconsSolidhome, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidmagnifyingglass.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={[styles.search, styles.homeTypo]}>Buscar</Text>
          </View>
        </View>
        <View style={styles.heroiconsSolidchatBubbleLeParent}>
          <Image
            style={[styles.heroiconsSolidhome, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconssolidchatbubbleleftright.png")}
          />
          <View style={styles.homeWrapper}>
            <Text style={[styles.search, styles.homeTypo]}>Messages</Text>
          </View>
        </View>
        <View style={styles.heroiconsSolidhomeParent}>
          <Image
            style={[styles.heroiconsSolidhome, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../../assets/heroiconsoutlinepluscircle.png")}
          />
          <Text style={[styles.setting, styles.homeTypo]}>Cadastrar</Text>
        </View>
      </View>
      <View style={[styles.phoneBarParent, styles.phoneBg]}>
        <View style={[styles.phoneBar, styles.phoneBg]}>
          <View style={styles.time}>
            <Text style={styles.time1}>6:31</Text>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../../assets/battery1.png")}
            />
            <Image
              style={styles.combinedShapeIcon}
              contentFit="cover"
              source={require("../../assets/combined-shape1.png")}
            />
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("../../assets/wifi1.png")}
            />
          </View>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={styles.perfilInner}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../../assets/frame-1000002099.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View>
          <View style={styles.frameWrapperBorder}>
            <View style={styles.frameView}>
              <View
                style={[
                  styles.registrarAvistamentoWrapper,
                  styles.wrapperFlexBox1,
                ]}
              >
                <Text style={[styles.registrarAvistamento, styles.idTypo]}>
                  Registrar avistamento
                </Text>
              </View>
              <Image
                style={[styles.heroiconsSolidmapPin, styles.subtractIconLayout]}
                contentFit="cover"
                source={require("../../assets/heroiconssolidmappin.png")}
              />
            </View>
          </View>
          <View style={[styles.frameWrapper1, styles.frameWrapperBorder]}>
            <View style={styles.frameParent1}>
              <View
                style={[
                  styles.registrarAvistamentoWrapper,
                  styles.wrapperFlexBox1,
                ]}
              >
                <Text style={[styles.registrarAvistamento, styles.idTypo]}>
                  Contato
                </Text>
              </View>
              <Image
                style={[styles.subtractIcon, styles.subtractIconLayout]}
                contentFit="cover"
                source={require("../../assets/subtract.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameParent2}>
          <View style={styles.frameParent3}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.id, styles.idTypo]}>ID:</Text>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>291023</Text>
            </View>
          </View>
          <View style={[styles.frameParent4, styles.frameParentFlexBox]}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.id, styles.idTypo]}>Nome :</Text>
            </View>
            <View style={styles.wrapperFlexBox}>
              <Text style={styles.textTypo}>Maria Bertolina</Text>
            </View>
          </View>
          <View style={[styles.frameParent4, styles.frameParentFlexBox]}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.id, styles.idTypo]}>Espécie :</Text>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Cão</Text>
            </View>
          </View>
          <View style={[styles.frameParent4, styles.frameParentFlexBox]}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.id, styles.idTypo]}>Cidade:</Text>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>Guaíba</Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.wrapperFlexBox1}>
              <Text style={[styles.id, styles.idTypo]}>Detalhes:</Text>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                Cachorra idosa muito querida por minha família, caso encontre
                ela favor oferecer comida.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.mariaBertolina1}>Maria Bertolina</Text>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../../assets/frame1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneBarFlexBox: {
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    width: 430,
    flexDirection: "row",
  },
  frameIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.titleRegular,
    lineHeight: 20,
    fontSize: FontSize.titleRegular_size,
    textAlign: "left",
  },
  phoneBg: {
    backgroundColor: Color.neutral8,
    alignItems: "center",
  },
  framePosition: {
    left: 20,
    position: "absolute",
  },
  wrapperFlexBox1: {
    justifyContent: "center",
    flexDirection: "row",
  },
  idTypo: {
    lineHeight: 21,
    textAlign: "left",
    fontSize: FontSize.titleRegular_size,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  subtractIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  frameWrapperBorder: {
    padding: Padding.p_xs,
    justifyContent: "flex-end",
    borderWidth: 0.3,
    borderColor: Color.colorDarkgray_100,
    backgroundColor: Color.neutralVariant100,
    borderRadius: Border.br_xs,
    width: 390,
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    marginLeft: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.neutralVariant100,
    lineHeight: 16,
    letterSpacing: 0.1,
    textAlign: "left",
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
  },
  frameParentFlexBox: {
    marginTop: 4,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  animalDesaparecido: {
    lineHeight: 18,
    color: Color.neutral10,
    textAlign: "center",
    fontSize: FontSize.labelBold_size,
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    flex: 1,
  },
  animalDesaparecidoWrapper: {
    top: 111,
    left: 82,
    width: 267,
    flexDirection: "row",
    position: "absolute",
  },
  heroiconsSolidhome: {
    height: 24,
  },
  home: {
    color: Color.neutral8,
    textAlign: "left",
  },
  homeWrapper: {
    marginTop: 2,
    flexDirection: "row",
  },
  heroiconsSolidhomeParent: {
    alignItems: "center",
  },
  search: {
    color: Color.neutral9,
    textAlign: "left",
  },
  heroiconsSolidchatBubbleLeParent: {
    display: "none",
    alignItems: "center",
  },
  setting: {
    color: Color.neutral9,
    textAlign: "left",
    marginTop: 2,
  },
  frameParent: {
    top: 854,
    backgroundColor: Color.primary1,
    borderColor: Color.neutral9,
    borderWidth: 0.5,
    paddingHorizontal: Padding.p_11xl,
    borderStyle: "solid",
    left: 0,
    justifyContent: "space-between",
    width: 430,
    position: "absolute",
  },
  time1: {
    fontWeight: "600",
    fontFamily: FontFamily.labelBold,
    color: Color.neutralVariant100,
    lineHeight: 16,
    letterSpacing: 0.1,
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
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    width: 430,
    flexDirection: "row",
  },
  frameChild: {
    height: 36,
    marginTop: 12,
    width: 390,
    backgroundColor: Color.neutral8,
    justifyContent: "space-between",
  },
  phoneBarParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    maxHeight: "100%",
    width: 410,
    alignSelf: "stretch",
  },
  perfilInner: {
    top: 146,
    left: 5,
    width: 574,
    height: 271,
    flexDirection: "row",
    position: "absolute",
  },
  registrarAvistamento: {
    color: Color.neutral9,
  },
  registrarAvistamentoWrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  heroiconsSolidmapPin: {
    top: 4,
    left: 238,
    overflow: "hidden",
  },
  frameView: {
    width: 258,
    height: 24,
  },
  subtractIcon: {
    top: 5,
    left: 202,
  },
  frameParent1: {
    width: 221,
    height: 24,
  },
  frameWrapper1: {
    marginTop: 16,
  },
  id: {
    color: Color.neutralVariant100,
  },
  text: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  frameParent3: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent4: {
    alignItems: "center",
  },
  frameParent2: {
    backgroundColor: Color.neutral7,
    padding: 24,
    marginTop: 24,
    borderRadius: Border.br_xs,
    width: 390,
  },
  frameGroup: {
    top: 448,
  },
  mariaBertolina1: {
    top: 55,
    left: 137,
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    width: 190,
    color: Color.neutralVariant100,
    textAlign: "left",
    fontFamily: FontFamily.titleMedium1,
    fontWeight: "500",
    position: "absolute",
  },
  frameIcon: {
    top: 60,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  perfil: {
    backgroundColor: Color.bgCOLOUR,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Perfil;
