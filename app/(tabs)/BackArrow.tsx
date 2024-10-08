import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';

export default function Arrow_back() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.arrow_backContainer} onPress={() => navigation.goBack()}>
          
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
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrow_backContainer: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 0,
    marginTop: 45,
    marginLeft: 16
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
