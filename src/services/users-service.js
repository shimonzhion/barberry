const usersApi =
  "https://my-json-server.typicode.com/Jeck99/fake-users-api/users ";
export const userService = async () => {
  try {
    return await fetch(usersApi).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
