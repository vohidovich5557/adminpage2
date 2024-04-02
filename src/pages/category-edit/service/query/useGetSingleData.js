import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

const useGetSingleData = (id) => {
  return useQuery({
    queryKey: ["getedit", id],
    queryFn: () => request.get(`/category/${id}`).then((res) => res.data),
  });
};

export default useGetSingleData;
