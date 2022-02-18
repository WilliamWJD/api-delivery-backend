import { Deliveries } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import IDeliverie from "../dtos/IDeliverie";

class DeliveryRepositorie {
    async save({ item_name, id_client }: IDeliverie): Promise<Deliveries> {
        const deliverie = await prismaClient.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })

        return deliverie
    }
}

export { DeliveryRepositorie }