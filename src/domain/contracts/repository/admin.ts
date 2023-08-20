import { Admin } from '@/domain/entities/';

export interface AdminRepository {
  create: (params: CreateAdmin.Input) => Promise<CreateAdmin.Output>;

  getAuthenticate: (params: GetAuthenticateAdmin.Input) => Promise<GetAuthenticateAdmin.Output>;
}

type TypeAdmin = {
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export namespace CreateAdmin {
  export type Input = TypeAdmin;
  export type Output = Partial<Admin>;
}

export namespace GetAuthenticateAdmin {
  export type Input = { email: string };
  export type Output = Partial<Admin>;
}
