import axios from 'axios';

export const fetchData = () => {
  return axios
    .get(
      'https://summitcoaches-98d9a.firebaseio.com/users.json'
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => console.log(data, 'GET'));
};

export const createUser = user => {
  return axios
    .post(
      'https://summitcoaches-98d9a.firebaseio.com/users.json',
      { user }
      // , {
      //   name: 'Jockey'
      // }
    )
    .then(({ data }) => data);
};
