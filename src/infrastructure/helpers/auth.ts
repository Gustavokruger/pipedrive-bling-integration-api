import {applyDecorators, AccessResource} from "@tsclean/core";
import { JwtAdapter } from "../driven-adapters/adapters/jwt-adapter";

export function Auth(roles: string[]) {
    return applyDecorators(AccessResource(new JwtAdapter(roles)));
}