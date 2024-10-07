import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Journal() {
  const [text, setText] = useState("");
  const [inputHeight, setInputHeight] = useState(40);
  return (
    <View style={[styles.iPhone16Plus5Container, { height: inputHeight }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.rectangle8}>
          <TextInput
            style={styles.typing}
            placeholder="Type here..."
            multiline={true}
            onContentSizeChange={(event) => {
              setInputHeight(event.nativeEvent.contentSize.height);
            }}
          >
            {/* onChangeText={(input) => setText(input)} */}
            {/* value={text}> */}
          </TextInput>
        </View>
      </TouchableWithoutFeedback>

      {/* <Text style={styles.displayText}>Your Type</Text> */}

      {/* Visualwind:: can be replaced with <Arrow_back  /> */}
      <View style={styles.arrow_back}>
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
      <Text style={styles.journal}>{`Journal`}</Text>

      {/* Visualwind:: can be replaced with <Group4  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  iPhone16Plus5Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(243, 236, 255, 1)",
  },
  rectangle8: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexShrink: 0,
    top: 98,
    width: 361,
    height: 707,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 24,
    padding: 12,
  },
  arrow_back: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    height: 24,
    left: 21,
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
  journal: {
    position: "absolute",
    flexShrink: 0,
    top: 28,
    left: 138,
    width: 154,
    height: 65,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 48,
    fontWeight: "400",
  },
  typing: {
    width: 337,
    flexGrow: 1,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 16,
  },
  displayText: {
    marginTop: 20,
    fontSize: 16,
  },
});
