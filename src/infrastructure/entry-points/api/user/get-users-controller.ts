import {Mapping, Get, Adapter } from "@tsclean/core";
import { UserModel } from "../../../../domain/models/user";
import { GET_USERS_SERVICE, IGetUsersService } from "../../../../domain/use-cases/user/get-users-service";
import { Auth } from "../../../helpers/auth";

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
    @Auth([""])
    async getUsersController(): Promise<UserModel[]> {
        return await this.getUsersService.getUsersService();
    }
}

