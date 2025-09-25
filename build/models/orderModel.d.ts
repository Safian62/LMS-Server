import { Document, Model } from "mongoose";
export interface IOrder extends Document {
    courseId: string;
    userId: string;
    payment_info: object;
}
declare const orderModel: Model<IOrder>;
export default orderModel;
//# sourceMappingURL=orderModel.d.ts.map