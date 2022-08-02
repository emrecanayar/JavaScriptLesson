//https://jsonplaceholder.typicode.com/users

import fetch from "node-fetch";

//JavaScript üzerinden bir API ye istek atmak istediğimizde node-fetch npm paketini kullanabiliriz. Şimdi fake bir API ye istek atarak bunu örneklendireceğiz.

const BASE_URL = "https://jsonplaceholder.typicode.com";

// /users alanına istek atarak veri çekmek istiyorum.

let user = {};

const userPromise = fetch(`${BASE_URL}/users/1`)
  .then((res) => res.json())
  .then((userData) => {
    user = userData;
    console.log(user);
  })
  .catch((err) => console.log("CATCH_ERROR=> ", err));
