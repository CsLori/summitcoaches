import axios from 'axios';

export const fetchData = () => {
  return axios
    .get('https://summitcoaches-98d9a.firebaseio.com/users.json'
    // , {
    //   name: 'Jockey'
    // }
    )
    .then(({ data }) => console.log(data));
};
