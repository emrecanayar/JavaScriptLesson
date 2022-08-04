import fetch from 'node-fetch'

const BASE_URL = "https://jsonplaceholder.typicode.com";

// const fetchUsers = async () => {

//     const response = await fetch(`${BASE_URL}/users`);
//     const usersData = await response.json();

//     return usersData;
// }


// const users = await fetchUsers();

// console.log(users);


const fetchUsers = async () => {

    try {
        const response = await fetch(`${BASE_URL}/users`);
        const usersData = await response.json();
        return usersData;
    } catch (error) {
        console.log(error);
        return [];
    }
}



const users = await fetchUsers();

console.log(users);

