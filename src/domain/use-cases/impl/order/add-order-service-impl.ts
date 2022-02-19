import {Adapter, Service} from "@tsclean/core";
import { randomInt, randomUUID } from "crypto";
import { GET_DEAL_BY_ID_REPOSITORY, IGetDealByIdRepository } from "../../../models/contracts/deal/get-deal-by-id-repository";
import { ADD_ORDER_REPOSITORY, IAddOrderRepository } from "../../../models/contracts/order/add-order-repository";
import { ItemModel, OrderModel } from "../../../models/order";
import { IAddOrderService } from "../../order/add-order-service";
import Parser from 'xml2js';
import { Date } from "mongoose";
import moment from "moment";
import { GET_DEAL_PRODUCTS_REPOSITORY, IGetDealProductsRepository } from "../../../models/contracts/get-deal-products-repository";


@Service()
export class AddOrderServiceImpl implements IAddOrderService {
    constructor(
        @Adapter(ADD_ORDER_REPOSITORY) private readonly addOrderRepository: IAddOrderRepository,
        @Adapter(GET_DEAL_BY_ID_REPOSITORY) private readonly getDealByIdRepository: IGetDealByIdRepository,
        @Adapter(GET_DEAL_PRODUCTS_REPOSITORY) private readonly getDealProductsRepository: IGetDealProductsRepository,
    ) {}

    async addOrderService(dealId: number): Promise<OrderModel> {
        try {
            let order: OrderModel;
           
            return await this.getDealByIdRepository.getDealByIdRepository(dealId).then(async(r) => {

                 console.log(r.organization['2'])
                 for(let org in r.organization) {
                    order = {
                        "id": randomInt(1 ,100),
                        "date": moment().toDate(),
                        "client": r.organization[org],
                        "itens": []
                    }
                 }

                console.log(order)

                const builder = new Parser.Builder();
                const xmlRequest = builder.buildObject(order);
                return await this.addOrderRepository.addOrderRepository(xmlRequest);

            });
            // const products = await this.getDealProductsRepository.getDealProductsRepository(dealId);
            let orderItens: ItemModel[] = [];
            // products.forEach(product => {
            //     orderItens.push({
            //         codigo: product.id,
            //         descricao: product.description,
            //         vlr_unit: product.prices.find(price => price.currency === "BRL")!.price,
            //         qtde: product.quantity
            //     });
            // });
           
            
            
            
        } catch (error) {
            throw error
        }
        
    }

}