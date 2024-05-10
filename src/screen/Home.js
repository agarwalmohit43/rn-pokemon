import { View, Text, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonList } from "../api/service";
import List from "./List";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = () => {
    setLoading(true);
    getPokemonList()
      .then((res) => {
        setData(res?.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert("Something went wrong");
      });
  };

  useEffect(() => {
    fetch();
  }, []);
  if (!data) {
    return null;
  }
  return (
    <View>
      {loading ? <ActivityIndicator size={"large"} /> : <List data={data} />}
    </View>
  );
};

export default Home;
