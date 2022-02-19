import { ClientModel } from "./deal"


export type ItemModel = {
    codigo: number;
    descricao: string;
    vlr_unit: number;
    qtde: number;
}

export type OrderModel = {
    id: number;
    date: Date;
    client: any;
    itens: ItemModel[];
}

export type AddOrder = {

}


