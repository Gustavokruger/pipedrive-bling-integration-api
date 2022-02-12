import { ICheckEmailRepository } from "../../../../../domain/models/contracts/check-email-repository";
import { AddUserParams, UserModel } from "../../../../../domain/models/user";
import { UserModelSchema } from "./models/user";
import mongoose from "mongoose";
import { OrderByDaySchema } from "./models/orderByDay";
import { AddOrderByDay } from "../../../../../domain/models/order";

export class OrderByDayMongooseRepositoryAdapter {

    map(data: any): any {
        const {_id, firstName, lastName, email, password, roles} = data
        return Object.assign({}, {id: _id.toString(), firstName, lastName, email, password, roles})
    }

    async getOrdersByDayRepository(): Promise<UserModel[]> {
        return OrderByDaySchema.find();
    }

    async addOrderByDayRepository(data: AddOrderByDay): Promise<AddOrderByDay> {
        return await OrderByDaySchema.create(data);
    }
}
