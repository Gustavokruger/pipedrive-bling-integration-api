import { Adapter } from "@tsclean/core";
import { database } from "agenda/dist/agenda/database";
import axios from "axios";
import { PIPEDRIVE_KEY } from "../../application/config/enviroment";
import { IGetDealsRepository } from "../../domain/models/contracts/deal/get-deals-repository";
import { IGetWonDealsRepository } from "../../domain/models/contracts/deal/get-won-deals-repository";
import { ClientModel, DealModel, ProductModel } from "../../domain/models/deal";


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
            return await axios.get(`https://gustavovonkruger.pipedrive.com/api/v1/deals?api_token=${PIPEDRIVE_KEY}`, {headers: {'Content-Type': 'application/json'}}).then(r => r.data);
        } catch (error) {
            throw error;
        }
    }

    async getDealProductsRepository(id:number): Promise<ProductModel[]> {
        try {
            let a =  await axios.get(`https://gustavovonkruger.pipedrive.com/api/v1/deals/${id}/products?api_token=${PIPEDRIVE_KEY}`, {headers: {'Content-Type': 'application/json'}}).then(r => r.data);
            return a;
        } catch (error) {
            throw error;
        }
    }

    async getDealByIdRepository(dealId: number): Promise<{deal: DealModel, organization: any}> {
        try {
            let response = await axios.get(`https://gustavovonkruger.pipedrive.com/api/v1/deals?id=${dealId}&api_token=${PIPEDRIVE_KEY}`, {headers: {'Content-Type': 'application/json'}}).then((r) =>  r.data);

            return {deal: response, organization: response.related_objects.organization};
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