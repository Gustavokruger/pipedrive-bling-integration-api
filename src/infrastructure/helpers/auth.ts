
import {applyDecorators, AccessResource} from "@tsclean/core";
import { JwtAdapter } from "../driven-adapters/jwt-adapter";

export const Auth = (roles: string[]) =>  {
    return applyDecorators(AccessResource(new JwtAdapter(roles)));
}