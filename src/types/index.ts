import type { Image } from "sanity";

export interface Make {
  _id?: string;
  _type?: "make";
  title?: string;
}

export interface Warranty {
  standard: string; // This field can have values like "30 days or 300 miles"
  motor: {
    price?: number; // Price for the motor warranty (if purchased)
  };
  transmission: {
    price?: number; // Price for the transmission warranty (if purchased)
  };
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
  cost?: {
    price?: number;
    kbbHigh?: number;
  };
  transmission?: string;
  mainImage?: Image;
  sold?: boolean;
  warranty?: Warranty;
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
  cost?: {
    price?: number;
    kbbHigh?: number;
  };
  mileage?: number;
  transmission?: string;
  doors?: number;
  emissionStatus?: boolean;
  previousOwners?: number;
  interiorDetails?: {
    interiorColor?: string;
    sunroof?: boolean;
    seatingCapacity?: string;
  };
  exteriorDetails?: {
    condition?: string;
    paintColor?: string;
    tireCondition?: string;
  };
  images?: Image[];
  warranty?: Warranty;
}
