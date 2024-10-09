import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function About() {
  return (
    <View style={styles.iPhone16Plus14Container}>
      <Text style={styles.about}>About</Text>
      <Text style={styles.descriptionText}>
        {`Mood Flow is a wellness app designed to enhance your emotional well-being through interactive experiences. \n\nOur goal is to empower you to understand and improve your emotional states, fostering mindfulness and positivity in everyday life.`}
      </Text>
      <Text style={styles.developers}>
       {' Developers: Zoie Bonnette, Jason Tran, \t\t\t\t MacArthur Diby '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone16Plus14Container: {
    position: "relative",
    flex:1,
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
    position: "absolute",
    flexShrink: 0,
    top: 64,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 48,
    fontFamily: "Arial",
    fontWeight: "semibold",
  },
  descriptionText: {
    position: "absolute",
    flexShrink: 0,
    top: 147,
    textAlign: "left",
    flexBasis:"auto",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontFamily: "Arial",
    fontWeight: "regular",
    margin:16
  },
  developers: {
    position: "absolute",
    flexShrink: 0,
    top: 600,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "regular",
    marginTop:32,
    margin:16
  },
});
