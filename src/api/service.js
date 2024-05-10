import pokemonApi from "./pokemonApi";
import axios from "axios";
export const getPokemonList = () =>
  new Promise((resolve, reject) => {
    pokemonApi
      .get()
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

export const getDetails = (url) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
