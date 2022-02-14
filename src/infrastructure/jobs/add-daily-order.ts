import { Adapter } from "@tsclean/core";
import { ADD_DAILY_ORDER_SERVICE, IAddDailyOrderService } from "../../domain/use-cases/add-daily-order-service";

export default class addDailyOrder {

    constructor(
        @Adapter(ADD_DAILY_ORDER_SERVICE) private readonly addDailyOrderService: IAddDailyOrderService
    ) {}
    public async handler (): Promise<any> {
        return await this.addDailyOrderService.addDailyOrderService();
    }
}