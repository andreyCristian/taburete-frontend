import axios from 'axios';

export default class UnidTypeApi {
  constructor() {
    this.endpoint = 'http://localhost:3000/units';
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
