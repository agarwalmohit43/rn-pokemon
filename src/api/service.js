import pokemonApi from "./pokemonApi";

export const getPokemonList = () =>
  new Promise((resolve, reject) => {
    pokemonApi
      .get()
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
