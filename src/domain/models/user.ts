export type UserModel = {
    id: string | number;
    email: string;
    password: string;
    roles: UserRoleModel[];
}

export type AddUserParams = Omit<UserModel, 'id'>

export type UserRoleModel = [
    {
        role: string
    }
]
