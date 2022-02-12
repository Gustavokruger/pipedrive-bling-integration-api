import {Service} from "@tsclean/core";
import {IAuthenticationService} from "@/domain/use-cases/authentication-service";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor() {
    }
}