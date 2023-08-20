import { Lead } from '@/domain/entities';

export interface LeadRepository {
  create: (params: CreateLead.Input) => Promise<CreateLead.Output>;
}

type TypeLead = {
  name: string;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export namespace CreateLead {
  export type Input = TypeLead;
  export type Output = Lead;
}
