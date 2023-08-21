import { LeadRepository, CreateLead } from '@/domain/contracts';
import { formatDateTime } from '@/domain/entities/helpers';

export type CreateLead = (params: { name: string; email: string; contact: string }) => Promise<CreateLead.Output>;

type Setup = (leadRepo: LeadRepository) => CreateLead;

export const setupCreateCar: Setup = (leadRepo) => async (params) => {
  const { contact, email, name } = params;

  const lead = await leadRepo.create({
    contact,
    email,
    name,
    createdAt: formatDateTime(new Date()),
    updatedAt: formatDateTime(new Date()),
  });

  return lead;
};
