import axios from 'axios';

const ApiService = {
  init() {
    const baseURL = 'https://4a2fb06a.ngrok.io';
    axios.defaults.baseURL = baseURL;
  },
  // token
  setHeader() {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
  */
  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
