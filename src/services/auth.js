import fetchData from "../../backend";


const loginUser = async (username, password) => {
  return fetchData.post('/login', { username, password });
};

export default loginUser;