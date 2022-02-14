import { OrderModel } from "../../models/order";

export const GET_ORDERS_SERVICE  = "GET_ORDERS_SERVICE"

export interface IGetOrdersService {
   getOrdersService: () => Promise<OrderModel[]>;
}

