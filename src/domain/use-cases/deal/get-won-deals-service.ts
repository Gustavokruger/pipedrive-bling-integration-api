import { DealModel } from "../../models/deal";

export const GET_WON_DEALS_SERVICE = "GET_WON_DEALS_SERVICE"

export interface IGetWonDealsService {
    getWonDealsService: () => Promise<DealModel[]>
}