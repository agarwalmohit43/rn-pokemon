import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import ListRow from "./ListRow";

const List = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <ListRow {...item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

export default List;
