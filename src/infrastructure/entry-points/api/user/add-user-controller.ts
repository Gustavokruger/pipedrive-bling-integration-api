import {Mapping, Get, Adapter, Body, Post} from "@tsclean/core";
import { AddUserParams } from "../../../../domain/models/user";
import { ADD_USER_SERVICE, IAddUserService } from "../../../../domain/use-cases/user/add-user-service";
import { Auth } from "../../../helpers/auth";
import { ValidateFields } from "../../../helpers/validate-fields";

@Mapping('api/add-user')
export class AddUserController {

    constructor(
        @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
    ) {
    }

    @Post()
    async addUserController(@Body() data: AddUserParams): Promise<IAddUserService.Result | IAddUserService.Exist | any> {

        const {errors, isValid} = ValidateFields.fieldsValidation(data);

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const account = await this.addUserService.addUserService(data);

        if (account === true) return {statusCode: 400, body: {"message": "Email is already in use"}}

        return account;
    }
}
