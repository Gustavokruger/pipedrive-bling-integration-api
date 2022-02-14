import { DailyOrderModel } from "../models/dailyOrder";

export const ADD_DAILY_ORDER_SERVICE = "ADD_DAILY_ORDER_SERVICE";

export interface IAddDailyOrderService {
    addDailyOrderService: () => Promise<DailyOrderModel>
}