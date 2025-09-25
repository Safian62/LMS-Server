import { Document, Model } from "mongoose";
interface MonthData {
    month: string;
    count: number;
}
export declare function generataLast12MonthData<T extends Document>(model: Model<T>): Promise<{
    last12Month: MonthData[];
}>;
export {};
//# sourceMappingURL=analytics-generater.d.ts.map