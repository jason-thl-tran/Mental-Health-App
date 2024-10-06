//import {useStyles, createStyleSheet} from 'styles';
import { Text, View, FlatList } from "react-native";
import { StyleSheet, Image, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
//import {ArrowBack} from 'components/common/base/arrow-back';

export default function Positive() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(212, 237, 205, 1)"
      }}
    >
      <Text style={stylesheet.journal}>{`Positive`}</Text>
      {/* <View style={stylesheet.root}> */}
      <View style={stylesheet.buttonbox}>
        <FlatList
          style={{ paddingTop: 150 }}
          data={[
            { key: "Happy" },
            { key: "Energetic" },
            { key: "Relaxed" },
            { key: "Excited" },
            { key: "Inspired" },
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
  root: {
    width: 393,
    height: 852,
    paddingVertical: 16,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  rectangle10: {
    width: 393,
    height: 111,
    flexShrink: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0, 0, 0, 0.20000000298023224)",
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonContainer: {
    //position: "relative",
    flexShrink: 0,
    height: 67,
    width: 198,
    borderStyle: "solid",
    backgroundColor: "rgba(50, 47, 53, 1)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(45, 45, 42, 1)",
    borderRadius: 12,
  },
  button: {
    position: "relative",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(245, 245, 245, 1)",
    //fontFamily: "Nunito Sans",
    fontSize: 32,
    fontWeight: 400,
  },
  journal: {
    position: "absolute",
    flexShrink: 0,
    top: 28,
    left: 138,
    width:"auto",
    height: 65,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 48,
    fontWeight: 400,
  },
});
