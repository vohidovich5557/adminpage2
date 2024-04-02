import React, { useState } from "react";
import { usePostCategory } from "./service/mutation/usePostCategory";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { CatgoryInput2 } from "../../components/cards";

export const CategoryInput = () => {
  const { mutate, isPending } = usePostCategory();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Товар(ы) был успешно добавлен")
        navigate("/app/category", { replace: true });
      },
    });
  };
  return <CatgoryInput2 submit={submit} />;
};
