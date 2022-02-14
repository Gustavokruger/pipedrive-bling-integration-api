import jwt from "jsonwebtoken";
import {AccessResourceInterface, ExecutionContextInterface} from "@tsclean/core";
import { IEncrypt } from "../../domain/models/contracts/encrypt-repository";


export class JwtAdapter implements IEncrypt, AccessResourceInterface {

    constructor(
        private readonly roles: string[]
    ) {
        this.roles = ['admin']
    }

    async encrypt(text: string | number | Buffer, roles: []): Promise<string> {
        const payload = {id: text, roles: roles}
        return jwt.sign({account: payload}, process.env.JWT_SECRET, {expiresIn: "1d"});
    }

    accessResource(context: ExecutionContextInterface): boolean {
        try {
            const request = context.getHttp().getRequest();
            const token = request.rawHeaders[1].split(" ")[1];

            if (token) {
                // const decode = jwt.verify(token, config.JWT_SECRET);
                const roles = [{role: 'admin'}];

                let assignRole = false;

                for (const role of roles) {
                    assignRole = false;
                    for (const roleElement of this.roles) {
                        let roleExist = role.role === roleElement;
                        if (roleExist) assignRole = roleExist;
                        if (assignRole) return true;
                    }
                }
            }
            return false

        } catch (e) {
            throw e;
        }
    }
}