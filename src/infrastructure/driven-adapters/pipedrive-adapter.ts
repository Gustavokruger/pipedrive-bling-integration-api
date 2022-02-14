import config from "../../../config";
import { IGetDealsRepository } from "../../domain/models/contracts/deal/get-deals-repository";
import { IGetWonDealsRepository } from "../../domain/models/contracts/deal/get-won-deals-repository";
import { DealModel } from "../../domain/models/deal";


export class PipeDriveAdapter implements IGetDealsRepository, IGetWonDealsRepository {

    client: any = {};

    constructor(pipedrive = require('pipedrive')) {
        this.client = new pipedrive.Client(config.PIPEDRIVE_KEY);

    }
    map(data: any): any {
        const {_id, status, filter_id, user_id, stage_id} = data;
        return Object.assign({}, {id: _id.toString(), status, filter_id, user_id, stage_id})
    }

    async getDealsRepository(): Promise<DealModel[]> {
        try {
            return await this.client.Deals.getAll({});
        } catch (error) {
            throw error;
        }
    }

    async getDealByIdRepository(dealId: string): Promise<DealModel> {
        try {
            return await this.client.Deals.get({id: dealId});
        } catch (error) {
            throw error;
        }
    }

    async getWonDealsRepository(): Promise<DealModel[]> {
        try {
            return await this.client.Deals.getAll({status: "won"});
        } catch (error) {
            throw error;
        }
    }
}