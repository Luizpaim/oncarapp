import { Controller } from "@/application/controllers";
import { CreateCar } from "@/domain/useCases";
import { Response, ok, serverError } from "@/application/helpers";
import { Validator, ValidationBuilder } from "@/application/validation";
import { ServerError } from "@/application/errors";
import { Car } from "@/domain/entities";

type HttpRequestBody = { brand: string; model: string; year: string; price: string };

type Model = Error | Car;

export class CreateCarController extends Controller {
  constructor(private readonly createCar: CreateCar) {
    super();
  }
  async perform(requestBody: HttpRequestBody): Promise<Response<Model>> {
    try {
      const result = await this.createCar({
        brand: requestBody.brand,
        model: requestBody.model,
        year: requestBody.year,
        price: requestBody.price,
      });
      return ok(result);
    } catch (error) {
      if (error instanceof ServerError) return serverError(error);
      throw error;
    }
  }
  buildValidators({ brand, model, price, year }: HttpRequestBody): Validator[] {
    return [
      ...ValidationBuilder.of({ value: brand, fieldName: "brand" }).required().build(),
      ...ValidationBuilder.of({ value: model, fieldName: "model" }).required().build(),
      ...ValidationBuilder.of({ value: price, fieldName: "price" }).required().build(),
      ...ValidationBuilder.of({ value: year, fieldName: "year" }).required().build(),
    ];
  }
}
