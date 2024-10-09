import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    mood: undefined;
    finalMood: { emotion: string };
  };
  
type FinalMoodRouteProp = RouteProp<{ params: { emotion: string } }, "params">;
type MoodScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const FinalMood: React.FC = () => {
    const navigation = useNavigation<MoodScreenNavigationProp>();

  const route = useRoute<FinalMoodRouteProp>(); 

  const { emotion } = route.params || {};
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFF4",
      }}
    >
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
    bottom: 100
  }
});

export default FinalMood;
