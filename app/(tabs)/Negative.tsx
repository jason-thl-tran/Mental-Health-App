import { Text, View, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; 
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Mood: undefined;
};
type MoodScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Negative() {
  const navigation = useNavigation<MoodScreenNavigationProp>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 189, 189, 1)",
      }}
    >
      <TouchableOpacity
        style={stylesheet.arrow_back}
        onPress={() => navigation.navigate("mood" as keyof RootStackParamList)}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={stylesheet.journal}>Negative</Text>
      <View style={stylesheet.buttonbox}>
        <FlatList
          style={{ paddingTop: 200 }}
          data={[
            { key: "Sad" },
            { key: "Irritated" },
            { key: "Stressed" },
            { key: "Frustrated" },
            { key: "Lonely" },
            { key: "Other:" },
          ]}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={stylesheet.buttonContainer}>
              <Text style={stylesheet.button}> {item.key} </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        ></FlatList>
      </View>
    </View>
    // </View>
  );
}

const stylesheet = StyleSheet.create({
  buttonbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "relative",
    flex: 1,
    borderStyle: "solid",
    backgroundColor: "rgba(50, 47, 53, 1)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    alignItems: "center",
    columnGap: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(45, 45, 42, 1)",
    borderRadius: 12,
  },
  button: {
    position: "relative",
    color: "rgba(245, 245, 245, 1)",
    fontSize: 32,
    fontWeight: "regular",
    fontFamily: "Arial",
  },
  journal: {
    position: "absolute",
    top: 64,
    flex: 1,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 48,
    fontWeight: "semibold",
    fontFamily: "Arial",
    paddingTop: 45,
    padding: 16,
  },
  arrow_back: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 0,
    marginTop: 45,
    marginLeft: 16,
  },
});
