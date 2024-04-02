import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostCategory = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/category", data).then((res) => res.data),
  });
};
