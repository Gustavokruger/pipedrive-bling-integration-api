
import { OrderByDaySchema } from "./models/orderByDay";
import { DailyOrderModel } from "../../../../../domain/models/dailyOrder";

export class DailyOrderMongooseRepositoryAdapter {

    map(data: any): any {
        const {_id, orders, date, total} = data
        return Object.assign({}, {id: _id.toString(), orders, date, total})
    }

    async getDailyOrderRepository(): Promise<DailyOrderModel[]> {
        return OrderByDaySchema.find();
    }

    async addDailyOrderRepository(dailyOrder: DailyOrderModel): Promise<DailyOrderModel> {
        return await OrderByDaySchema.create(dailyOrder);
    }
}
