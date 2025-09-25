import { Document, Model } from "mongoose";
import { IUser } from "./userModel";
interface IComment extends Document {
    user: IUser;
    question: string;
    questionReplies?: IComment[];
}
interface IReview extends Document {
    user: IUser;
    rating: number;
    comment: string;
    commentReplies: IComment[];
}
interface ILink extends Document {
    title: string;
    url: string;
}
interface ICourseData extends Document {
    title: string;
    description: string;
    videoUrl: string;
    videoThumbnail: object;
    videoSection: string;
    videoLength: number;
    videoPlayer: string;
    links: ILink[];
    suggestion: string;
    questions: IComment[];
}
export interface ICourse extends Document {
    name: String;
    description?: string;
    categories: string;
    price: number;
    estimatedPrice?: number;
    thumbnail: object;
    tags: string;
    level: string;
    demoUrl: String;
    benefits: {
        title: string;
    }[];
    prerequisties: {
        title: string;
    }[];
    reviews: IReview[];
    courseData: ICourseData[];
    ratings?: number;
    purchased: number;
}
declare const courseModel: Model<ICourse>;
export default courseModel;
//# sourceMappingURL=courseModel.d.ts.map