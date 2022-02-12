import { DealModel } from "../../models/deal";

export const GET_DEALS_SERVICE = "ADD_DEAL_SERVICE"
export interface IGetDealsService {
    getDealsService: () => Promise<DealModel[]>
}

