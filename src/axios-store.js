import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tokuma-b8f4d.firebaseio.com/'
})

export default instance