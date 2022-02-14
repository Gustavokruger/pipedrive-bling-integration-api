import { OrderModel } from "../../order";

export const GET_ORDERS_REPOSITORY = "GET_ORDERS_REPOSITORY";

export interface IGetOrdersRepository {
    getOrdersRepository: () => Promise<OrderModel[]>    
}
