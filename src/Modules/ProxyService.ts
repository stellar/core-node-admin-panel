import axios, { AxiosResponse } from "axios";
export async function get(path: string): Promise<AxiosResponse> {
  if (path[0] === "/") path = path.slice(1);
  return axios.get(
    `http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/${path}`
  );
}

export default {
  get
};
