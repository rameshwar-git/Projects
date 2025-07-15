import {Schema, model,Document, Double} from 'mongoose';
import {StatusCode} from '../enums/StatusCode';
import { vehicleType } from 'enums/VehicleType';    

interface UserStatus extends Document {
    userId: string;
    rideId: string;
    currentLocation: {
        latitude: number;
        longitude: number;
    };
    destination: {
        latitude: number;
        longitude: number;
    };
    city?: string;
    fare?: number;
    vehicleType: vehicleType;
    rideStatus: StatusCode;
};

const userStatusSchema = new Schema<UserStatus>({
    userId: { type: String, required: true },
    rideId: { type: String, required: true },
    currentLocation: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    destination: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    city: { type: String, required: false },
    fare: { type: Number, default: 20 },
    vehicleType: { type: String, enum: Object.values(vehicleType), required: true },
    rideStatus: { type: String, enum: Object.values(StatusCode), default: StatusCode.INACTIVE }
}, {
    timestamps: true
});
const UserStatusModel = model<UserStatus>('UserStatus', userStatusSchema);
export default UserStatusModel;
