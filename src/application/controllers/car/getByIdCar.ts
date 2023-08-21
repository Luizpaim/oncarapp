import { Controller } from '@/application/controllers';
import { GetByIdCar } from '@/domain/useCases';
import { Response, ok, notFound } from '@/application/helpers';
import { Validator, ValidationBuilder } from '@/application/validation';
import { NoDataFoundError } from '@/domain/entities/errors';
import { Car } from '@/domain/entities';



type HttpRequestParams = { _id: string };

type Model = Error | Car;

export class GetByIdCarController extends Controller {
  constructor(private readonly getByIdCar: GetByIdCar) {
    super();
  }
  async perform(requestBody: null, requestParams: HttpRequestParams, requestQuery: null): Promise<Response<Model>> {
    try {
      const result = await this.getByIdCar({
        _id: requestParams._id,
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
