import { ADD_USER_REPOSITORY } from "../../../domain/models/contracts/add-user-repository"
import { ADD_USER_SERVICE } from "../../../domain/use-cases/add-user-service"
import { AddUserServiceImpl } from "../../../domain/use-cases/impl/add-user-service-impl"
import { UserMongooseRepositoryAdapter } from "../adapters/orm/mongoose/user-mongoose-repository-adapter"

export const adapters = [
    {
        provide: HASH_REPOSITORY,
        useClass: BcryptAdapter,

    },
    {
        provide: ADD_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: GET_USERS_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: UPDATE_ACCESS_TOKEN_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: HASH_COMPARE_REPOSITORY,
        useClass: BcryptAdapter,
    },
    {
        provide: ENCRYPT_REPOSITORY,
        useClass: JwtAdapter,
    },
    {
        provide: DECRYPT_REPOSITORY,
        useClass: JwtAdapter,
    }
]

export const services = [
    {

        provide: ADD_USER_SERVICE,
        useClass: AddUserServiceImpl,
    },
    {

        provide: GET_USERS_SERVICE,
        useClass: GetUsersServiceImpl,
    },
    {

        provide: AUTHENTICATION_SERVICE,
        useClass: AuthenticationServiceImpl,
    }
]