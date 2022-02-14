
import axios from  'axios'
import moment from 'moment';
import config from '../../../config';
import { IAddOrderRepository } from '../../domain/models/contracts/order/add-order-repository';
import { IGetOrdersByDayRepository } from '../../domain/models/contracts/order/get-orders-by-day-repository';
import { IGetOrdersRepository } from '../../domain/models/contracts/order/get-orders-repository';
import { OrderModel } from '../../domain/models/order';

export class BlingAdapter implements IAddOrderRepository, IGetOrdersRepository, IGetOrdersByDayRepository {

    map(data: any): any {
        const {_id, date, client, itens } = data;
        return Object.assign({}, {id: _id.toString(), date, client, itens});
    }

    async addOrderRepository(feature: string ): Promise<OrderModel> {
        try {
            return await axios.post(`https://bling.com.br/Api/v2/pedido/apikey=${config.BLING_KEY}`, feature, {headers: {'Content-Type': 'text/xml'}})
                .then(res => res.data);
        } catch (error) {
            throw error;
        }
        
    }

    async getOrdersRepository(): Promise<OrderModel[]> {
        try {
            return await axios.get(`https://bling.com.br/Api/v2/pedidos/json&apikey=${config.BLING_KEY}`, {headers: {'Content-Type': 'text/xml'}})
        } catch (error) {
            throw error;
        }
    }

    async getOrdersByDayRepository(): Promise<OrderModel[]> {
        try {
            return await axios.get(`https://bling.com.br/Api/v2/pedidos/json&apikey=${config.BLING_KEY}/filters=dataEmissao[${moment('YYY-MM-DD')} TO ${moment('YYY-MM-DD')} ]`, {headers: {'Content-Type': 'text/xml'}}).then(res => res.data);
        } catch (error) {
            throw error;
        }
    }
}