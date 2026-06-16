export enum VehicleCategory {
    Sedan,
    SUV,
    Truck
}

export interface Vehicle {
    id: number;
    model: string;
    engineCC: number;
    category: VehicleCategory;
}

export type Driver = {
    name: string;
    licenseNumber: string;
}

export interface WithId {
    id: number;
}