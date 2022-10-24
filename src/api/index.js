export const getAllCountries = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
