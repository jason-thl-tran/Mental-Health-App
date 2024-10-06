import { TouchableOpacity, Text } from "react-native";
import { StyleSheet, View, Image, Platform } from "react-native";

export default function button() {
  <View style={{ backgroundColor: "lavendar" }}>
    Secret Page
    <TouchableOpacity onPress={() => {}} style={stylesheet.primaryButton}>
      <Text>Happy</Text>
    </TouchableOpacity>
  </View>;
}

// Add your styles separately
const stylesheet = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
