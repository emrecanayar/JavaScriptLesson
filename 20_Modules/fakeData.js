export const fakeUsers = [
  {
    id: 1,
    name: "Emre Can Ayar",
    age: 29,
  },
  {
    id: 2,
    name: "Merve Doğan",
    age: 25,
  },
  {
    id: 3,
    name: "Miran Ayar",
    age: 1,
  },
];

export const addUser = (name, age) => {
  fakeUsers.push({
    id: fakeUsers.length + 1,
    name,
    age,
  });

  return fakeUsers;
};
