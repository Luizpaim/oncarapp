import { Lead } from '@/domain/entities';

export interface LeadRepository {
  create: (params: CreateLead.Input) => Promise<CreateLead.Output>;
  getEmail: (params: GetEmailLead.Input) => Promise<GetEmailLead.Output>;
}

type TypeLead = {
  idCar: string;
  name: string;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
};

export namespace CreateLead {
  export type Input = TypeLead;
  export type Output = Lead;
}

export namespace GetEmailLead {
  export type Input = { email: string };
  export type Output = boolean;
}
