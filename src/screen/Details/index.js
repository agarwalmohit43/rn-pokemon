import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getDetails } from "../../api/service";

const Details = ({ navigation, route }) => {
  const { name, url } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => {
    setLoading(true);
    getDetails(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    navigation.setOptions({ title: name });
    fetch();
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <View style={styles.conatainer}>
      {data && (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: data.sprites.front_default,
              }}
            />
          </View>
          <Text>{`Name: ${data.name}`}</Text>
          <View>
            <Text style={styles.abilities}>Abilities</Text>
            {data?.abilities &&
              data.abilities.map((abilities) => {
                return (
                  <Text key={abilities.ability.name} style={styles.abilityText}>
                    {abilities.ability.name}
                  </Text>
                );
              })}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { alignItems: "center", borderWidth: 1 },
  imageContainer: {
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  abilities: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 2,
  },
  abilityText: {
    color: "red",
  },
});

export default Details;
