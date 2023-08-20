export class ServerError extends Error {
  public errorDetails?: unknown;
  constructor(error: Error | string) {
    super("GLOBAL.ERRORS.SERVER_ERROR");
    this.name = "ServerError";
    if (error instanceof Error) {
      this.stack = error.stack;
    }
    this.errorDetails = error;
  }
}

export class InvalidRecaptchaError extends Error {
  constructor() {
    super("GLOBAL.ERRORS.INVALID_RECAPTCHA");
    this.name = "InvalidRecaptchaError";
  }
}
