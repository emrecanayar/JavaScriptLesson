import { Photo } from "../models/photo";

class PhotoService {
  public getPhoto = (): Promise<Photo> => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const data = fetch(`${BASE_URL}/photos/1`)
      .then((response) => response.json())
      .then((photoData) => photoData as Photo);

    return data;
  };
}
export default new PhotoService();
