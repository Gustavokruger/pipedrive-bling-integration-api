import jwt from "jsonwebtoken";
import config from "../../../../config";

import {AccessResourceInterface, ExecutionContextInterface} from "@tsclean/core";
import { IEncrypt } from "../../../domain/models/contracts/encrypt-repository";

export class JwtAdapter implements IEncrypt {

    async encrypt(text: string | number | Buffer): Promise<string> {
        const payload = {id: text}
        return jwt.sign({account: payload}, config.JWT_SECRET, {expiresIn: "1d"});
    }

    // async accessResource(context: ExecutionContextInterface): Promise<boolean>  {
    //     try {
    //         const request = context.getHttp().getRequest();
    //         const token = request.rawHeaders[1].split(" ")[1];

    //         if (token) {
    //             const decode =  jwt.verify(token, config.JWT_SECRET) as any;
    //             const roles =  decode["account"].roles;

    //             let assignRole = false;

    //             for (const role of roles) {
    //                 assignRole = false;
    //                 for (const roleElement of this.roles) {
    //                     let roleExist = role.role === roleElement;
    //                     if (roleExist) assignRole = roleExist;
    //                     if (assignRole) return true;
    //                 }
    //             }
    //         }
    //         return false;
    //     } catch (e) {
    //         throw(e)
    //     }
    // }
}