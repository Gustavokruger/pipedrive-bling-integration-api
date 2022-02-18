import { ProductModel } from "../deal"


export const GET_DEAL_PRODUCTS_REPOSITORY = "GET_DEAL_PRODUCTS_REPOSITORY"

export interface IGetDealProductsRepository {
    getDealProductsRepository: (id: number) => Promise<ProductModel[]>;
}