import {Adapter, Service} from "@tsclean/core";
import { GET_ORDERS_REPOSITORY, IGetOrdersRepository } from "../../../models/contracts/order/get-orders-repository";
import { OrderModel } from "../../../models/order";
import { IGetOrdersService } from "../../order/get-orders-service";

@Service()
export class GetOrdersServiceImpl implements IGetOrdersService {
    constructor(
        @Adapter(GET_ORDERS_REPOSITORY) private readonly getOrdersRepository: IGetOrdersRepository,
    ) {
    }

    async getOrdersService(): Promise<OrderModel[]> {
        return await this.getOrdersRepository.getOrdersRepository();
    }
}