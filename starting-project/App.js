import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummytext}>Hello World!!!!</Text>
      </View>
      <Text style={styles.dummytext}>Another text</Text>
      <Button title="TAP" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummytext: {
    margin: 63,
    borderWidth: 2,
    borderColor: "red",
    padding: 15,
  },
});
