import { DealModel } from "../../models/deal";

export const GET_DEALS_SERVICE = "GET_DEALS_SERVICE"
export interface IGetDealsService {
    getDealsService: () => Promise<DealModel[]>
}

