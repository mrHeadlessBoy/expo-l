import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    marginVertical: 50,
    marginHorizontal: 10,
  },
  header: { fontSize: 30, fontWeight: "bold", color: "red" },
  content: {
    backgroundColor: "orange",
    padding: 30,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
