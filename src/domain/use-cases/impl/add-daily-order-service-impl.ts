import {Adapter, Service} from "@tsclean/core";
import { AddOrderByDay } from "../../models/order";
import { ADD_ORDER_BY_DAY_SERVICE, IAddOrderByDayService } from "../add-daily-order-service";

@Service()
export class AddDailyOrderServiceImpl implements IAddDailyOrderService {
    constructor(
        @Adapter(ADD_ORDER_BY_DAY_SERVICE) private readonly addDailyOrderRepository: IAddDailyOrderRepository;
        @Adapter(ADD_ORDER_BY_DAY_SERVICE) private readonly getOrderByDayRepository: IGetOrderByDayRepository; //TODO
        
    ) {
    }

    async addOrderByDayService(): Promise<AddDailyOrder> {
        const orders =  await this.getOrderRepository.getOrderRepository();
    }
}