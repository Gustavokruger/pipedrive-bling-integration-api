import { DailyOrderModel } from "../../dailyOrder";

export const GET_DAILY_ORDER_REPOSITORY = "GET_DAILY_ORDER_REPOSITORY"
export interface IGetDailyOrderRepository {
    getDailyOrderRepository(): Promise<DailyOrderModel[]>;
}