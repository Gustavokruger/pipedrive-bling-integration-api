import {Adapter, Get, Mapping} from "@tsclean/core";
import { OrderModel } from "../../../../domain/models/order";
import { GET_ORDERS_SERVICE, IGetOrdersService } from "../../../../domain/use-cases/order/get-orders-service";
import { Auth } from "../../../helpers/auth";

@Mapping('api/orders')
export class GetOrdersController {
    constructor(
        @Adapter(GET_ORDERS_SERVICE) private readonly getOrdersService: IGetOrdersService

    ) {
    }
    
    @Get()
    @Auth(["admin"])
    async getOrdersController(): Promise<OrderModel[]> {
        return await this.getOrdersService.getOrdersService();
    }
}
