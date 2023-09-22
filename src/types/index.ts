import type { Image } from "sanity";

export interface Make {
  _id?: string;
  _type?: "make";
  title?: string;
}

export interface ShortCar {
  _id?: string;
  name?: string;
  slug?: string;
  make?: Make;
  model?: string;
  year?: string;
  vin?: string;
  mileage?: number;
  cost?: number;
  mainImage?: Image;
  sold?: boolean;
}

export interface CarsPagePayload {
  cars?: ShortCar[];
}

export interface CarPayload {
  _id?: string;
  _type?: "car";
  name?: string;
  slug?: string;
  make?: Make;
  model?: string;
  year?: string;
  vin?: string;
  cost?: number;
  mileage?: number;
  doors?: number;
  emissionStatus?: boolean;
  previousOwners?: number;
  interiorDetails?: {
    material?: string;
    sunroof?: boolean;
    seatingCapacity?: string;
  };
  exteriorDetails?: {
    condition?: string;
    paintColor?: string;
    tireCondition?: string;
  };
  images?: Image[];
}
