import { ICheckEmailRepository } from "../../../../../domain/models/contracts/check-email-repository";
import { ILoadAccountTokenRepository } from "../../../../../domain/models/contracts/load-account-token-repository";
import { IAddUserRepository } from "../../../../../domain/models/contracts/user/add-user-repository";
import { AddUserParams, UserModel } from "../../../../../domain/models/user";
import { UserModelSchema } from "./models/user";
import mongoose from 'mongoose';
import { IGetUsersRepository } from "../../../../../domain/models/contracts/user/get-users-repository";


export class UserMongooseRepositoryAdapter implements IAddUserRepository, IGetUsersRepository, ICheckEmailRepository, ILoadAccountTokenRepository {

    map(data: any): any {
        const {_id, email, password, roles} = data
        return Object.assign({}, {id: _id.toString(), email, password, roles})
    }

    async getUsersRepository(): Promise<UserModel[]> {
        return UserModelSchema.find().select("-password");
    }
    
    async addUserRepository(data: AddUserParams): Promise<IAddUserRepository.Result> {
        return await UserModelSchema.create(data);
    }

    async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
        const user = await UserModelSchema.findOne({email}).exec();
        return user && this.map(user);
    }

    async loadToken(token: string): Promise<ILoadAccountTokenRepository.Result> {
        console.log("adapter", token)
        let objectFilter: any;
        objectFilter["_id"] = new mongoose.mongo.ObjectId(token)
        console.log(objectFilter)
        const result = await UserModelSchema.findOne(objectFilter);
        return this.map(result);
    }
}
