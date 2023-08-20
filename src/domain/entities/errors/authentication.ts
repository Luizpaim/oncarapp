export class AuthenticationError extends Error {
  public errorDetails?: unknown;
  constructor(details?: unknown) {
    super('GLOBAL.ERRORS.AUTHENTICATION_FAILED');
    this.name = 'AuthenticationError';
    this.errorDetails = details;
  }
}

export class TokenExpiredError extends Error {
  public errorDetails?: unknown;
  constructor(details?: unknown) {
    super('GLOBAL.ERRORS.TOKEN_EXPIRED_ERROR');
    this.name = 'TokenExpiredError';
    this.errorDetails = details;
  }
}
