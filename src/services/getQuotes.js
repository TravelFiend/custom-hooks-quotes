export default () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/163')
    .then(res => res.json());
};
