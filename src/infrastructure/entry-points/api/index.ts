import { AuthenticationController } from "../authentication-controller";
import { GetDealByIdController } from "./deal/get-deal-by-id-controller";
import { GetDealsController } from "./deal/get-deals-controller";
import { GetWonDealsController } from "./deal/get-won-deals-controller";
import { AddOrderController } from "./order/add-order-controller";
import { GetOrdersController } from "./order/get-orders-controller";
import { AddUserController } from "./user/add-user-controller";
import { GetUsersController } from "./user/get-users-controller";

export const controllers = [
    AddUserController,
    GetUsersController,
    AuthenticationController,
    GetDealsController,
    GetDealByIdController,
    GetWonDealsController,
    AddOrderController,
    GetOrdersController
]