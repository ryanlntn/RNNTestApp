import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

export class Calendar extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "Calendar",
        },
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>I'm the calendar screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333D44",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
})
