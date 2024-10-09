import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  Mood: undefined;
  _moodstack: undefined;
  FinalMood: { emotion: string };
  Positive: undefined;
  Neutral: undefined;
  Negative: undefined;
};
type MoodScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type FinalMoodRouteProp = RouteProp<{ params: { emotion: string } }, "params">;

const FinalMood: React.FC = () => {
  const route = useRoute<FinalMoodRouteProp>();
  const { emotion } = route.params || {};
  const navigation = useNavigation<MoodScreenNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <TouchableOpacity
        style={styles.arrow_back}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.todaysMoodSad}>Today’s Mood:</Text>
      <Text style={styles.emotion}>{emotion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todaysMoodSad: {
    position: "absolute",
    flexShrink: 0,
    top: 115,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Arial",
    fontSize: 48,
    fontWeight: "semibold",
  },
  emotion: {
    fontFamily: "Arial",
    fontSize: 48,
    fontWeight: "semibold",
    bottom: 100,
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

export default FinalMood;
