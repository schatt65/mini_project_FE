import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const res = Axios.get("/");
res.then((c) => console.log(c));
