import { DailyOrderModel } from "../../dailyOrder";

export const ADD_DAILY_ORDER_REPOSITORY = "ADD_DAILY_ORDER_REPOSITORY"
export interface IAddDailyOrderRepository {
    addDailyOrderRepository(dailyOrder: DailyOrderModel): Promise<DailyOrderModel>;
}
