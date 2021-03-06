import { AddUserParams, UserModel, UserRoleModel } from "../../models/user";

export const ADD_USER_SERVICE = "ADD_USER_SERVICE";
export interface IAddUserService {
    addUserService: (data: AddUserParams) => Promise<IAddUserService.Result | IAddUserService.Exist>
}

export namespace IAddUserService {
    export type Exist = boolean;
    export type Result = {
        id?: string
        email: string,
        password: string,
        roles: UserRoleModel[]
    }
  }