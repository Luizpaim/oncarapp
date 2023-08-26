import { CarRepository, CreateCar } from "@/domain/contracts";
import { formatDateTime } from "@/domain/entities/helpers";

export type CreateCar = (params: { brand: string; model: string; year: string; price: string }) => Promise<CreateCar.Output>;

type Setup = (carRepo: CarRepository) => CreateCar;

export const setupCreateCar: Setup = (carRepo) => async (params) => {
  const { brand, model, price, year } = params;

  const car = await carRepo.create({
    brand,
    model,
    price,
    year,
    createdAt: formatDateTime(new Date()),
    updatedAt: formatDateTime(new Date()),
  });

  return car;
};
