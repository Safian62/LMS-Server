import { Document, Model } from "mongoose";
export interface INotification extends Document {
    title: string;
    message: string;
    status: string;
    userId: string;
}
declare const notificationModel: Model<INotification>;
export default notificationModel;
//# sourceMappingURL=notificationModel.d.ts.map