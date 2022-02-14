

import {IAddUserService} from "../../user/add-user-service";
import { ADD_USER_REPOSITORY, IAddUserRepository } from "../../../models/contracts/user/add-user-repository";
import { AddUserParams, UserModel } from "../../../models/user";
import { Service, Adapter } from "@tsclean/core";
import { HASH_REPOSITORY, IHashRepository } from "../../../models/contracts/hash/hash-repository";
import { CHECK_EMAIL_REPOSITORY, ICheckEmailRepository } from "../../../models/contracts/check-email-repository";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(HASH_REPOSITORY) private readonly hash: IHashRepository,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Adapter(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<UserModel | IAddUserService.Exist> {
        const userExist = await this.checkEmailRepository.checkEmail(data.email);
        if (userExist) return true;

        const hashPassword = await this.hash.hash(data.password);
        return await this.addUserRepository.addUserRepository({...data, password: hashPassword});
        
    }
}