import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostSingleProduct = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.put(`/products/${id}`, data).then((res) => res.data),
  });
};
