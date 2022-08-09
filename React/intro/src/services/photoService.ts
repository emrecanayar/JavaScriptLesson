import { Photo } from "../models/photo";

class PhotoService {
  public getPhoto = async (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = await fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };


  /* Örnek end-pointler*/

  public getAll = async (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = await fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };

  public add = async (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = await fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };

  public update = async (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = await fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };

  public delete = async (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = await fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };

}
export default new PhotoService();
