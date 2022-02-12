

import {IAddUserService} from "../../user/add-user-service";
import { ADD_USER_REPOSITORY, IAddUserRepository } from "../../../models/contracts/user/add-user-repository";
import { AddUserParams, UserModel } from "../../../models/user";
import { Service, Adapter } from "@tsclean/core";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<UserModel> {
        return await this.addUserRepository.addUserRepository(data);
    }
}