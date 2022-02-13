import {Service} from "@tsclean/core";
import {IGetOrderService} from "@/domain/use-cases/get-order-service";

@Service()
export class GetOrderServiceImpl implements IGetOrderService {
    constructor() {
    }
}