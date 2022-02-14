import { ICheckEmailRepository } from "../../../../../domain/models/contracts/check-email-repository";
import { AddUserParams, UserModel } from "../../../../../domain/models/user";
import { UserModelSchema } from "./models/user";
import mongoose from "mongoose";

export class UserMongooseRepositoryAdapter {

    map(data: any): any {
        const {_id, email, password} = data
        return Object.assign({}, {id: _id.toString(), email, password})
    }

    async getUsersRepository(): Promise<UserModel[]> {
        return UserModelSchema.find().select("-password");
    }

    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }

    async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
        const user = await UserModelSchema.findOne({email}).exec();
        return user && this.map(user);
    }

    // async loadToken(token: string): Promise<ILoadAccountTokenRepository.Result> {
    //     console.log("adapter", token)
    //     let objectFilter: any;
    //     objectFilter["_id"] = new mongoose.mongo.ObjectId(token)
    //     console.log(objectFilter)
    //     const result = await UserModelSchema.findOne(objectFilter);
    //     return this.map(result);
    // }
}
