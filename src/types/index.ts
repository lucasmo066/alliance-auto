import type { Image } from "sanity";

// car related interfaces
export interface Make {
  _id?: string;
  _type?: "make";
  title?: string;
}

export interface Warranty {
  standard: string; 
  motor: {
    price?: number;
  };
  transmission: {
    price?: number; 
  };
}

export interface ShortCar {
  _id?: string;
  name?: string;
  date?: Date;
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

export interface CarPayload {
  _id?: string;
  _type?: "car";
  name?: string;
  date?: Date;
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

//Page Payloads

export interface CarsPagePayload {
  cars?: ShortCar[];
}

export interface HomePagePayload {
  cars?: ShortCar[];
}







