import { Response } from "express";
export declare const getUserById: (id: string, res: Response) => Promise<void>;
export declare const getAllUsersService: (res: Response) => Promise<void>;
export declare const updateUserRoleService: (res: Response, id: string, role: string) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userService.d.ts.map