import {Mapping, Get} from "@tsclean/core";

@Mapping('api/add-user')
export class AddUserController {

    constructor() {
    }
    
    // Example function
    @Get()
    async getWelcome(): Promise<any> {
        return 'Welcome to the world of clean architecture'
    }
}
