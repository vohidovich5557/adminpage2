import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ["getproducts", id],
    queryFn: () => request.get(`/products/${id}`).then((res) => res.data),
  });
};
