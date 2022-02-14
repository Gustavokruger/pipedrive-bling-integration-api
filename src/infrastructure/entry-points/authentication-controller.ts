import { Mapping, Inject, Post, Body } from "@tsclean/core";
import { AUTHENTICATION_SERVICE, IAuthenticationService } from "../../domain/use-cases/authentication-service";
import { ValidateFields } from "../helpers/validate-fields";

@Mapping('api/authentication')
export class AuthenticationController {

    constructor(
        @Inject(AUTHENTICATION_SERVICE) private readonly authenticationService: IAuthenticationService
    ) {
    }

    @Post()
    async authController(@Body() data: IAuthenticationService.Params): Promise<IAuthenticationService.Result | any> {

        const {errors, isValid} = ValidateFields.fieldsValidation(data);

        if (!isValid) return {statusCode: 422, body: {"message": errors}}

        const result = await this.authenticationService.auth(data);

        if (result === null) return {statusCode: 401, body: {"message": "Invalid credentials"}}

        return {
            accessToken: result.accessToken,
            name: result.name
        }
    }
}
