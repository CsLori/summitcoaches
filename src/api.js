import axios from 'axios';

export const fetchUsers = () => {
  return axios
    .get(
      'https://summitcoaches-98d9a.firebaseio.com/users.json'
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => data);
};
export const fetchUser = id => {
  return axios
    .get(
      `https://summitcoaches-98d9a.firebaseio.com/users/${id}.json`
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => data);
};

export const createUser = user => {
  return axios
    .post(
      'https://summitcoaches-98d9a.firebaseio.com/users.json',
      user
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => data);
};

export const createQuote = quote => {
  return axios
    .post(
      'https://summitcoaches-98d9a.firebaseio.com/quotes.json',
      quote
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => console.log(data));
};
export const getQuotes = () => {
  return axios
    .get(
      'https://summitcoaches-98d9a.firebaseio.com/quotes.json'

      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => data);
};
