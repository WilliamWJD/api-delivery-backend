import { Deliveries } from "@prisma/client";
import IDeliverieRepositorie from "../../repositories/IDeliverieRepositorie"

interface IRequest {
    item_name: string;
    id_client: string;
}

class CreateDeliverieUseCase {
    constructor(
        private deliverieRepositorie: IDeliverieRepositorie
    ) { }

    async execute({ item_name, id_client }: IRequest): Promise<Deliveries> {
        const deliverie = await this.deliverieRepositorie.save({
            item_name,
            id_client
        })

        return deliverie;
    }
}

export { CreateDeliverieUseCase }