import {Adapter, Get, Mapping, Query} from "@tsclean/core";
import { DealModel } from "../../../../domain/models/deal";
import { GET_DEAL_BY_ID_SERVICE, IGetDealByIdService } from "../../../../domain/use-cases/deal/get-deal-by-id-service";
import { Auth } from "../../../helpers/auth";

@Mapping('api/deals')
export class GetDealByIdController {
    constructor(
        @Adapter(GET_DEAL_BY_ID_SERVICE) private readonly getDealById: IGetDealByIdService
    ) {
    }

    @Get()
    @Auth(["admin"])
    async getDealByIdController(@Query() id: number): Promise<DealModel> {
        return await this.getDealById.getDealByIdService(id)
    }
}
