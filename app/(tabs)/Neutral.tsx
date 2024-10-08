//import {useStyles, createStyleSheet} from 'styles';
import { Text, View, FlatList } from "react-native";
import { StyleSheet, Image, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
//import {ArrowBack} from 'components/common/base/arrow-back';

export default function Neutral() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(251, 225, 202, 1)"
      }}
    >
      <Text style={stylesheet.journal}>Neutral</Text>
      <View style={stylesheet.buttonbox}>
        <FlatList
          style={{ paddingTop: 200 }}
          data={[
            { key: "Calm" },
            { key: "Tired" },
            { key: "Restless" },
            { key: "Bored" },
            { key: "Content" },
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
});

