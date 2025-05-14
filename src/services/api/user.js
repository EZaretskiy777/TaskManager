import axios from "axios";

const API_URL_LOGIN = "http://localhost:3001/login";
const API_URL_REGISTER = "http://localhost:3001/register";

export async function signIn({ email, password }) {
  try {
    const response = await axios.post(
      API_URL_LOGIN,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      user: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Login failed");
  }
}

export async function signUp({ name, email, password }) {
  try {
    const response = await axios.post(
      API_URL_REGISTER,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      user: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Registration failed");
  }
}
