import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting Today Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: "#F0DFAD"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});
