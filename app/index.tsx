import { theme } from "../theme";
import { StyleSheet, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href="/counter"
        style={{ textAlign: "center", marginBottom: 20, fontSize: 18 }}
      >
        Go to Counter
      </Link>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Starbucks" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
