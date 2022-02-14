import { OrderModel } from "./order"

export type DailyOrderModel = {
    orders:  OrderModel[],
    date:  Date,
    total: number
}
