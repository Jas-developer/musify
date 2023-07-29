export const url =
  "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c425aafb44mshdd077788820edfap1368e4jsnb1c6c2f3ee98",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
