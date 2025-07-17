// apiService.js

const BASE_URL = 'http://ipoliceapp.azurewebsites.net';

const fetchData = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  console.log(`Fetching from: ${url}`);

  // Prepare headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const token = localStorage.getItem("authToken");

  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: headers, 
    });

    if (!response.ok) {
      
      const errorBody = await response.text();
      let errorMessage = `HTTP error! Status: ${response.status} - ${response.statusText}`;
      try {
        const jsonError = JSON.parse(errorBody);
        if (jsonError.message) {
          errorMessage += ` - ${jsonError.message}`;
        } else {
          errorMessage += ` - ${errorBody}`;
        }
      } catch (e) {
        errorMessage += ` - ${errorBody}`;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export default fetchData;
