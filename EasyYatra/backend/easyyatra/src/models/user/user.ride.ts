import {Schema, model,Document} from 'mongoose';

interface TUser extends Document {
    uid : string;
    name: string;
    email: string;
    password: string;
    contact: number;
    role: string;
    timestamp?: Date;
}
const userSchema = new Schema<TUser>({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true, length:10},
    role: { type: String, default: 'user' },
    timestamp: { type: Date, default: Date.now }
}, {
    timestamps: true,
});
export const Travler = model<TUser>('Travler', userSchema);
export default Travler;