import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { usePostData } from "./service/mutation/usePostData";
import userIcon from "../../assets/login-page/user-icon.svg";
import LockIcon from "../../assets/login-page/lock-icon.svg";
import { Input } from "../../components/ui/input";
import { CartIcon } from "../../assets/login-page/cart-icon";
import Cookies from "js-cookie";

const schema = z.object({
  email: z.string().min(15, "less").max(35, "make this less than 30"),
  password: z.string().min(5, "less passcode").max(15, "make it less than 15"),
});

export const Login = () => {
  const { mutate, isPending } = usePostData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        Cookies.set("user-token", res.accessToken);
        navigate("/app", { replace: true });
      },
    });
  };
  return (
    <>
      <div className="w-full bg-blur h-[100vh]">
        <div className="container  flex flex-col items-center justify-center">
          <div className="w-[300px] translate-y-[100px] h-[398px] flex flex-col items-center justify-center">
            <div className="w-[119px] h-[97px] flex items-center justify-center mb-[71px]">
              <CartIcon />
            </div>
            <form
              className="flex flex-col gap-[16px]"
              onSubmit={handleSubmit(submit)}
            >
              <Input
                variant="smooth"
                type="email"
                icon={userIcon}
                placeholder="Email"
                helperText={errors?.email?.message}
                {...register("email", { required: true })}
              />
              <Input
                variant="smooth"
                type="password"
                icon={LockIcon}
                helperText={errors?.password?.message}
                placeholder="password"
                {...register("password", { required: true })}
              />
              <button className="w-full h-[45px] flex items-center justify-center text-blur text-md font-medium bg-white rounded-[4px]">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
