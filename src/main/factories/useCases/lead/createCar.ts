import { CreateLead, setupCreateLead } from "@/domain/useCases";
import { makeLeadRepo, makeBcryptUtils } from "@/main/factories/infrastructure";

export const makeCreateLead = (): CreateLead => {
  return setupCreateLead(makeLeadRepo());
};
