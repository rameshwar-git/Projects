import {Schema, model,Document} from 'mongoose';

interface TUser extends Document {
    uid: string;
    name: string;
    email: string;
    password: string;
    contact: number;
    role: string;
    timestamp?: Date;
}
const userSchema = new Schema<TUser>({
    uid: { type: String, required: false, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true, length:10},
    role: { type: String, required: false, default: 'ride' }
}, {
    timestamps: true,
});
export const RideModel = model<TUser>('Ride', userSchema);
export default RideModel;