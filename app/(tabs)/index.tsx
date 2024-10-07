import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IPhone16Plus15() {
  return (
    <View style={styles.iPhone16Plus15Container}>
      <Text style={styles.moodFlow}>MoodFlow</Text>
      <Text style={styles.beginyourjourneynow}>Begin your journey now</Text>
      {/* Visualwind:: can be replaced with <Button style={"filled"} state={"enabled"} showIcon={"false"} /> */}
      <View style={styles.button}>
        <View style={styles.statelayer}>
          <Text style={styles.labeltext}>
            {/* You can add button text here if needed */}
          </Text>
        </View>
      </View>
      <Text style={styles.letsGO}>Lets GO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone16Plus15Container: {
    position: "relative",
    flexShrink: 0,
    height: 932,
    width: 430,
    backgroundColor: "rgba(243, 236, 255, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 0,
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  moodFlow: {
    position: "absolute",
    flexShrink: 0,
    top: 112,
    left: 82,
    width: 266,
    height: 64,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 57,
    fontWeight: "400", // Use string values for fontWeight
    letterSpacing: -0.25,
    lineHeight: 64,
  },
  beginyourjourneynow: {
    position: "absolute",
    flexShrink: 0,
    top: 607,
    left: 45,
    width: 335,
    height: 64,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 64,
  },
  button: {
    position: "absolute",
    flexShrink: 0,
    top: 692,
    height: 40,
    left: 165,
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
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    top: 680,
    left: 178,
    width: 55,
    height: 64,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700", // Use string values for fontWeight
    letterSpacing: -0.25,
    lineHeight: 64,
    //textShadow: 0 4 4 rgba(0, 0, 0, 0.25)
  },
});
