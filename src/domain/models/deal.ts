type ClientModel = {
    id: number;
    name: string;
    people_count: number;
    owner_id: number;
    address: string;
    active_flag: boolean;
    cc_email: string;
    value:number;

}

type PriceModel = {
    id: number;
    product_id:number;
    price:number;
    currency:string;
    cost:number;
}

export type ProductModel =  {
    id: number;
    name: string;
    code: string;
    description: string;
    unit: string;
    tax: number;
    category: string;
    active_flag:true;
    followers_count:number;
    add_time: string;
    quantity: number;
    update_time: string;
    prices: PriceModel[];
}

export type DealModel = {
    id: number;
    title: string
    status: string;
    filter_id: number;
    user_id: number;
    stage_id: number;
    organization: ClientModel;
    value: number;
    currency: string;
    add_time: string;
    active: boolean;
    deleted: boolean;
    products_count: number;
    products: ProductModel[];
    
}

