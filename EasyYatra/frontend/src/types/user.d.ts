import { vehicleType } from "./vehicleType";

export interface RideUser{
    _id?: string;
    email: string;
    name: string;
    password: string;
    contact: number;
    role: string;
};
export interface RideUser{
    _id?: string;
    email: string;
    name: string;
    password: string;
    contact: number;
    role: string;
    vehicleType: vehicleType;
    vehicleNumber: string;
    vehicleModel?: string;
    vehicleColor: string;
    isActive: boolean;
    createdAt: Date;
}
