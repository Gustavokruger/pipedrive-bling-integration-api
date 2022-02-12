export type OrderModel = {
    status: string;
    filter_id: number;
    user_id: number;
    stage_id: number;
}

export type AddOrderByDay = {
    orders:  string[],
    date:  Date,
    total: number
}
