import { CarRepository, GetAllCars } from '@/domain/contracts';
import { NoDataFoundError } from '@/domain/entities';

export type GetAllCars = (params: {
  page: number;
  qtd: number;
  brand?: string;
  model?: string;
  year?: string;
  price?: string;
}) => Promise<GetAllCars.Output>;

type Setup = (carRepo: CarRepository) => GetAllCars;

export const setupGetAllCars: Setup = (carRepo) => async (params) => {
  const { page, qtd, brand, model, price, year } = params;
  const filters = { deletedAt: null };

  if (brand) filters['brand'] = { $regex: '.*' + brand + '.*', $options: 'i' };

  if (model) filters['model'] = { $regex: '.*' + model + '.*', $options: 'i' };

  if (price) filters['price'] = { $regex: '.*' + price + '.*', $options: 'i' };

  if (year) filters['year'] = { $regex: '.*' + year + '.*', $options: 'i' };

  const cars = await carRepo.getAll({
    page,
    qtd,
    filters,
  });

  if (!cars.data) throw new NoDataFoundError('Nenhum modelo encontrado!');

  return cars;
};
