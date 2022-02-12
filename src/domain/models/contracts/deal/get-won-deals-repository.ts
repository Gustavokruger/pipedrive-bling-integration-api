import { DealModel } from "../../deal";

export const GET_WON_DEALS_REPOSITORY = "GET_WON_DEALS_REPOSITORY"
export interface IGetWonDealsRepository {
    getWonDealsRepository: () => Promise<DealModel[]>
}