import { DealModel } from "../../deal";

export const GET_DEALS_REPOSITORY = "GET_DEALS_REPOSITORY"
export interface IGetDealsRepository {
    getDealsRepository: () => Promise<DealModel[]>
}