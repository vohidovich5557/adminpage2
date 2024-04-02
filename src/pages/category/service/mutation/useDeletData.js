import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeletData = () => {
  return useMutation({
    mutationFn: (id) =>
      request.delete(`/category/${id}`).then((res) => res.data),
  });
};
