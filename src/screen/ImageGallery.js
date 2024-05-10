import { View, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getObjectValues } from "../shared/helper";
import { FlatList } from "react-native-gesture-handler";
const ImageGallery = ({ navigation, route }) => {
  const { sprites, name } = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    navigation.setOptions({ title: `${name} images` });
    const imageArr = getObjectValues(sprites);
    setData(imageArr);
  }, []);

  return (
    <View>
      {data.length > 0 && (
        <FlatList
          data={data}
          numColumns={4}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <Image
                key={item}
                style={styles.image}
                source={{
                  uri: item,
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageGallery;
