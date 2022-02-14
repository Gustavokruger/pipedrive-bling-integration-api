import {Adapter, Get, Mapping, Query} from "@tsclean/core";
import { DealModel } from "../../../../domain/models/deal";
import { GET_DEAL_BY_ID_SERVICE, IGetDealByIdService } from "../../../../domain/use-cases/deal/get-deal-by-id-service";
import { GET_DEALS_SERVICE, IGetDealsService } from "../../../../domain/use-cases/deal/get-deals-service";
import { GET_WON_DEALS_SERVICE, IGetWonDealsService } from "../../../../domain/use-cases/deal/get-won-deals-service";
import { Auth } from "../../../helpers/auth";

@Mapping('api/deals/won')
export class GetWonDealsController {
    constructor(
        @Adapter(GET_WON_DEALS_SERVICE) private readonly getWonDealsService: IGetWonDealsService
    ) {
    }

    @Get()
    @Auth(["admin"])
    async GetWonDealsController(): Promise<DealModel[]> {
        return await this.getWonDealsService.getWonDealsService();
    }
}