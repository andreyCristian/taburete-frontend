import axios from 'axios';

export default class ProviderApi {
  constructor() {
    this.endpoint = 'http://localhost:3000/providers';
  }

  getAll() {
    return axios.get(this.endpoint);
  }

  get(id) {
    return axios.get(`${this.endpoint}/${id}`);
  }

  post(payload) {
    return axios.post(this.endpoint, payload);
  }

  put(id, payload) {
    return axios.put(`${this.endpoint}/${id}`, payload);
  }
}
