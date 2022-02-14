
import { OrderModel } from "../../order";

export const ADD_ORDER_REPOSITORY = "ADD_USER_REPOSITORY"
export interface IAddOrderRepository {
    addOrderRepository: (request: string)=> Promise<OrderModel>;
}
