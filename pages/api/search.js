import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/search",
    params: { title: req.query.title, page: "1" },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": '67071b4c7amshc54e8d5891cb651p15ee29jsna523c22c0d15',
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}
