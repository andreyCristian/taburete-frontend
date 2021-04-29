import axios from 'axios';

export default class ProductXProviderApi {
  constructor() {
    this.endpoint = 'http://localhost:3000/cost_products';
  }

  getAll(id) {
    return axios.get(`${this.endpoint}?product_id=${id}`);
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

  delete(id) {
    return axios.delete(`${this.endpoint}/${id}`);
  }
}
