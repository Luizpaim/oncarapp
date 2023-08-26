/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validator, Required, RequiredString } from "@/application/validation";
import { RequiredEmail } from "@/application/validation";

export class ValidationBuilder {
  private constructor(private readonly value: any, private readonly fieldName?: string, private readonly validators: Validator[] = []) {}

  static of({ value, fieldName }: { value: any; fieldName?: string }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName);
  }

  required(): ValidationBuilder {
    if (typeof this.value === "string") {
      this.validators.push(new RequiredString(this.value, this.fieldName));
    } else {
      this.validators.push(new Required(this.value, this.fieldName));
    }
    return this;
  }

  email(): ValidationBuilder {
    this.validators.push(new RequiredEmail(this.value, this.fieldName));
    return this;
  }

  build(): Validator[] {
    return this.validators;
  }
}
