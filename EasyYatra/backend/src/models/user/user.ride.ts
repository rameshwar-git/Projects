import {Schema, model,Document} from 'mongoose';

interface TUser extends Document {
    email: string;
    name: string;
    password: string;
    contact: number;
    role: string;
}
const userSchema = new Schema<TUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true, length:10},
    role: { type: String, required: false, default: 'ride' }
}, {
    timestamps: true,
});
export const RideModel = model<TUser>('Ride', userSchema);
export default RideModel;