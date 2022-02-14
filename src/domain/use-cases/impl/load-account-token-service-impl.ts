import { Service, Adapter } from "@tsclean/core";
import { DECRYPT_REPOSITORY, IDecrypt } from "../../models/contracts/decrypt-repository";
import { ILoadAccountTokenRepository, LOAD_ACCOUNT_TOKEN_REPOSITORY } from "../../models/contracts/load-account-token-repository";
import { ILoadAccountTokenService } from "../load-account-token-service";

@Service()
export class LoadAccountTokenServiceImpl implements ILoadAccountTokenService {

    constructor(
        @Adapter(DECRYPT_REPOSITORY) private readonly decrypt: IDecrypt,
        @Adapter(LOAD_ACCOUNT_TOKEN_REPOSITORY) private readonly loadAccountTokenRepository: ILoadAccountTokenRepository
    ) {
    }

    async loadToken(token: string): Promise<ILoadAccountTokenService.Result> {
        let accessToken: string;

        try {
            accessToken = await this.decrypt.decrypt(token);
        } catch (e) {
            throw e;
        }

        if (accessToken) {
            const account = await this.loadAccountTokenRepository.loadToken(accessToken);
            console.log("service", account)
            if (account) return account;
        }

        throw new Error(accessToken);
        
    }
}

