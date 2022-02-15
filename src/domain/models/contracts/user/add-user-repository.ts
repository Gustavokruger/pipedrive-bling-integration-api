import { AddUserParams, UserModel, UserRoleModel } from "../../user";

export const ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY";

export interface IAddUserRepository {
    addUserRepository: (data: AddUserParams) => Promise<IAddUserRepository.Result>;
} 

export namespace IAddUserRepository {
    export  type Result = {
        id?: string;
        email: string;
        roles: UserRoleModel[]
        password: string
    }
}