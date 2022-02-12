

import {IAddUserService} from "../../add-user-service";
import { ADD_USER_REPOSITORY, IAddUserRepository } from "../../../models/contracts/add-user-repository";
import { Adapter, Service } from "@tsclean/core";
import { AddUserParams, UserModel } from "../../../models/user";

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