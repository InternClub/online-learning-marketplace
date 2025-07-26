import axios from "axios";

const axioslogin = async (username, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', { username, password }, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   withCredentials: true,
    });
    console.log("Login successful:", response.data);
    localStorage.setItem('username', JSON.stringify(response.data.username));

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : "Login failed");
  }
}
const axioslogout = () => {
    localStorage.removeItem("token");
    const response = axios.post("https://dummyjson.com/auth/logout");
   return response.data;
}


export { axioslogin, axioslogout };