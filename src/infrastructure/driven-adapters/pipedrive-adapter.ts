import { Adapter } from "@tsclean/core";
import axios from "axios";
import { PIPEDRIVE_KEY } from "../../application/config/enviroment";
import { IGetDealsRepository } from "../../domain/models/contracts/deal/get-deals-repository";
import { IGetWonDealsRepository } from "../../domain/models/contracts/deal/get-won-deals-repository";
import { DealModel } from "../../domain/models/deal";


const pipedrive = require('pipedrive');
pipedrive.Configuration.apiToken = PIPEDRIVE_KEY;

export class PipeDriveAdapter implements IGetDealsRepository, IGetWonDealsRepository {

    
    map(data: any): any {
        const {
            _id,
            status,
            filter_id,
            user_id,
            stage_id,
            organization,
            value,
            currency,
            add_time,
            active,
            deleted,
            products_count,
            products,
        } = data;
        return Object.assign({}, {
            id: _id.toString(), 
            status, 
            filter_id, 
            user_id, 
            stage_id,
            organization,
            value,
            currency,
            add_time,
            active,
            deleted,
            products_count,
            products,
        })
    }

    async getDealsRepository(): Promise<DealModel[]> {
        try {
            let responses = await axios.get(`https://gustavovonkruger.pipedrive.com/api/v1/deals?api_token=${PIPEDRIVE_KEY}`, {headers: {'Content-Type': 'application/json'}}).then(r => r.data);
            let deals: DealModel[] = [];

            responses.array.forEach(deal => {
                deals = [...deals, {
                    id: deal.id,
                    title: deal.title,
                    status: deal.status,
                    filter_id: deal.filter_id,
                    user_id: deal.user_id,
                    stage_id: deal.stage_id,
                    organization: deal.organization,
                    value: deal.value,
                    currency: deal.currency,
                    add_time: deal.add_time,
                    active: deal.active,
                    deleted: deal.deleted,
                    products_count: deal.products_count,
                    products: deal.products,
                }]
            });
            return deals;
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