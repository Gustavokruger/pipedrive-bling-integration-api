
type ClientModel = {
    id: number;
    nome: string;
    email: string;
    endereco: string;
}

export type ItemModel = {
    codigo: number;
    descricao: string;
    vlr_unit: number;
    qtde: number;
}

export type OrderModel = {
    id: number;
    date: Date;
    client: ClientModel;
    itens: ItemModel[];
}

export type AddOrder = {

}


