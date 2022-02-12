
import {Adapter, Service} from "@tsclean/core";
import { GET_USERS_REPOSITORY, IGetUsersRepository } from "../../../models/contracts/user/get-users-repository";
import { UserModel } from "../../../models/user";
import { IGetUsersService } from "../../user/get-users-service";

@Service()
export class GetUsersServiceImpl implements IGetUsersService {
    constructor(
        @Adapter(GET_USERS_REPOSITORY) private readonly getUsersRepository: IGetUsersRepository
    ) {
    }

    async getUsersService(): Promise<UserModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}