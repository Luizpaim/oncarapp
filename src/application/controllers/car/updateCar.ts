import { Controller } from '@/application/controllers';
import { UpdateCar } from '@/domain/useCases';
import { Response, notFound, ok } from '@/application/helpers';
import { Validator, ValidationBuilder } from '@/application/validation';
import { NoDataFoundError } from '@/domain/entities/errors';
import { Car } from '@/domain/entities';

type HttpRequestBody = { brand: string; model: string; year: string; price: number };

type HttpRequestParams = { _id: string };

type Model = Error | Car;

export class UpdateCarController extends Controller {
  constructor(private readonly updateCar: UpdateCar) {
    super();
  }
  async perform(requestBody: HttpRequestBody, requestParams: HttpRequestParams, requestQuery: null): Promise<Response<Model>> {
    try {
      const result = await this.updateCar({
        _id: requestParams._id,
        brand: requestBody.brand,
        model: requestBody.model,
        year: requestBody.year,
        price: requestBody.price,
      });
      return ok(result);
    } catch (error) {
      if (error instanceof NoDataFoundError) return notFound(error);
      throw error;
    }
  }
  buildValidators({ _id }: HttpRequestParams): Validator[] {
    return [...ValidationBuilder.of({ value: _id, fieldName: '_id' }).required().build()];
  }
}
