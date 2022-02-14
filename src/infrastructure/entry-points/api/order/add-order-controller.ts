import {Adapter, Mapping, Post} from "@tsclean/core";
import { AddOrder } from "../../../../domain/models/order";
import { ADD_ORDER_SERVICE, IAddOrderService } from "../../../../domain/use-cases/order/add-order-service";
import { Auth } from "../../../helpers/auth";
import { ValidateFields } from "../../../helpers/validate-fields";

@Mapping('api/orders')
export class AddOrderController {
    constructor(
        @Adapter(ADD_ORDER_SERVICE) private readonly addOrderService: IAddOrderService
    ) {
    }

    @Post()
    @Auth(["admin"])
    async addOrderController(dealId: number): Promise<AddOrder> {
        return await this.addOrderService.addOrderService(dealId);
    }

}