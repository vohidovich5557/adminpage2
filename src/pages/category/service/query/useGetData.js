import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetData = (value) => {
  return useQuery({
    queryKey: ["get-data", value],
    queryFn: () =>
      request
        .get("/category", { params: { Бренд_like: value } })
        .then((res) => res.data),
  });
};
