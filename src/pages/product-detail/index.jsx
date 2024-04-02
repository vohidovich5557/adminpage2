import React from "react";
import { usePostProduct } from "./service/mutation/usePostProduct";
import { useGetData } from "../category/service/query/useGetData";
import { ProductDetail2 } from "../../components/product-card";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const ProductDetail = () => {
  const { data, isLoading } = useGetData();
  const { mutate, isPending } = usePostProduct();
  const navigate = useNavigate();
  console.log(data);

  const submit = (data) => {
    const categoryId = data.категория.split(",")[0];
    const categoryBrand = data.категория.split(",")[1];
    const { category, ...all } = data;
    mutate(
      { ...all, categoryId, categoryBrand },
      {
        onSuccess: () => {
          toast.success("Товар был успешно добавлен")
          navigate("/app/product", { replace: true });
        },
      }
    );
  };
  return <ProductDetail2 submit={submit} category={data} />;
};
