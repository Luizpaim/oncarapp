/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Validator } from "@/adapters/validation";
import { RequiredEmailError, RequiredFieldError } from "@/adapters/errors";

export class Required implements Validator {
  constructor(readonly value: any, readonly fieldName?: string) {}

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName);
    }
    return undefined;
  }
}

export class RequiredString extends Required {
  constructor(readonly value: string, readonly fieldName?: string) {
    super(value, fieldName);
  }

  validate(): Error | undefined {
    if (super.validate() !== undefined || this.value === "") {
      return new RequiredFieldError(this.fieldName);
    }
    return undefined;
  }
}


export class RequiredEmail extends RequiredString {
  /* eslint-disable */
  private readonly EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(readonly value: string, readonly fieldName?: string) {
    super(value, fieldName);
  }
  validate(): Error | undefined {
    if (super.validate() !== undefined || !this.EMAIL_REGEX.test(this.value)) {
      return new RequiredEmailError();
    }
    return undefined;
  }
}
