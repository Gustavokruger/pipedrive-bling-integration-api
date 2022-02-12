import { DealModel } from "../../models/deal";

export const GET_WON_DEALS_SERVICE = "ADD_WON_DEAL_SERVICE"

export interface IGetWonDealsService {
    getWonDealsService: () => Promise<DealModel[]>
}