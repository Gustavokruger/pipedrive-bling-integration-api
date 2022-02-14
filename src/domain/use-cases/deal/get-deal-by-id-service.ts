import { DealModel } from "../../models/deal";

export const GET_DEAL_BY_ID_SERVICE = "GET_DEAL_BY_ID_SERVICE"
export interface IGetDealByIdService {
    getDealByIdService: (id: string) => Promise<DealModel>
}
