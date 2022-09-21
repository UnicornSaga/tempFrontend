import { BACKEND_URL } from '../config';
import axios from "axios";

export const getMessage = async () => {
  // const response = await fetch(BACKEND_URL);
  const message = await axios({
    method: "GET",
    url: `${BACKEND_URL}`,
  })
    .then((res) => {
      const d = res.data;
      return d;
    })
    .catch((error) => {
      console.error(error);
    })

  if (message) {
    return message;
  }

  return Promise.reject('Failed to get message from backend');
};
