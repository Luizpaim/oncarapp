type TypeCar = {
  _id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export class Car {
  _id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  constructor({ _id, brand, model, year, price, createdAt, updatedAt, deletedAt }: TypeCar) {
    this._id = _id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
