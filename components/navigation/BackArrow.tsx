import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Arrow_back() {
  return (
    <View style={styles.arrow_backContainer}>
      <Svg
        style={styles.icon}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <Path
          d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
          fill="#1D1B20"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow_backContainer: {
    position: "relative",
    flexShrink: 0,
    height: 24,
    width: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 0,
  },
  icon: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible",
  },
});
