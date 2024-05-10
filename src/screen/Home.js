import { View, Text, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonList } from "../api/service";
const Home = () => {
  const [data, setData] = useState(null);
  const [laoding, setLaoding] = useState(false);
  useEffect(() => {
    setLaoding(true);
    getPokemonList()
      .then((res) => {
        setData(res);
        setLaoding(false);
      })
      .catch(() => {
        setLaoding(false);
        Alert.alert("Something went wrong");
      });
  }, []);
  if (!data) {
    return null;
  }
  return (
    <View>
      {laoding ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Text>{data?.count}</Text>
      )}
    </View>
  );
};

export default Home;
