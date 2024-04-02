import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["get-product"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};
