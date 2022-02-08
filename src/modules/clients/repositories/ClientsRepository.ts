import { Clients } from '@prisma/client';
import { prismaClient } from '../../../database/prismaClient';
import IClient from '../dtos/IClient';

class ClientsRepository {
    async findByUsername(username: string): Promise<Clients | undefined> {
        const client = await prismaClient.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                    equals: username
                }
            }
        });

        return client || undefined
    }

    async createClient({ username, password }: IClient): Promise<Clients> {
        const client = await prismaClient.clients.create({
            data: {
                username,
                password
            }
        })

        return client;
    }
}

export { ClientsRepository }