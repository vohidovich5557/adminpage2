import React from "react";
import { useNavigate, useParams } from "react-router";
import useGetSingleData from "./service/query/useGetSingleData";
import { useEditData } from "./service/mutation/useEditData";
import { queryclient } from "../../config/store";
import { CatgoryInput2 } from "../../components/cards";
import { toast } from "react-toastify";

export const CategoryEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate, isPending } = useEditData(id);
  const { data, isLoading } = useGetSingleData(id);
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Товар(ы) был успешно редактировать")
        queryclient.invalidateQueries({ queryKey: ["getedit", id] });
        navigate("/app/category");
      },
    });
  };
  return isLoading ? (
    <h2>Loading..</h2>
  ) : (
    <CatgoryInput2 submit={submit} initialValue={data} />
  );
};
