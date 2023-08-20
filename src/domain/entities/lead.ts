type TypeLead = {
  _id: string;
  name: string;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export class Lead {
  _id: string;
  name: string;
  email: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  constructor({ _id, name, email, contact, createdAt, updatedAt, deletedAt }: TypeLead) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
