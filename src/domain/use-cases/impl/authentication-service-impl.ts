
import {Adapter, Service} from "@tsclean/core";
import { CHECK_EMAIL_REPOSITORY, ICheckEmailRepository } from "../../models/contracts/check-email-repository";
import { ENCRYPT_REPOSITORY, IEncrypt } from "../../models/contracts/encrypt-repository";
import { HASH_COMPARE_REPOSITORY, IHashCompare } from "../../models/contracts/hash/hash-compare-repository";
import { IUpdateAccessTokenRepository, UPDATE_ACCESS_TOKEN_REPOSITORY } from "../../models/contracts/update-access-token-repository";
import { IAuthenticationService } from "../authentication-service";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor(
        @Adapter(ENCRYPT_REPOSITORY) private readonly encrypt: IEncrypt,
        @Adapter(HASH_COMPARE_REPOSITORY) private readonly hashCompare: IHashCompare,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
    ) {
    }

    async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        try {
            const account = await this.checkEmailRepository.checkEmail(data.email);
            const isValid = await this.hashCompare.compare(data.password, account.password);
            if (isValid) {
                const accessToken = await this.encrypt.encrypt(account.id, account.roles);
                return {
                    accessToken,
                    name: account.firstName
                }
            }
            throw({message: "invalid username and/or password"})

        } catch (error) {
            throw(error)
        }

    }
}