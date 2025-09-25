import { Document } from "mongoose";
interface FaqItem extends Document {
    question: string;
    answer: string;
}
interface Category extends Document {
    title: string;
}
interface BannerImage extends Document {
    public_id: string;
    url: string;
}
interface Layout extends Document {
    type: string;
    faq: FaqItem[];
    categories: Category[];
    banner: {
        image: BannerImage;
        title: string;
        subTitle: string;
    };
}
declare const layoutModel: import("mongoose").Model<Layout, {}, {}, {}, Document<unknown, {}, Layout, {}, {}> & Layout & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default layoutModel;
//# sourceMappingURL=layoutModel.d.ts.map