import {Schema, model, Document} from 'mongoose';
import { vehicleType } from 'enums/VehicleType';

interface RUser extends Document {
    uid: string;
    name: string;
    email: string;
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

const riderSchema = new Schema<RUser>({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    role: { type: String, required: true, default: 'rider' },
    vehicleType: { type: String, enum: Object.values(vehicleType), required: true },
    vehicleNumber: { type: String, required: true, unique: true },
    vehicleModel: { type: String, required: false },
    vehicleColor: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
});

const RiderModel = model<RUser>('Rider', riderSchema);
export default RiderModel;