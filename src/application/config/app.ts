import {controllers} from "../../infrastructure/entry-points/api";
import {Container} from "@tsclean/core";
import { adapters, services } from "../../infrastructure/driven-adapters/providers";


@Container({
    imports: [],
    providers: [...services, ...adapters],
    controllers: [...controllers],
})

export class AppContainer {
}