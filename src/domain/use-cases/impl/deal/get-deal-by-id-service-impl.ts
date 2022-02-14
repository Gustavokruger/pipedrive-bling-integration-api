import {Adapter, Service} from "@tsclean/core";
import { GET_DEAL_BY_ID_REPOSITORY, IGetDealByIdRepository } from "../../../models/contracts/deal/get-deal-by-id-repository";
import { DealModel } from "../../../models/deal";
import { IGetDealByIdService } from "../../deal/get-deal-by-id-service";

@Service()
export class GetDealByIdServiceImpl implements IGetDealByIdService {
    constructor(
        @Adapter(GET_DEAL_BY_ID_REPOSITORY) private readonly getDealByIdRepository: IGetDealByIdRepository
    ) {}

    async getDealByIdService(id: string): Promise<DealModel> {
        return await this.getDealByIdRepository.getDealByIdRepository(id);
    }
}