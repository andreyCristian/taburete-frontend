import axios from 'axios';

export default class ProductApi {
  constructor() {
    this.endpoint = 'http://192.168.0.11:3000/products/';
  }

  getAll() {
    return axios.get(this.endpoint);
  }
}
