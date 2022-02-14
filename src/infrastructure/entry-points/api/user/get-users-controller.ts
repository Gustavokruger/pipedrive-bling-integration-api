import {Mapping, Get, Adapter, Body, Post} from "@tsclean/core";
import { AddUserParams, UserModel } from "../../../../domain/models/user";
import { ADD_USER_SERVICE, IAddUserService } from "../../../../domain/use-cases/user/add-user-service";
import { GET_USERS_SERVICE, IGetUsersService } from "../../../../domain/use-cases/user/get-users-service";
import { Auth } from "../../../helpers/auth";
import { ValidateFields } from "../../../helpers/validate-fields";

@Mapping('api/users')
export class GetUsersController {

    constructor(
        @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
    ) {
    }
     /**
        * @swagger
        * tags:
        *   name: Users
        *   description: The users managing API
        */


     /**
        * @swagger
        * /books:
        *   get:
        *     summary: Returns the list of all the users
        *     tags: [Users]
        *     responses:
        *       200:
        *         description: The list of the users
        *         content:
        *           application/json:
        *             schema:
        *               type: array
        *               items:
        *                 $ref: '#/components/schemas/User'
        */
    @Get()
    @Auth(["admin"])
    async getUsersController(): Promise<UserModel[]> {
        return await this.getUsersService.getUsersService();
    }
}

