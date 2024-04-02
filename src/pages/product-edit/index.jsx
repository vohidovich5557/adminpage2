import React from "react";
import { useGetSingleProduct } from "./service/query/useGetSingleProduct";
import { ProductDetail2 } from "../../components/product-card";
import { usePostSingleProduct } from "./service/mutation/usePostSingleProduct";
import { queryclient } from "../../config/store";
import { useGetData } from "../category/service/query/useGetData";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

export const ProductEdit = () => {
  const navigate = useNavigate();
  const { data: data2 } = useGetData();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProduct(id);
  const { mutate, isPending } = usePostSingleProduct(id);
  const submit = (data) => {
    const categoryId = data.категория.split(",")[0];
    const categoryBrand = data.категория.split(",")[1];
    const { category, ...all } = data;
    mutate(
      { ...all, categoryId, categoryBrand },
      {
        onSuccess: () => {
          toast.success("Товар(ы) был успешно редактировать");
          queryclient.invalidateQueries({ queryKey: ["getproducts", id] });
          navigate("/app/product");
        },
      }
    );
  };
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ProductDetail2 submit={submit} initialValue={data} category={data2} />
  );
};
