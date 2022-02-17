import {Adapter, Get, Mapping, Query} from "@tsclean/core";
import { DealModel } from "../../../../domain/models/deal";
import { GET_WON_DEALS_SERVICE, IGetWonDealsService } from "../../../../domain/use-cases/deal/get-won-deals-service";
import { Auth } from "../../../helpers/auth";

@Mapping('api/deals/won')
export class GetWonDealsController {
    constructor(
        @Adapter(GET_WON_DEALS_SERVICE) private readonly getWonDealsService: IGetWonDealsService
    ) {
    }

    @Get()
    @Auth([""])
    async GetWonDealsController(): Promise<DealModel[]> {
        return await this.getWonDealsService.getWonDealsService();
    }
}