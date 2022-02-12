import { ADD_USER_REPOSITORY } from "../../../domain/models/contracts/user/add-user-repository"
import { ENCRYPT_REPOSITORY } from "../../../domain/models/contracts/encrypt-repository"
import { GET_USERS_REPOSITORY } from "../../../domain/models/contracts/user/get-users-repository"
import { HASH_COMPARE_REPOSITORY } from "../../../domain/models/contracts/hash/hash-compare-repository"
import { HASH_REPOSITORY } from "../../../domain/models/contracts/hash/hash-repository"
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "../../../domain/models/contracts/update-access-token-repository"
import { ADD_USER_SERVICE } from "../../../domain/use-cases/user/add-user-service"
import { AuthenticationServiceImpl } from "../../../domain/use-cases/impl/authentication-service-impl"
import { AddUserServiceImpl } from "../../../domain/use-cases/impl/user/add-user-service-impl"
import { BcryptAdapter } from "../adapters/bcrypt-adapter"
import { JwtAdapter } from "../adapters/jwt-adapter"
import { UserMongooseRepositoryAdapter } from "../adapters/orm/mongoose/user-mongoose-repository-adapter"
import { DECRYPT_REPOSITORY } from "../../../domain/models/contracts/decrypt-repository"

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
    },
    {

        provide: GET_SUCCESSFULL_LEADS_SERVICE,
        useClass: AuthenticationServiceImpl,
    },
    {

        provide: GET_LEADS_SERVICE,
        useClass: AuthenticationServiceImpl,
    },
]