import fetchData from "../../backend";


const loginUser = async (username, password, isFamily ) => {
  return fetchData('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'text/plain',
    },
    body: JSON.stringify({
      'username': `${username}`,
      "password": `${password}`,
      "isFamily": `${isFamily}`
    }),
  });
};

export default loginUser;