

import { OrderModel } from "../../order";

export const GET_ORDERS_BY_DAY_REPOSITORY = "GET_ORDERS_REPOSITORY";

export interface IGetOrdersByDayRepository {
    getOrdersByDayRepository: () => Promise<OrderModel[]>
}