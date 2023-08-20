import { Result } from '@/domain/contracts/result';
import { Car } from '@/domain/entities';

export interface CarRepository {
  create: (params: CreateCar.Input) => Promise<CreateCar.Output>;
  update: (params: UpdateCar.Input) => Promise<UpdateCar.Output>;
  delete: (params: DeleteCar.Input) => Promise<DeleteCar.Output>;
  getAll: (params: GetAllCar.Input) => Promise<GetAllCar.Output>;
  getById: (params: GetByIdCar.Input) => Promise<GetByIdCar.Output>;
}

type TypeCar = {
  brand: string;
  model: string;
  year: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export namespace CreateCar {
  export type Input = TypeCar;
  export type Output = Car;
}
export namespace UpdateCar {
  export type Input = Partial<TypeCar>;
  export type Output = Car;
}
export namespace DeleteCar {
  export type Input = { _id: string; date: string };
  export type Output = Car;
}
export namespace GetAllCar {
  export type Input = { page: number; qtd: number; filters: { brand?: string; model?: string; year?: string; price?: string; deletedAt: string } };
  export type Output = Result<Car[]>;
}
export namespace GetByIdCar {
  export type Input = { _id: string };
  export type Output = Car;
}
