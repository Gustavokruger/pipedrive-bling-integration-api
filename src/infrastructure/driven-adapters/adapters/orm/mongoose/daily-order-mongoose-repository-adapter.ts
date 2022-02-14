
import { DailyOrderSchema } from "./models/dailyOrder";
import { AddDailyOrder, DailyOrderModel } from "../../../../../domain/models/dailyOrder";

export class DailyOrderMongooseRepositoryAdapter {

    map(data: any): any {
        const {_id, orders, date, total} = data
        return Object.assign({}, {id: _id.toString(), orders, date, total})
    }

    async getDailyOrderRepository(): Promise<DailyOrderModel[]> {
        return DailyOrderSchema.find();
    }

    async addDailyOrderRepository(dailyOrder: AddDailyOrder): Promise<AddDailyOrder> {
        return await DailyOrderSchema.create(dailyOrder);
    }
}
