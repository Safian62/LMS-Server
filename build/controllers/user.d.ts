import { Request, Response, NextFunction } from "express";
export declare const registrationUser: (req: Request, res: Response, next: NextFunction) => void;
interface IActivationToken {
    token: string;
    activationCode: string;
}
export declare const createActivationToken: (user: any) => IActivationToken;
export declare const activateUser: (req: Request, res: Response, next: NextFunction) => void;
export declare const loginUser: (req: Request, res: Response, next: NextFunction) => void;
export declare const logoutUser: (req: Request, res: Response, next: NextFunction) => void;
export declare const updateAccessToken: (req: Request, res: Response, next: NextFunction) => void;
export declare const getUserInfo: (req: Request, res: Response, next: NextFunction) => void;
export declare const socialAuth: (req: Request, res: Response, next: NextFunction) => void;
export declare const updateUserInfo: (req: Request, res: Response, next: NextFunction) => void;
export declare const updatePassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const updateProfilePicture: (req: Request, res: Response, next: NextFunction) => void;
export declare const getAllUsers: (req: Request, res: Response, next: NextFunction) => void;
export declare const updateUserRole: (req: Request, res: Response, next: NextFunction) => void;
export declare const deleteUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=user.d.ts.map