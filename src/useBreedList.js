import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    console.log(`breed call`);

    if (!animal) {
      // if no animal is selected in the select form in searchParams
      setBreedList([]);
    } else if (localCache[animal]) {
      // if it exists already in localCache
      setBreedList(localCache[animal]);
    } else {
      // if it does'nt exist in localCache
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
