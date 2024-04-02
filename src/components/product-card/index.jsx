import React from "react";
import { Input2 } from "../ui/input2";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  Название: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3 ")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Бренд: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Артикулпроизводителя: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Описание: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Вессупаковкойграмм: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Длинаупаковкимм: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Ширинаупаковкимм: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Высотаупаковкимм: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Артикул: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Штрихкод: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Цена: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 10"),
  Ценасоскидкой: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 30"),
  ЦенаOzonPremium: z
    .string()
    .min(3, "Размер файла в поле должен быть больше :3")
    .max(10, "Размер файла в поле должен быть равен : 30"),
  image: z.string(),
  категория: z.string(),
});

export const ProductDetail2 = ({ submit, initialValue, category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-[1179px] rounded-[12px] pt-[110px] pb-[42px] ml-[60px] mt-[40px] mr-[48px] mb-[100px]   bg-white ">
          <div className="mt-[30px] ml-[24px] mr-[25px] mb-[40px] border border-gray-300 pt-[40px] px-[49px] pb-[40px] rounded-[8px]">
            <div className="mb-[30px]">
              <Input2
                variant="primary764"
                label="Название *"
                helperText={errors?.Название?.message}
                defaultValue={initialValue?.Название}
                {...register("Название", { required: true })}
              />
            </div>
            <div className="flex items-center gap-[40px] mb-[51px]">
              <Input2
                variant="primary362"
                label="Бренд *"
                helperText={errors?.Бренд?.message}
                defaultValue={initialValue?.Бренд}
                {...register("Бренд", { required: true })}
              />
              <Input2
                variant="primary362"
                label="Артикул производителя *"
                helperText={errors?.Артикулпроизводителя?.message}
                defaultValue={initialValue?.Артикулпроизводителя}
                {...register("Артикулпроизводителя", { required: true })}
              />
            </div>
            <div className="flex items-center gap-[40px] mb-[30px]">
              <div className="flex flex-col items-start">
                <p className="text-md font-bold mb-[12px]">категория</p>
                <select
                  name="option"
                  type="text"
                  className="w-[362px] h-[44px] bg-grayer rounded-[8px] pl-[8px] outline-none"
                  {...register("категория", { required: true })}
                  defaultValue={initialValue?.категория}
                >
                  {category?.map((item) => (
                    <option
                      key={item.id}
                      defaultValue={initialValue?.категория}
                      value={`${item.id}, ${item.Бренд}`}
                    >
                      {item.Бренд}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-md font-bold mb-[12px]">
                  НДС <span className="text-red-600">*</span>
                </p>
                <div className="flex items-center gap-[24px]">
                  <div className="flex items-center gap-[12px]">
                    <input type="radio" value="10%" />
                    <label className="text-sm font-medium">10%</label>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <input type="radio" value="20%" />
                    <label className="text-sm font-medium">20%</label>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <input type="radio" value="30%" />
                    <label className="text-sm font-medium">30%</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mb-[34px]">
              <p className="text-md font-medium mb-[12px]">Описание *</p>
              <textarea
                className="w-[764px] h-[110px] rounded-[8px] bg-grayer outline-none pt-[20px] pl-[20px] pr-[20px] pb-[20px]"
                helperText={errors?.Описание?.message}
                defaultValue={initialValue?.Описание}
                {...register("Описание", { required: true })}
              />
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Вес с упаковкой, грамм"
                  helperText={errors?.Вессупаковкойграмм?.message}
                  defaultValue={initialValue?.Вессупаковкойграмм}
                  {...register("Вессупаковкойграмм", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Длина упаковки, мм"
                  helperText={errors?.Длинаупаковкимм?.message}
                  defaultValue={initialValue?.Длинаупаковкимм}
                  {...register("Длинаупаковкимм", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Ширина упаковки, мм"
                  helperText={errors?.Ширинаупаковкимм?.message}
                  defaultValue={initialValue?.Ширинаупаковкимм}
                  {...register("Ширинаупаковкимм", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Высота упаковки, мм"
                  helperText={errors?.Высотаупаковкимм?.message}
                  defaultValue={initialValue?.Высотаупаковкимм}
                  {...register("Высотаупаковкимм", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="ml-[24px] border border-gray-300 rounded-[8px] mr-[25px] mb-[42px] pl-[49px] pr-[40px] pt-[39px] pb-[50px]">
            <div className="w-[310px] h-[163px] flex items-center justify-center flex-col gap-[20px] mb-[30px]">
              <p className="text-md font-extrabold">введите URL изображения</p>
              <Input2
                variant="primary228"
                type="url"
                placeholder="введите URL изображения"
                defaultValue={initialValue?.image}
                helperText={errors?.image?.message}
                {...register("image", { required: true })}
              />
            </div>
            <div className="mb-[30px]">
              <select
                name="Выберите цвет"
                className="w-[362px] pl-[20px] pr-[17px] py-[16px] bg-grayer rounded-[8px]  outline-none"
              >
                <option value="Green" className="text-sm font-normal">
                  Green
                </option>
                <option value="Blue" className="text-sm font-normal">
                  Blue
                </option>
                <option value="Yellow" className="text-sm font-normal">
                  Yellow
                </option>
              </select>
            </div>
            <div className="flex items-center gap-[40px] mb-[30px]">
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary362"
                  label="Артикул *"
                  helperText={errors?.Артикул?.message}
                  defaultValue={initialValue?.Артикул}
                  {...register("Артикул", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary362"
                  label="Штрихкод *"
                  helperText={errors?.Штрихкод?.message}
                  defaultValue={initialValue?.Штрихкод}
                  {...register("Штрихкод", { required: true })}
                />
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Цена"
                  helperText={errors?.Цена?.message}
                  defaultValue={initialValue?.Цена}
                  {...register("Цена", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Цена со скидкой"
                  helperText={errors?.Ценасоскидкой?.message}
                  defaultValue={initialValue?.Ценасоскидкой}
                  {...register("Ценасоскидкой", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start">
                <Input2
                  variant="primary228"
                  label="Цена Ozon Premium"
                  helperText={errors?.ЦенаOzonPremium?.message}
                  defaultValue={initialValue?.ЦенаOzonPremium}
                  {...register("ЦенаOzonPremium", { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[80px] gap-[8px]  bg-white flex items-center justify-center">
          <button className="w-[117px] h-[40px] flex items-center justify-center bg-greener text-sm font-extrabold text-white rounded-[6px]">
            Сохранить
          </button>
          <button
            type="submit"
            className="w-[237px] h-[40px] bg-grayer rounded-[8px] flex items-center justify-center text-sm font-extrabold text-gray-400"
          >
            Выгрузить в маркетплейсы
          </button>
        </div>
      </form>
    </>
  );
};
