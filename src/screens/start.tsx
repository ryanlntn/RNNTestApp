import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

export default class App extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "Start Workout",
        },
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Start your workout!</Text>
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
