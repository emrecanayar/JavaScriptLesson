import { Photo } from "./photo";
import fetch from "node-fetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPhoto = (): Promise<Photo> => {
  const data = fetch(`${BASE_URL}/photos/1`)
    .then((response) => response.json())
    .then((photoData) => photoData as Photo);

  return data;
};

var result = getPhoto();
console.log(result);
