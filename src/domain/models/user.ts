export type UserModel = {
    id: string | number;
    email: string;
    password: string;
}

export type AddUserParams = Omit<UserModel, 'id'>
