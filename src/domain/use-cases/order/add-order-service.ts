import { OrderModel } from "../../models/order";

export const ADD_ORDER_SERVICE  = "ADD_ORDER_SERVICE"

export interface IAddOrderService {
    addOrderService: (dealId: string) => Promise<OrderModel>
}