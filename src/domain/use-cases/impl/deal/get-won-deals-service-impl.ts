import {Adapter, Service} from "@tsclean/core";
import { GET_WON_DEALS_REPOSITORY, IGetWonDealsRepository } from "../../../models/contracts/deal/get-won-deals-repository";
import { DealModel } from "../../../models/deal";
import { IGetWonDealsService } from "../../deal/get-won-deals-service";

@Service()
export class GetWonDealsServiceImpl implements IGetWonDealsService {
    constructor(
        @Adapter(GET_WON_DEALS_REPOSITORY)
        private readonly getWonDealsRepository: IGetWonDealsRepository
    ) {}

    async getWonDealsService(): Promise<DealModel[]> {
        return await this.getWonDealsRepository.getWonDealsRepository();
    }
}