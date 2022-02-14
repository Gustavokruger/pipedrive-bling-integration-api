import { ADD_USER_REPOSITORY } from "../../../domain/models/contracts/user/add-user-repository"
import { GET_DEALS_REPOSITORY } from "../../../domain/models/contracts/deal/get-deals-repository"
import { ENCRYPT_REPOSITORY } from "../../../domain/models/contracts/encrypt-repository"
import { GET_USERS_REPOSITORY } from "../../../domain/models/contracts/user/get-users-repository"
import { HASH_COMPARE_REPOSITORY } from "../../../domain/models/contracts/hash/hash-compare-repository"
import { HASH_REPOSITORY } from "../../../domain/models/contracts/hash/hash-repository"
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "../../../domain/models/contracts/update-access-token-repository"
import { ADD_USER_SERVICE } from "../../../domain/use-cases/user/add-user-service"
import { AuthenticationServiceImpl } from "../../../domain/use-cases/impl/authentication-service-impl"
import { AddUserServiceImpl } from "../../../domain/use-cases/impl/user/add-user-service-impl"

import { UserMongooseRepositoryAdapter } from "../adapters/orm/mongoose/user-mongoose-repository-adapter"
import { DECRYPT_REPOSITORY } from "../../../domain/models/contracts/decrypt-repository"
import { GetUsersServiceImpl } from "../../../domain/use-cases/impl/user/get-users-service-impl"
import { AUTHENTICATION_SERVICE } from "../../../domain/use-cases/authentication-service"
import { GET_USERS_SERVICE } from "../../../domain/use-cases/user/get-users-service"
import { GET_WON_DEALS_REPOSITORY } from "../../../domain/models/contracts/deal/get-won-deals-repository"
import { GET_WON_DEALS_SERVICE } from "../../../domain/use-cases/deal/get-won-deals-service"
import { GET_DEALS_SERVICE } from "../../../domain/use-cases/deal/get-deals-service"
import { ADD_ORDER_REPOSITORY } from "../../../domain/models/contracts/order/add-order-repository"
import { GET_DEAL_BY_ID_REPOSITORY } from "../../../domain/models/contracts/deal/get-deal-by-id-repository"

import { GET_ORDERS_REPOSITORY } from "../../../domain/models/contracts/order/get-orders-repository"
import { GET_ORDERS_BY_DAY_REPOSITORY } from "../../../domain/models/contracts/order/get-orders-by-day-repository"
import { BcryptAdapter } from "../bcrypt-adapter"
import { BlingAdapter } from "../bling-adapter"
import { JwtAdapter } from "../jwt-adapter"
import { PipeDriveAdapter } from "../pipedrive-adapter"
import { CHECK_EMAIL_REPOSITORY } from "../../../domain/models/contracts/check-email-repository"
import { GET_DEAL_BY_ID_SERVICE } from "../../../domain/use-cases/deal/get-deal-by-id-service"
import { GET_ORDERS_SERVICE } from "../../../domain/use-cases/order/get-orders-service"
import { GetOrdersServiceImpl } from "../../../domain/use-cases/impl/order/get-orders-service-impl"
import { ADD_ORDER_SERVICE } from "../../../domain/use-cases/order/add-order-service"
import { AddOrderServiceImpl } from "../../../domain/use-cases/impl/order/add-order-service-impl"


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
        provide: GET_DEALS_REPOSITORY,
        useClass: PipeDriveAdapter,
    },
    {
        provide: GET_DEAL_BY_ID_REPOSITORY,
        useClass: PipeDriveAdapter,
    },
    {
        provide: GET_WON_DEALS_REPOSITORY,
        useClass: PipeDriveAdapter,
    },
    {
        provide: ADD_ORDER_REPOSITORY,
        useClass: BlingAdapter,
    },
    {
        provide: GET_ORDERS_REPOSITORY,
        useClass: PipeDriveAdapter,
    },
    {
        provide: GET_ORDERS_BY_DAY_REPOSITORY,
        useClass: PipeDriveAdapter,
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
        provide: CHECK_EMAIL_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
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

        provide: GET_WON_DEALS_SERVICE,
        useClass: AuthenticationServiceImpl,
    },
    {

        provide: GET_DEALS_SERVICE,
        useClass: AuthenticationServiceImpl,
    },
    {

        provide: GET_DEAL_BY_ID_SERVICE,
        useClass: GetUsersServiceImpl,
    },
    {

        provide: GET_ORDERS_SERVICE,
        useClass: GetOrdersServiceImpl,
    },
    {

        provide: ADD_ORDER_SERVICE,
        useClass: AddOrderServiceImpl,
    },

]