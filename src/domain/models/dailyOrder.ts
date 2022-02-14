import { OrderModel } from "./order"

export type DailyOrderModel = {
    orders:  OrderModel[],
    date:  Date,
    total: number
}

export type AddDailyOrder = {
    orders:  number[],
    date:  Date,
    total: number
}
