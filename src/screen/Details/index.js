import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getDetails } from "../../api/service";

const Details = ({ navigation, route }) => {
  const { name, url } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: name });
    setLoading(true);
    getDetails(url)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  return <View>{data && <Text>{data.name}</Text>}</View>;
};

const styles = StyleSheet.create({});

export default Details;
