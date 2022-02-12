
import { Collection, model, Schema } from "mongoose";
import { AddOrderByDay, OrderModel } from "../../../../../../domain/models/order";

const schema = new Schema<AddOrderByDay>({
    orders:  [{ type: String ,  required: true }],
    date:  { type: Date, required: true },
    total: {type: Number}
});

export const OrderByDaySchema = model<AddOrderByDay>('ordersByDay', schema, 'OrdersByDay');
