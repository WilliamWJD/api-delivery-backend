import { Deliveryman } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import IDeliveryman from "../dtos/IDeliveryman";

class DeliverymanRepository {
    async findByUsername(username: string): Promise<Deliveryman | undefined> {
        const deliveryman = await prismaClient.deliveryman.findFirst({
            where: {
                username: {
                    mode: 'insensitive',
                    equals: username
                }
            }
        })

        return deliveryman || undefined;
    }

    async createDeliveryman({ username, password }: IDeliveryman): Promise<Deliveryman> {
        const deliveryman = await prismaClient.deliveryman.create({
            data: {
                username,
                password
            }
        })

        return deliveryman;
    }
}

export { DeliverymanRepository }