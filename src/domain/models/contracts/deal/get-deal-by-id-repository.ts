import { DealModel } from "../../deal";

export const GET_DEAL_BY_ID_REPOSITORY = "GET_DEAL_BY_ID_REPOSITORY"

export interface IGetDealByIdRepository {
    getDealByIdRepository: (id: string) => Promise<DealModel>;
}