import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetOnlyProduct = (params) => {
  return useQuery({
    queryKey: ["getoonly", params],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId_like: params.id,
            categoryBrand_like: params.Бренд,
          },
        })
        .then((res) => res.data),
  });
};
