import { Controller } from '@/application/controllers';
import { CreateLead } from '@/domain/useCases';
import { Response, badRequest, ok } from '@/application/helpers';
import { Validator, ValidationBuilder } from '@/application/validation';
import { DataAlreadyExistsError, Lead } from '@/domain/entities';

type HttpRequestBody = { idCar: string; name: string; email: string; contact: string };

type Model = Error | Lead;

export class CreateLeadController extends Controller {
  constructor(private readonly createLead: CreateLead) {
    super();
  }
  async perform(requestBody: HttpRequestBody): Promise<Response<Model>> {
    try {
      const result = await this.createLead({
        idCar: requestBody.idCar,
        name: requestBody.name,
        email: requestBody.email,
        contact: requestBody.contact,
      });
      return ok(result);
    } catch (error) {
      if (error instanceof DataAlreadyExistsError) return badRequest(error);
      throw error;
    }
  }
  buildValidators({ name, email, contact, idCar }: HttpRequestBody): Validator[] {
    return [
      ...ValidationBuilder.of({ value: idCar, fieldName: 'idCar' }).required().build(),
      ...ValidationBuilder.of({ value: name, fieldName: 'name' }).required().build(),
      ...ValidationBuilder.of({ value: email, fieldName: 'email' }).required().email().build(),
      ...ValidationBuilder.of({ value: contact, fieldName: 'contact' }).required().build(),
    ];
  }
}
