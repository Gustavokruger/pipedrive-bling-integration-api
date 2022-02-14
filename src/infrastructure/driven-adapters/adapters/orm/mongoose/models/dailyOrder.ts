
import { Collection, model, Schema } from "mongoose";
import { AddDailyOrder, DailyOrderModel } from "../../../../../../domain/models/dailyOrder";

const schema = new Schema<AddDailyOrder>({
    orders:  [{ type: String ,  required: true }],
    date:  { type: Date, required: true },
    total: {type: Number}
});

export const DailyOrderSchema = model<AddDailyOrder>('dailyOrder', schema, 'OrdersByDay');
