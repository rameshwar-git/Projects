import {Schema, model,Document} from 'mongoose';
import {StatusCode} from '../enums/StatusCode';
import {vehicleType} from '../enums/VehicleType';    

interface UserStatus extends Document {
    userId: string;
    rideId: string;
    currentLocation: { latitude: number; longitude: number; };
    destination: { latitude: number; longitude: number; };
    city: string;
    fare: number;
    vehicleType: vehicleType;
    rideStatus: StatusCode;
};

const userStatusSchema = new Schema<UserStatus>({
    userId: { type: String, required: true, unique: true },
    rideId: { type: String, null: true, default: '' },
    currentLocation: {
        latitude: { type: Number, required: true, null: true, default: 0 },
        longitude: { type: Number, required: true, null: true, default: 0 }
    },
    destination: {
        latitude: { type: Number, required: true, null: true, default: 0 },
        longitude: { type: Number, required: true, null: true,default: 0 }
    },
    city: { type: String, null: true ,default:'' },
    fare: { type: Number, null: true, default: 0 },
    vehicleType: { type: String, enum: vehicleType, default: vehicleType.NONE },
    rideStatus: { type: String, enum: StatusCode, default: StatusCode.INACTIVE }
}, {
    timestamps: true
});

const UserStatusModel = model<UserStatus>('UserStatus', userStatusSchema);
export default UserStatusModel;
