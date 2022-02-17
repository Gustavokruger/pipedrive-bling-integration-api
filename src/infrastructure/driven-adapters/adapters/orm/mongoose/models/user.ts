
import { model, Schema } from "mongoose";
import { UserModel } from "../../../../../../domain/models/user";

const schema = new Schema<UserModel>({
    id:  { type: String },
    email:  { type: String, required: true },
    password: { type: String, required: true },
    roles: [{ role: String }]
});

export const UserModelSchema = model<UserModel>('users', schema);
