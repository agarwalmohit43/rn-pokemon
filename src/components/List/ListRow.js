import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ListRow = ({ name, url }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Details", { name, url });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListRow;
