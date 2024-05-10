import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDetails } from "../api/service";

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
          <View style={styles.imageButtonContainer}>
            <Button
              title="Go to image gallery"
              onPress={() => {
                navigation.navigate("ImageGallery", {
                  sprites: data?.sprites,
                  name: data.name,
                });
              }}
            />
          </View>
          <Text style={styles.name}>{`Name: ${data.name}`}</Text>
          <View style={styles.abilitiesView}>
            <Text style={styles.abilities}>Abilities</Text>
            <View style={styles.abilitiesChildView}>
              {data?.abilities &&
                data.abilities.map((abilities) => {
                  return (
                    <Text
                      key={abilities.ability.name}
                      style={styles.abilityText}
                    >
                      {abilities.ability.name}
                    </Text>
                  );
                })}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { alignItems: "center", marginVertical: 40 },
  imageButtonContainer: {
    marginVertical: 10,
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
  abilitiesView: {
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    marginVertical: 10,
  },
  abilitiesChildView: {
    flexDirection: "row",
    gap: 20,
  },
});

export default Details;
