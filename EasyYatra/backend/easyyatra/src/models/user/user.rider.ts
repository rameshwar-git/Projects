import {Schema, model, Document} from 'mongoose';
// Use correct relative path for your project structure
import { vehicleType } from '../../enums/VehicleType';

interface RUser extends Document {
    udi: string;
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

const userSchema = new Schema<RUser>({
    udi: { type: String, required: false, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    role: { type: String, default: 'rider' },
    vehicleType: { type: String, enum: Object.values(vehicleType), required: true },
    vehicleNumber: { type: String, required: true, unique: true },
    vehicleModel: { type: String, required: false },
    vehicleColor: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

const RiderModel = model<RUser>('Rider', userSchema);
export default RiderModel;