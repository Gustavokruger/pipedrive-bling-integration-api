import {Adapter, Service} from "@tsclean/core";
import moment from "moment";
import { ADD_DAILY_ORDER_REPOSITORY, IAddDailyOrderRepository } from "../../models/contracts/daily-order/add-daily-order-repository";
import { GET_ORDERS_BY_DAY_REPOSITORY, IGetOrdersByDayRepository } from "../../models/contracts/order/get-orders-by-day-repository";
import { DailyOrderModel } from "../../models/dailyOrder";
import { OrderModel } from "../../models/order";
import { IAddDailyOrderService } from "../add-daily-order-service";


@Service()
export class AddDailyOrderServiceImpl implements IAddDailyOrderService {
    constructor(
        @Adapter(ADD_DAILY_ORDER_REPOSITORY) private readonly addDailyOrderRepository: IAddDailyOrderRepository,
        @Adapter(GET_ORDERS_BY_DAY_REPOSITORY) private readonly getOrdersByDayRepository: IGetOrdersByDayRepository 
        
    ) {
    }

    async addDailyOrderService(): Promise<DailyOrderModel> {
        let sum: number = 0;
        const orders: OrderModel[] =  await this.getOrdersByDayRepository.getOrdersByDayRepository();
        orders.forEach(order => {
            order.itens.forEach(item => {
                sum += item.vlr_unit;
            })
        });
        let dailyOrder: DailyOrderModel = {
            orders: orders,
            date:  moment("YYY-MM-DD").toDate(),
            total: sum
        }

        return await this.addDailyOrderRepository.addDailyOrderRepository(dailyOrder);
    }
}