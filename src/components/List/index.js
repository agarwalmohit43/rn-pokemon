import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import ListRow from "./ListRow";

const renderItem = (renderItem) => {
  //{"index": 0, "item": {"name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/"}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}
  // console.log(renderItem);
  return <ListRow {...renderItem.item} />;
};

const List = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
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
