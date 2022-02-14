import { Adapter } from "@tsclean/core";
import { PIPEDRIVE_KEY } from "../../application/config/enviroment";
import { IGetDealsRepository } from "../../domain/models/contracts/deal/get-deals-repository";
import { IGetWonDealsRepository } from "../../domain/models/contracts/deal/get-won-deals-repository";
import { DealModel } from "../../domain/models/deal";

const pipedrive = require('pipedrive-client')

export class PipeDriveAdapter implements IGetDealsRepository, IGetWonDealsRepository {

    client: any = {};
    
    map(data: any): any {
        const {_id, status, filter_id, user_id, stage_id} = data;
        return Object.assign({}, {id: _id.toString(), status, filter_id, user_id, stage_id})
    }

    async getDealsRepository(): Promise<DealModel[]> {
        try {
            const client = new pipedrive.Client(PIPEDRIVE_KEY);
            return await client.Deals.getAll({});
        } catch (error) {
            throw error;
        }
    }

    async getDealByIdRepository(dealId: number): Promise<DealModel> {
        try {
            const client = new pipedrive.Client(PIPEDRIVE_KEY);
            return await client.Deals.get({id: dealId});
        } catch (error) {
            throw error;
        }
    }

    async getWonDealsRepository(): Promise<DealModel[]> {
        try {
            const client = new pipedrive.Client(PIPEDRIVE_KEY);
            return await client.Deals.getAll({status: "won"});
        } catch (error) {
            throw error;
        }
    }
}