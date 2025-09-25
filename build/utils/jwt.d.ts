import { Response } from 'express';
import { IUser } from '../models/userModel';
interface ITokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'lax' | 'strict' | 'none' | undefined;
    secure?: boolean;
}
export declare const accessTokenOptions: ITokenOptions;
export declare const refreshTokenOptions: ITokenOptions;
export declare const sendToken: (user: IUser, statusCode: number, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=jwt.d.ts.map