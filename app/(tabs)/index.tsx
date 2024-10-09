import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Fontisto } from "@expo/vector-icons";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text style={styles.moodFlow}>MoodFlow</Text>
      <Fontisto name="sun" size={275} style={styles.sunny} ></Fontisto>
      <FontAwesome5 name="circle" size={175} style={styles.sunnyout}></FontAwesome5>
      <Text style={styles.beginyourjourneynow}>Begin your journey now</Text>
      <View style={styles.button}>
        <View style={styles.statelayer}>
          <Text style={styles.labeltext}></Text>
        </View>
      </View>
      <Text style={styles.letsGO}>Lets GO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  moodFlow: {
    position: "absolute",
    flexShrink: 0,
    top: 112,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "semibold", 
    lineHeight: 64,
    fontFamily: "Arial"
  },
  beginyourjourneynow: {
    position: "absolute",
    flexShrink: 0,
    top: 583,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "regular",
    letterSpacing: 0.25,
    lineHeight: 64,
    fontFamily: "Arial"
  },
  button: {
    position: "absolute",
    flexShrink: 0,
    top: 662,
    height: 40,
    width: 79,
    backgroundColor: "rgba(101, 85, 143, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
    borderRadius: 100,
  },
  statelayer: {
    position: "relative",
    alignSelf: "stretch",
    display: "flex",
    columnGap: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  labeltext: {
    position: "relative",
    flexShrink: 0,
  },
  letsGO: {
    position: "absolute",
    flexShrink: 0,
    top: 650,
    width: 55,
    height: 64,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: -0.25,
    lineHeight: 64,
    fontFamily: "Arial"
  },
  sunny: {
    position: "absolute",
    color: "#FABD00",
  },
  sunnyout: {
    color: "rgba(220, 172, 28, 1)",
    top: 5
  },
});
