import Mongoose from 'mongoose';

import { Lead } from '@/domain/entities';
import { LeadRepository, CreateLead, GetEmailLead } from '@/domain/contracts';

const leadSchema = new Mongoose.Schema<Lead>({
  idCar: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  createdAt: { type: String },
  updatedAt: { type: String },
  deletedAt: { type: String },
});

const leadDocument = Mongoose.model<Lead>('Lead', leadSchema);

export class LeadRepositoryMongoDb implements LeadRepository {
  async create(input: CreateLead.Input): Promise<CreateLead.Output> {
    const lead = await leadDocument.create({
      ...input,
    });
    return new Lead(lead);
  }
  async getEmail(input: GetEmailLead.Input): Promise<GetEmailLead.Output> {
    const getEmail = await leadDocument.findOne({ ...input });
    return getEmail ? true : false;
  }
}
