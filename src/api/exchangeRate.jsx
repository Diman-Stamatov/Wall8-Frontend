import axios from "axios";

export async function getExchangeRate({ currency }) {
  await axios
    .get(
      `https://v6.exchangerate-api.com/v6/6288a44edd99f941e5c45fa3/latest/${currency}`
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
