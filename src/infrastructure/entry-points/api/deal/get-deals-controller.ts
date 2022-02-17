import {Adapter, Get, Mapping, Query} from "@tsclean/core";
import { DealModel } from "../../../../domain/models/deal";
import { GET_DEALS_SERVICE, IGetDealsService } from "../../../../domain/use-cases/deal/get-deals-service";
import { Auth } from "../../../helpers/auth";

@Mapping('api/deals')
export class GetDealsController {
    constructor(
        @Adapter(GET_DEALS_SERVICE) private readonly getDealsService: IGetDealsService
    ) {
    }

    @Get()
    @Auth([""])
    async GetDealsController(): Promise<DealModel[]> {
        return await this.getDealsService.getDealsService();
    }
}
