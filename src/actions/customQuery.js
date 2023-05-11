import { useQuery, useMutation } from "react-query";
import { requestInstance } from "./axiosConfig";

export function useMyzerQuery(key, fun, url) {
  return useQuery(key, () => requestInstance.get(url).then((response) => response.data), {
    onSuccess: () => {
      console.log("success");
    }
  });
}

export function useMyzerMutation(key, fun, url, method, data) {
  return useMutation((requestData) => {
    if (method === "post") {
      return requestInstance.post(url, requestData).then((response) => response.data);
    } else if (method === "put") {
      return requestInstance.put(url, requestData).then((response) => response.data);
    } else if (method === "delete") {
      return requestInstance.delete(url).then((response) => response.data);
    }
  });
}
