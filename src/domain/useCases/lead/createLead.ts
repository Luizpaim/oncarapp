import { LeadRepository, CreateLead } from "@/domain/contracts";
import { DataAlreadyExistsError } from "@/domain/entities";
import { formatDateTime } from "@/domain/entities/helpers";

export type CreateLead = (params: { idCar: string; name: string; email: string; contact: string }) => Promise<CreateLead.Output>;

type Setup = (leadRepo: LeadRepository) => CreateLead;

export const setupCreateLead: Setup = (leadRepo) => async (params) => {
  const { contact, email, name, idCar } = params;

  const emailLead = await leadRepo.getEmail({ email });

  if (emailLead) throw new DataAlreadyExistsError("Já estamos com seus dados, aguarde nosso contato!");

  const lead = await leadRepo.create({
    idCar,
    contact,
    email,
    name,
    createdAt: formatDateTime(new Date()),
    updatedAt: formatDateTime(new Date()),
  });

  return lead;
};
