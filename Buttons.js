import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const Buttons = (props) => {
  const itemsLeft = props.todos.filter((todo) => todo.status === "active").length;
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.row}>
        <TouchableHighlight
          style={props.status === "all" ? styles.selected : styles.button}
          onPress={props.handleChangeStatus.bind(null, "all")}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={props.status === "active" ? styles.selected : styles.button}
          onPress={props.handleChangeStatus.bind(null, "active")}
        >
          <Text style={styles.buttonText}>Active</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={props.status === "completed" ? styles.selected : styles.button}
          onPress={props.handleChangeStatus.bind(null, "completed")}
        >
          <Text style={styles.buttonText}>Completed</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <View>
          {itemsLeft ? (
            <Text style={styles.smallText}>
              {`${itemsLeft} ${itemsLeft > 1 ? "items" : "item"} left`}
            </Text>
          ) : null}
        </View>
        <View>
          {props.todos.length > itemsLeft ? (
            <TouchableHighlight
              style={styles.clearCompletedButton}
              onPress={props.handleClearCompleted}
            >
              <Text style={styles.buttonText}>Clear Completed</Text>
            </TouchableHighlight>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 20,
    borderColor: "#C3B1E1",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#7851A9",// Purple color for normal buttons
    borderRadius : 12,
    

  },
  buttonText: {
    fontSize: 16,
    color: "#fff", // White text color for normal buttons
  },
  selected: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(175, 47, 47, 0.2)",
    backgroundColor: "#8F00FF",// violet color for selected button
    borderRadius : 12,
  },
  smallText: {
    fontSize: 15,
    color: "#000", // Dark gray text color for small text
  },
  clearCompletedButton: {
    paddingVertical: 10,
    backgroundColor: "#4CAF50",// Darker green color for clear completed button
    borderRadius:12,
  },
});

export default Buttons;

