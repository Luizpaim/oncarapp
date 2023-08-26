import { Controller } from "@/application/controllers";
import { GetAllCars } from "@/domain/useCases";
import { Response, ok, notFound } from "@/application/helpers";
import { NoDataFoundError } from "@/domain/entities/errors";
import { Car } from "@/domain/entities";
import { Result } from "@/domain/contracts";

type HttpRequestQuery = {
  page: number;
  qtd: number;
  brand: string;
  model: string;
  year: string;
  price: string;
};

type Model = Error | Result<Car[]>;

export class GetAllCarsController extends Controller {
  constructor(private readonly getAllCars: GetAllCars) {
    super();
  }
  async perform(requestBody: null, requestParams: null, requestQuery: HttpRequestQuery): Promise<Response<Model>> {
    try {
      const result = await this.getAllCars({
        page: requestQuery.page,
        qtd: requestQuery.qtd,
        brand: requestQuery.brand,
        model: requestQuery.model,
        price: requestQuery.price,
        year: requestQuery.year,
      });
      return ok(result);
    } catch (error) {
      if (error instanceof NoDataFoundError) return notFound(error);
      throw error;
    }
  }
}
