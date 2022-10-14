import axios from "axios";

const AxiosServer = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {'X-Custom-Header': 'foobar'}
})
const AxiosApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {'X-Custom-Header': 'foobar'}
})
export {AxiosServer , AxiosApi}