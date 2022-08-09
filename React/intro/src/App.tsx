import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import photoService from "./services/photoService";
import "./App.css";
import { Photo } from "./models/photo";

function App() {
  const [photo, setPhoto] = useState<Promise<Photo>>();

  function getPhoto() {
    var data = photoService.getPhoto();
    setPhoto(data);
  }

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos/1")
    //   .then((response) => response.json())
    //   .then((photoData) => setPhoto(photoData))
    //   .catch((error) => setError(error));
    getPhoto();
  }, []);

  console.log(photo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
