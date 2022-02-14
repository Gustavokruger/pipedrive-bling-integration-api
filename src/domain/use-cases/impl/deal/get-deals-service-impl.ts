import {Adapter, Service} from "@tsclean/core";
import { GET_DEALS_REPOSITORY, IGetDealsRepository } from "../../../models/contracts/deal/get-deals-repository";
import { DealModel } from "../../../models/deal";
import { IGetDealsService } from "../../deal/get-deals-service";

@Service()
export class GetDealsServiceImpl implements IGetDealsService {
    constructor(
        @Adapter(GET_DEALS_REPOSITORY) private readonly getDealsRepository: IGetDealsRepository
    ) {}

    async getDealsService(): Promise<DealModel[]> {
        return await this.getDealsRepository.getDealsRepository();
    }
}
