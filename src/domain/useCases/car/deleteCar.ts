import { CarRepository, DeleteCar } from '@/domain/contracts';
import { formatDateTime } from '@/domain/entities/helpers';

export type DeleteCar = (params: { _id: string }) => Promise<DeleteCar.Output>;

type Setup = (carRepo: CarRepository) => DeleteCar;

export const setupDeleteCar: Setup = (carRepo) => async (params) => {
  const { _id } = params;

  const car = await carRepo.delete({
    _id,
    deletedAt: formatDateTime(new Date()),
  });

  return car;
};
