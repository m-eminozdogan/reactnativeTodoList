import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Yapılacaklar</Text>
        <View style={styles.items}>
          <Task taskTitle="yapılacak iş 1 bu"></Task>
          <Task taskTitle="yapılacak iş 2 buyapılacak iş 2 buyapılacak iş 2 buyapılacak iş 2 buyapılacak iş 2 buyapılacak iş 2 buyapılacak iş 2 bu"></Task>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
