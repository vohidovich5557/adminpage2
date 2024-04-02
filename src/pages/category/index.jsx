import React, { useState } from "react";
import { useGetData } from "../category/service/query/useGetData";
import { BannerIcon } from "../../assets/home-icons/banner-img";
import { Link } from "react-router-dom";
import seachIcon from "../../assets/home-icons/search-icon.svg";
import { TrashIcon } from "../../assets/home-icons/trash-icon";
import { EditIcon } from "../../assets/home-icons/edit-icon";
import { useDeletData } from "./service/mutation/useDeletData";
import { queryclient } from "../../config/store";
import { toast } from "react-toastify";
import { Input } from "../../components/ui/input";

export const Category = () => {
  const [input, setInput] = useState("");
  const { data, isLoading } = useGetData(input);
  const { mutate, isPending } = useDeletData();

  const changeInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <>
      <div
        className={`w-[1179px] h-auto bg-white rounded-[12px] ml-[60px] mt-[40px] mr-[48px] ${
          data?.length > 0 ? "mb-[30px]" : "mb-[110px]"
        } `}
      >
        {data?.length > 0 ? (
          <>
            <div className="pt-[30px] h-[587px] flex flex-col  pb-[89px] pl-[24px] pr-[25px]">
              <div className=" w-full h-[] flex items-center justify-between">
                <h2 className="text-md font-extrabold pb-[10px] hover:border-b-2 hover:border-blur">
                  Все товары ({data.length})
                </h2>
                <Input
                  type="text"
                  value={input}
                  onChange={changeInput}
                  variant="primary250"
                  placeholder="Поиск"
                  icon={seachIcon}
                />
              </div>
              <div className="w-full h-[1px] border border-grayer"></div>
              <div className="mt-[39px] mb-[40px] h-[336px] ml-[40px] mr-[40px]">
                <div className="flex items-center mb-[20px] ">
                  <div className="w-[339px]  flex items-center gap-[24px] h-[24px]">
                    <input
                      type="checkbox"
                      className="w-[24px] h-[24px] bg-blur rounded-[8px]"
                    />
                    <h2 className="text-sm font-extrabold text-gray-400">
                      Наименование
                    </h2>
                  </div>
                  <div className="w-[210px] flex items-center h-[24px] ">
                    <h2 className="text-sm font-extrabold text-gray-400">
                      Артикул
                    </h2>
                  </div>
                  <div className="w-[162px] h-[24px] flex items-center">
                    <h2 className="text-sm font-extrabold text-gray-400">
                      категория
                    </h2>
                  </div>
                  <div className="w-[161px] h-[24px] flex items-center">
                    <h2 className="text-sm font-extrabold text-gray-400">
                      Фотографии
                    </h2>
                  </div>
                </div>
                {data?.map((item) => (
                  <>
                    <div className="flex flex-col">
                      <div className="w-[full] h-[2px] mb-[24px] bg-grayer"></div>
                      <div className="flex items-center">
                        <div className="w-[339px]  flex items-center gap-[24px] h-[24px]">
                          <input
                            type="checkbox"
                            className="w-[24px] h-[24px] rounded-[8px] bg-blur"
                          />
                          <h2 className="text-sm font-extrabold">
                            {item.Название}
                          </h2>
                        </div>
                        <div className="w-[210px]  ">
                          <p className="text-sm font-medium">
                            {item.Артикулпроизводителя}
                          </p>
                        </div>
                        <Link
                          to={`/app/category/product/${item.id}/${item.Бренд}`}
                        >
                          <div className="w-[162px] ">
                            <h2 className="text-sm font-medium">
                              {item.Бренд}
                            </h2>
                          </div>
                        </Link>
                        <div className="w-[161px]  ">
                          <img
                            src={item.image}
                            alt="img"
                            className="w-[94px] h-[50px] rounded-[6px]"
                          />
                        </div>
                        <div className="w-[200px] flex items-center gap-[10px] justify-end">
                          <div className="w-[32px] h-[32px] bg-whiter rounded-[6px] flex items-center justify-center">
                            <Link to={`/app/category/edit/${item.id}`}>
                              <button>
                                <TrashIcon />
                              </button>
                            </Link>
                          </div>
                          <div className="w-[32px] h-[32px] bg-whiter rounded-[6px] flex items-center justify-center">
                            <button
                              onClick={() =>
                                mutate(item.id, {
                                  onSuccess: () => {
                                    toast.success("Товар(ы) был успешно удален")
                                    queryclient.invalidateQueries({
                                      queryKey: ["get-data"],
                                    });
                                  },
                                })
                              }
                            >
                              <EditIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="pt-[30px] flex flex-col items-center pb-[89px] pl-[24px] pr-[25px]">
              <h2 className="w-[1130px] font-extrabold text-2xl mb-[64px] h-[16px] text-center">
                Вы пока не создали ни одного категория
              </h2>
              <div className="w-[313px] mb-[66px] h-[235px]">
                <BannerIcon />
              </div>
              <Link to="/app/category/input">
                <button className="w-[240px] h-[48px] text-center bg-greener rounded-[6px] text-white text-md font-extrabold">
                  Создать первый категория
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      {data?.length > 0 ? (
        <>
          <div>
            <Link to="/app/category/input">
              <button className="w-[154px] ml-[60px] mb-[10px] h-[40px] text-center bg-greener text-sm font-extrabold text-white rounded-[6px]">
                Новый товар
              </button>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
