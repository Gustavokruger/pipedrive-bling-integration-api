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
            const deal = await this.getDealByIdRepository.getDealByIdRepository(dealId);
            console.log(deal)
            const products = await this.getDealProductsRepository.getDealProductsRepository(dealId);
            let orderItens: ItemModel[] = [];
            products.forEach(product => {
                orderItens.push({
                    codigo: product.id,
                    descricao: product.description,
                    vlr_unit: product.prices.find(price => price.currency === "BRL")!.price,
                    qtde: product.quantity
                });
            });
            let order: OrderModel = {
                id: randomInt(1 ,100),
                date: moment('YYY-MM-DD').toDate(),
                client: {
                    id: deal.organization.id,
                    nome: deal.organization.name,
                    email: deal.organization.cc_email,
                    endereco: deal.organization.address,
                },
                itens: orderItens
            };
            const builder = new Parser.Builder();
            const xmlRequest = builder.buildObject(order);
            return await this.addOrderRepository.addOrderRepository(xmlRequest);
            
        } catch (error) {
            throw error
        }
        
    }

}